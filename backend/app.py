from flask import Flask, render_template, request, redirect, url_for, session, send_from_directory, flash
from werkzeug.utils import secure_filename
import os
import logging

app = Flask(__name__)
app.secret_key = 'replace_with_secret_key'
app.config['UPLOAD_FOLDER'] = os.path.join('static', 'uploads')
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB

# Simple file logger
logging.basicConfig(
    filename='app.log',
    level=logging.INFO,
    format='%(asctime)s %(levelname)s %(message)s'
)

# Simple credentials
USERNAME = 'staff'
PASSWORD = 'pass123'

@app.route('/')
def root():
    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        if username == USERNAME and password == PASSWORD:
            session['logged_in'] = True
            logging.info('Successful login for %s', username)
            return redirect(url_for('dashboard'))
        logging.warning('Failed login attempt for %s', username)
        flash('Invalid credentials')
    return render_template('login.html')

@app.route('/logout')
def logout():
    session.pop('logged_in', None)
    return redirect(url_for('login'))

def login_required(f):
    from functools import wraps
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not session.get('logged_in'):
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function

@app.route('/dashboard')
@login_required
def dashboard():
    return render_template('dashboard.html')

@app.route('/assets', methods=['GET', 'POST'])
@login_required
def assets():
    if request.method == 'POST':
        file = request.files.get('file')
        if file and file.filename:
            filename = secure_filename(file.filename)
            save_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
            file.save(save_path)
            logging.info('Uploaded file %s', filename)
    files = os.listdir(app.config['UPLOAD_FOLDER']) if os.path.exists(app.config['UPLOAD_FOLDER']) else []
    return render_template('assets.html', files=files)

@app.route('/uploads/<path:filename>')
@login_required
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

@app.route('/reports')
@login_required
def reports():
    # Placeholder data
    visits = 1234
    bookings = 56
    return render_template('reports.html', visits=visits, bookings=bookings)

@app.route('/logs')
@login_required
def view_logs():
    log_file = 'app.log'
    logs = []
    if os.path.exists(log_file):
        with open(log_file) as f:
            logs = f.readlines()[-100:]
    return render_template('logs.html', logs=logs)

if __name__ == '__main__':
    app.run(debug=True)
