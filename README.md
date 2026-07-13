# Zincosoft — Tarjeta Digital

Tarjeta de presentación digital con código QR, pensada para compartir por link o escaneo.

- Un solo archivo: `index.html` (sin build, sin dependencias que instalar)
- Estilos con **Tailwind CSS vía CDN**
- QR generado en el navegador con `qrcode.js` (apunta a la URL donde esté publicada la tarjeta)
- Botones directos a: correo, teléfono, WhatsApp, LinkedIn y sitio web
- Botón "Guardar contacto" que descarga un `.vcf` (vCard)

## Editar mis datos

Todo vive en el objeto `DATOS` al inicio de [`index.html`](index.html). Cambia esos valores y listo:

```js
const DATOS = {
  correo:   "contacto@zincosoft.com",
  telTel:   "+525512345678",  // para el link tel:
  whatsapp: "525512345678",   // solo dígitos, con código de país
  linkedin: "https://www.linkedin.com/in/tu-usuario",
  web:      "https://zincosoft.com",
  ...
};
```

`urlTarjeta` puede quedar vacío: el QR usará automáticamente la URL donde esté publicada.

## Ver en local

Abre `index.html` en el navegador, o:

```bash
npx serve .
```

## Publicar en Cloudflare Pages

```bash
npx wrangler pages deploy . --project-name=tarjeta-zincosoft
```

La primera vez abrirá el navegador para iniciar sesión en Cloudflare.
