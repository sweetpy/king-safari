const translations = {
  sw: {
    navHome: 'Nyumbani',
    navAbout: 'Kuhusu',
    navFleet: 'Magari',
    navGallery: 'Picha',
    navContact: 'Wasiliana',
    navTerms: 'Masharti',
    heroTitle: 'Safari na Kukodisha Gari ya Kifahari',
    heroBtn: 'Weka Nafasi',
    bookingTitle: 'Weka Nafasi Haraka',
    mapPick: 'Chagua Maeneo Kwenye Ramani',
    confirmBtn: 'Thibitisha kupitia WhatsApp',
    servicesTitle: 'Huduma',
    service1Title: 'Uwanja wa Ndege ↔ Hoteli',
    service1Desc: 'Usafiri laini kutoka viwanja vya ndege.',
    service2Title: 'Hoteli ↔ Vivutio',
    service2Desc: 'Safari kwenda vivutio vikuu.',
    service3Title: 'Njia za Wakuu',
    service3Desc: 'Dereva binafsi kwa wakurugenzi.',
    service4Title: 'Matukio ya Kundi',
    service4Desc: 'Usafiri wa makundi makubwa.',
    fleetTitle: 'Magari Yetu',
    alphard: 'Toyota Alphard (VIP)',
    alphardDesc: 'Faraja ya kifahari.',
    cruiser: 'Land Cruiser (Safari)',
    cruiserDesc: '4x4 imara kwa safari.',
    coaster: 'Coaster Minibus (Makundi)',
    coasterDesc: 'Chaguo la familia na makundi.',
    testimonialsTitle: 'Ushuhuda',
    testimonialAuthor1: 'Msafiri Mwenye Furaha',
    testimonialAuthor2: 'Mteja Mwamini',
    rating: '⭐ 4.6/5',
    contactTitle: 'Wasiliana Nasi',
    contactCall: 'Piga simu',
    contactAvail: 'Tunapatikana Arusha, Moshi, Kilimanjaro & Dar es Salaam',
    chatWhatsApp: 'Tuma Ujumbe WhatsApp',
    footerTagline: 'Uhamaji Bora. Viwango vya Dunia.',
    aboutTitle: 'Kuhusu King Safari',
    galleryTitle: 'Picha',
    galleryDesc: 'Mkusanyiko wa matukio yetu ya safari na magari.',
    termsTitle: 'Masharti ya Kukodisha'
  },
  es: {
    navHome: 'Inicio',
    navAbout: 'Acerca',
    navFleet: 'Flota',
    navGallery: 'Galería',
    navContact: 'Contacto',
    navTerms: 'Términos',
    heroTitle: 'Alquiler de Coches y Safaris Premium',
    heroBtn: 'Reservar',
    bookingTitle: 'Reserva Instantánea',
    mapPick: 'Elegir Ubicaciones en el Mapa',
    confirmBtn: 'Confirmar por WhatsApp',
    servicesTitle: 'Servicios',
    service1Title: 'Aeropuerto ↔ Hotel',
    service1Desc: 'Traslados cómodos desde el aeropuerto.',
    service2Title: 'Hotel ↔ Atracciones',
    service2Desc: 'Viajes a las principales atracciones.',
    service3Title: 'Rutas Ejecutivas',
    service3Desc: 'Chofer privado para ejecutivos.',
    service4Title: 'Eventos Grupales',
    service4Desc: 'Transporte para grupos grandes.',
    fleetTitle: 'Nuestra Flota',
    alphard: 'Toyota Alphard (VIP)',
    alphardDesc: 'Comodidad de lujo.',
    cruiser: 'Land Cruiser (Safari)',
    cruiserDesc: '4x4 ideal para safari.',
    coaster: 'Coaster Minibus (Grupos)',
    coasterDesc: 'Opción amplia para grupos.',
    testimonialsTitle: 'Testimonios',
    testimonialAuthor1: 'Viajero Feliz',
    testimonialAuthor2: 'Cliente Satisfecho',
    rating: '⭐ 4.6/5',
    contactTitle: 'Contáctanos',
    contactCall: 'Llámanos',
    contactAvail: 'Disponible en Arusha, Moshi, Kilimanjaro y Dar es Salaam',
    chatWhatsApp: 'Enviar WhatsApp',
    footerTagline: 'Movilidad Premium. Estándares Globales.',
    aboutTitle: 'Acerca de King Safari',
    galleryTitle: 'Galería',
    galleryDesc: 'Una colección de nuestras aventuras y vehículos.',
    termsTitle: 'Términos de Alquiler'
  }
};

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t && t[key]) el.textContent = t[key];
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('languageSelector');
  if (selector) {
    selector.addEventListener('change', () => applyTranslations(selector.value));
  }
  applyTranslations('en');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
