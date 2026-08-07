# Tipografías vendorizadas

Subconjunto **latin** en woff2, extraído de los paquetes `@fontsource` (los mismos binarios
que sirve Google Fonts, redistribuidos bajo SIL Open Font License 1.1).

| Archivo | Familia | Peso | Token |
|---|---|---|---|
| `poppins-600.woff2` | Poppins | 600 | `--font-display` |
| `inter-400.woff2` | Inter | 400 | `--font-body` · `--weight-body-regular` |
| `inter-500.woff2` | Inter | 500 | `--weight-body-medium` |
| `inter-600.woff2` | Inter | 600 | `--weight-body-semibold` |
| `outfit-400/500/600.woff2` | Outfit | 400/500/600 | `--font-product` |

128 KB en total.

**Por qué están acá y no en un CDN.** Claude Design bloquea los recursos externos al exportar
a HTML standalone, y en PPTX y PDF directamente no hay runtime. Un `@import` a
`fonts.googleapis.com` renderiza perfecto en pantalla y cae a la sans-serif del sistema en
cada export, sin dar ningún error. Es la misma falla que borró la iconografía completa.

**Solo el subconjunto latin.** Cubre español incluidos acentos y ñ. Si algún día hace falta
otro alfabeto, se agrega el subset y un `unicode-range`, no se vuelve al CDN.

**Para agregar un peso:** `npm i @fontsource/<familia>` en una carpeta temporal, copiar
`files/<familia>-latin-<peso>-normal.woff2` acá con el nombre `<familia>-<peso>.woff2`, y
sumar el `@font-face` en `tokens/typography.css`. No instalar `@fontsource` como dependencia
del repo: son cientos de archivos para usar siete.
