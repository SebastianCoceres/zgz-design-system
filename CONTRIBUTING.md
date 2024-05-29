# Guía de Contribución al Sistema de Diseño del Ayuntamiento de Zaragoza

¡Gracias por considerar contribuir al Sistema de Diseño del Ayuntamiento de Zaragoza! Valoramos tu tiempo y esfuerzo y agradecemos tu interés en mejorar nuestro proyecto. Esta guía te ayudará a entender cómo puedes contribuir de manera efectiva.

## Cómo Puedes Contribuir

### Reportar Errores
Si encuentras un error, por favor repórtalo para que podamos solucionarlo. Incluye la mayor cantidad de detalles posible.

- **Dónde reportar**: Abre un issue en [nuestro repositorio de GitHub]().
- **Qué incluir**:
  - Descripción del error
  - Pasos para reproducir el error
  - Resultados esperados y reales
  - Información del entorno (sistema operativo, navegador, etc.)

### Proponer Mejoras
Si tienes una idea para una nueva funcionalidad o una mejora, nos encantaría saberla.

- **Dónde proponer**: Abre un issue en [nuestro repositorio de GitHub]().
- **Qué incluir**:
  - Descripción de la mejora propuesta
  - Razones por las que crees que sería beneficiosa
  - Posibles implementaciones (si tienes alguna en mente)

### Enviar Pull Requests
Si deseas realizar cambios en el código, por favor sigue estos pasos:

1. **Fork del repositorio**: Crea un fork de [nuestro repositorio de GitHub]().
2. **Clona tu fork**: 
    ```sh
    git clone https://github.com/tu-usuario/proyecto.git
    ```
3. **Crea una rama**:
    ```sh
    git checkout -b nombre-de-tu-rama
    ```
4. **Realiza tus cambios**: Asegúrate de seguir las [mejores prácticas de desarrollo](#mejores-prácticas-de-desarrollo).
5. **Pruebas**: Verifica que tus cambios no rompan ninguna funcionalidad existente.
6. **Commit de tus cambios**: 
    ```sh
    git commit -m "Descripción de los cambios"
    ```
7. **Push a tu fork**:
    ```sh
    git push origin nombre-de-tu-rama
    ```
8. **Crea un pull request**: Desde tu fork en GitHub, abre un pull request hacia nuestro repositorio principal.


## Mejores Prácticas de Desarrollo
- **Código Limpio**: Escribe código claro y comprensible. Sigue las convenciones de estilo y asegúrate de que tu código pase los controles de herramientas como ESLint o Prettier.
- **Métodos Asíncronos**: Usa promesas o async/await cuando sea adecuado.
- **Seguridad en Hilos**: Diseña el código para que sea seguro en hilos con Web Workers si es posible.
- **Manejo de Errores**: Utiliza bloques try-catch y propaga los errores cuando sea necesario.
- **Registro y Depuración**: Implementa el registro para facilitar la depuración y el seguimiento del estado de la aplicación.

## Código de Conducta
Al participar en este proyecto, aceptas adherirte a nuestro [Código de Conducta](./CODE_OF_CONDUCT.md).


¡Gracias por contribuir!
