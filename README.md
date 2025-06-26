# King Safari Website

A modern, mobile-first website for King Safari & Car Hire built with pure HTML and Tailwind CSS. This project is ready to be deployed to GitHub Pages and includes Google Analytics and a WhatsApp chat integration.

## Overview

This site provides a responsive landing page with sections for services, fleet options, testimonials, and contact details. Dedicated pages cover About, Fleet, Gallery, Contact, and Terms.

## Tech Stack

| Component         | Technology                    |
| ----------------- | ----------------------------- |
| Frontend          | HTML5                         |
| Styling           | Tailwind CSS (via CDN)        |
| Fonts             | Google Fonts - Outfit         |
| Icons & Imagery   | Unicode, Unsplash w/ inline fallback |
| Chat Integration  | WhatsApp `wa.me` link         |
| Analytics         | Google Analytics (GTag setup) |
| Deployment Target | GitHub Pages, Flask backend   |
Note: The pages load Tailwind via CDN for simplicity. In production, generate a static CSS file using `npx tailwindcss -o styles.css --minify` and link that instead.


## Key Files

- `index.html` – Main landing page
- `about.html` – Company background
- `fleet.html` – Vehicle options
- `gallery.html` – Photo showcase
- `contact.html` – Contact info
- `terms.html` – Rental terms

## Core Features

1. **Navigation** – Sticky top navbar with smooth scrolling.
2. **Hero Section** – Fullscreen safari-themed background with call-to-action.
3. **Floating WhatsApp Button** – Fixed bottom-right link to WhatsApp.
4. **Instant Booking** – Form with pickup, dropoff, vehicle and use-case selections that opens WhatsApp with a pre-filled message.
5. **Services** – Grid layout describing common transport scenarios.
6. **Fleet** – Cards for Toyota Alphard, Land Cruiser, and Coaster Minibus.
7. **Testimonials** – User social proof quotes.
8. **Contact Section** – Phone numbers and service locations.
9. **Footer** – Auto-updating year with tagline.
10. **Mobile Optimized** – Responsive utility classes for smaller screens.
11. **Admin Backend** – Flask app for asset uploads and reports.
12. **Image Reliability** – Remote photos load from Unsplash with inline SVG placeholders if offline.

## SEO & Analytics

- `meta` tags for title, description, keywords, and Open Graph preview.
- Favicon uses an inline SVG so the site works even without network access.
- Google Analytics snippet included (replace `G-XXXXXXXXXX` with your ID).

## Deployment

Deploy to GitHub Pages:

1. Push this repository to GitHub.
2. In **Settings > Pages**, choose the `main` branch and root folder.
3. Your site will be available at `https://<username>.github.io/king-safari/`.

## Backend

The `backend` directory contains a small Flask application for staff members.
It includes a login page, asset uploader and simple reports.

Run it locally with:

```bash
cd backend
pip install -r requirements.txt
python app.py
```

Open `http://localhost:5000/login` in your browser and log in with
`staff` / `pass123`.

Uploaded images are saved to `backend/static/uploads`.

## To-Do

- Replace the Google Analytics tracking ID with a real one.
- Optionally integrate backend forms or a custom domain.

