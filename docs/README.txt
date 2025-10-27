TIM DEASY — WEB STARTER KIT (Ableton Aesthetic Edition)
=======================================================

Structure:
- index.html, about.html, contact.html
- /css (variables.css, normalize.css, style.css)
- /fonts (MyTupi.woff2, MyTupi.woff)
- /js (main.js, nav.js)
- /img (logo.svg, placeholder.jpg)
- /components (header.html, footer.html, nav.html placeholder)
- /assets (icons, video, audio)
- /docs (this README)

Usage:
- Open index.html in a browser — fonts load via @font-face (swap).
- Adjust palette in css/variables.css; typography in css/style.css.

Hosting:
- Drag the folder to Netlify / Vercel / GitHub Pages.
- Ensure correct paths to /fonts and CSS.

License:
- You are responsible for font licensing/usage. MyTupi provided by you.

© 2025 Tim Deasy

UPDATES (Portfolio + Contact)
-----------------------------
- Added a responsive Portfolio grid to index.html (edit /img/* and captions in the HTML).
- Upgraded contact form to Formspree:
  1) Create a Form at https://formspree.io
  2) Replace "YOUR_FORM_ID" in contact.html action attribute
  3) (Optional) Add reCAPTCHA or honeypot per Formspree docs

Notes:
- Grid images live in /img/placeholder1..4.jpg — replace with your project visuals.
- JS adds basic client-side validation for the contact form.