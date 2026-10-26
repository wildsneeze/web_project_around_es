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

## Tecnologías usadas

- **HTML**: validación nativa con los atributos `required`, `minlength`, `maxlength` y `type="url"`.
- **CSS**: Flexbox, Grid, media queries y metodología **BEM**.
- **JavaScript**:
  - Manipulación del DOM y elementos `<template>`.
  - Módulos ES (`import` / `export`).
  - API de validación de restricciones (`ValidityState`, `validationMessage`).
  - Gestión de eventos (`input`, `submit`, `mousedown`, `keydown`).
