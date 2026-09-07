# Fuentes vendorizadas

Archivos `.ttf` provistos por el equipo de marca (Google Fonts, licencia OFL). Copiados desde `uploads/Inter,Urbanist (1)/`.

| Archivo | Familia | Peso | Token |
|---|---|---|---|
| `urbanist-400.ttf` | Urbanist | 400 | `--font-display` |
| `urbanist-500.ttf` | Urbanist | 500 | — |
| `urbanist-600.ttf` | Urbanist | 600 | `--weight-display` |
| `urbanist-700.ttf` | Urbanist | 700 | `--weight-bold` |
| `inter-400.ttf` | Inter | 400 | `--font-body` · `--weight-body-regular` |
| `inter-500.ttf` | Inter | 500 | `--weight-body-medium` |
| `inter-600.ttf` | Inter | 600 | `--weight-body-semibold` |
| `inter-700.ttf` | Inter | 700 | — |

Los `@font-face` viven en `tokens/typography.css`. **No volver a un CDN:** los recursos externos se bloquean al exportar a HTML standalone y no existen en PPTX/PDF.

Los archivos Inter provistos son de la familia óptica `Inter_18pt`.
