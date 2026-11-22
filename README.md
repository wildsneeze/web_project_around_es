# Around The U.S.

### Página web interactiva y adaptable donde los usuarios pueden compartir fotos de lugares que han visitado y editar su perfil.

**[Proyecto en GitHub Pages](https://wildsneeze.github.io/web_project_around_es/)**

## Funciones

## Perfil y tarjetas

- Editar el nombre y la descripción del perfil.
- Agregar nuevas tarjetas con un título y la URL de una imagen.
- Dar "Me gusta" a las tarjetas.
- Eliminar tarjetas.
- Ver una versión ampliada de cada imagen al hacer clic en ella.

## Validación de formularios

- Cada campo se valida en tiempo real mientras el usuario escribe.
- Los mensajes de error aparecen debajo de cada campo inválido, y el campo se marca en rojo.
- El botón **Guardar** permanece inactivo hasta que todos los campos son válidos.
- Al volver a abrir un formulario, los errores anteriores se borran y el botón recupera el estado que le corresponde.

| Formulario    | Campo            | Reglas                               |
| ------------- | ---------------- | ------------------------------------ |
| Editar perfil | Nombre           | Obligatorio, de 2 a 40 caracteres    |
| Editar perfil | Acerca de mí     | Obligatorio, de 2 a 200 caracteres   |
| Nuevo lugar   | Título           | Obligatorio, de 2 a 30 caracteres    |
| Nuevo lugar   | URL de la imagen | Obligatorio, debe ser una URL válida |

## Ventanas emergentes

Cada ventana emergente se puede cerrar de tres formas:

- con el botón de cerrar (✕),
- haciendo clic en la superposición, fuera de la ventana,
- pulsando la tecla `Esc`.

---

## Arquitectura (POO)

El código está organizado en clases. Cada una tiene una sola responsabilidad y vive en su propio archivo dentro de `src/`. Ninguna clase crea instancias de otras: se comunican mediante callbacks que `index.ts` les pasa al crearlas.

| Clase            | Responsabilidad                                                                  |
| ---------------- | -------------------------------------------------------------------------------- |
| `FormValidator`  | Valida los campos de un formulario y activa o desactiva su botón de envío.       |
| `Card`           | Crea el elemento de una tarjeta a partir de un `<template>` y gestiona sus botones. |
| `Section`        | Renderiza una lista de elementos en un contenedor de la página.                  |
| `Popup`          | Abre y cierra una ventana emergente (botón ✕, superposición y tecla `Esc`).      |
| `PopupWithImage` | Hereda de `Popup` y muestra la imagen ampliada con su título.                    |
| `PopupWithForm`  | Hereda de `Popup`, recoge los valores del formulario y los envía a un callback.  |
| `UserInfo`       | Lee y actualiza el nombre y la descripción del perfil en la página.              |

`index.ts` solo crea las instancias y conecta los eventos. La configuración de validación y las tarjetas iniciales están en `src/utils/constants.ts`.

## Estructura

```
public/        Archivos que se publican: HTML, CSS, imágenes y el JS compilado
src/           Código fuente en TypeScript
  utils/       Constantes compartidas
tsconfig.json  Configuración del compilador (src → public)
```

## Cómo ejecutarlo

1. Compilar el código TypeScript:
   ```
   tsc
   ```
   Durante el desarrollo, `tsc --watch` recompila automáticamente al guardar.
2. Abrir `public/index.html` con un servidor local (por ejemplo, la extensión Live Server de VS Code).

---

## Tecnologías usadas

- **HTML**: elementos `<template>` y validación nativa con los atributos `required`, `minlength`, `maxlength` y `type="url"`.
- **CSS**: Flexbox, Grid, media queries y metodología **BEM**.
- **TypeScript**:
  - Programación orientada a objetos: clases, `private` / `protected` / `public`, herencia con `extends` y `super`.
  - Interfaces, alias de tipo, genéricos (`Section<T>`) y tipado de eventos (`KeyboardEvent`, `MouseEvent`, `SubmitEvent`).
  - Bajo acoplamiento mediante callbacks.
  - Módulos ES (`import` / `export`).
- **JavaScript (DOM)**:
  - API de validación de restricciones (`ValidityState`, `validationMessage`).
  - Gestión de eventos (`input`, `submit`, `click`, `mousedown`, `keydown`).
- **GitHub Actions**: despliegue automático de la carpeta `public/` en GitHub Pages.
