# Wali Marble & Granite — Website (v2, with real content)

## Kaise chalayein

1. Is poore folder ko VS Code mein open karein (File → Open Folder).
2. Terminal kholein (Terminal → New Terminal) aur likhein:
   ```
   npm install
   npm run dev
   ```
3. Jo link terminal mein aaye (http://localhost:5173 jaisa kuch), Ctrl+click karein.

**Terminal ko band mat karein** jab tak website dekhni ho — band karte hi server ruk jata hai.

## Is version mein kya naya hai

- Aapki asal PDF portfolio se real company details (address, phone, email),
  18 services, materials list, aur "Why Us" content liya gaya hai.
- 14 real project photos (staircase, villa facade, marble slabs, inlay panel,
  floor medallion, backlit onyx counter, workshop) — `src/assets/photos/` mein.
- 6 pages: Home, Materials, Craftsmanship, Projects, About, Contact.

## Kya kahan hai

```
src/
├── data/company.js       → SAB TEXT CONTENT yahan (naam, address, services, materials)
├── assets/photos/         → asal photos
├── components/            → Header, Footer, Hero, Stats, WhyUs, CTA, PhotoShowcase
├── pages/                 → har page ek file
└── styles/                → har file ki matching CSS
```

## Text/content change karna ho

Zyada tar text `src/data/company.js` mein hai — phone number, email, address,
services list, materials, "why us" — sab yahin se edit karein, changes automatically
sab pages par reflect ho jayengi.

## Naya photo add karna ho

1. Photo ko `src/assets/photos/` mein daal dein.
2. Jis page/component mein use karna hai, wahan upar `import myPhoto from '../assets/photos/filename.jpg'` likhein.
3. `<img src={myPhoto} />` ki tarah use karein.

## Contact form

Abhi form sirf "message received" dikhata hai. Real emails paane ke liye
`src/pages/Contact.jsx` mein `submit` function ko kisi email service
(Formspree, Resend, ya apna backend) se connect karna hoga.
