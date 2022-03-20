# Prueba técnica Openbank - AtSistemas
`creada por Pablo G. Rubio`

Cualquier duda o problema a la hora de arrancar o utilizar cualquier parte de la aplicación, pongase en contacto
con **Pablo** al email: `pagoru@gmail.com`.

## Descripción del proyecto

Este proyecto ha sido creado para cumplir las funcionalidades
de poder crear un gestor de contraseñas a través del cliente openBank para atSistemas.

## Descripción técnica

El proyecto intenta abarcar dependencia 0, evitando a toda costa fallos de seguridad de terceros
y haciendo posible su mantenimiento en el tiempo, solo usando dependencias conocidas y basicas
para el buen funcionamiento de la aplicación. La mayor parte de componentes conocidos se pueden
hacer de forma nativa sin invertir demasiado tiempo, ya que esas librerias suelen ser complicadas por la cantidad
de funciones que abarcan, en este caso, vamos a abarcar solo las necesarias, sin excedernos.

Todos los componentes reutilizables para otras aplicaciones se encuentran bajo la ruta `src/app/components/shared/`.
Sería buena práctica, extraer esos componentes a una libreria de componentes, pero dadas las circunstancias de esta prueba
se complicaria más de lo necesario.
Las útilidades en la ruta `src/app/utils/` también podrian extraerse.

## Arquitectura y diseño

La aplicación sigue un patrón de abstracción máxima posible y de división de componentes, 
siguiendo también principios de responsabilidad única.

Diseñada con **typescript** para minimizar errores de tipados.
Con ayuda de las siguientes librerias.

### storybook

Se ejecuta con el comando `yarn run storybook` y se compila con `yarn run build-storybook`.
Nos permitirá mostrar ejemplos de componentes para poder saber con que podemos trabajar.

Los componentes que disponen de historias se encuentran con el nombre `{componente}.stories.tsx`.

### jest-dom

Se ejecuta con el comando `yarn run test`. Nos permitirá probar los tests que se encuentran
en la aplicación. A la hora de hacer una pipeline (CI), podriamos ejectuar este proceso para verificar
que no se ha roto nada y para ir más allá, podriamos ejecuturalo también en pre-commit con git para
que no se pudiera hacer commit si hay algún fallo.

Los archivos que tienen test son `{componente}.test.tsx`.

### sass

Libreria para poder escribir sass y scss. Los modulos de sass y scss se encuentran bajo el nombre de 
`{componente}.module.s{a|c}ss`. Normalmente usaremos `sass` pero tiene una limitación a la hora de 
crear objetos multilinea y es un error conocido [sass#216](https://github.com/sass/sass/issues/216) 
y que planean solucionar, pero mientras se tendrá que usar scss por temas de cómodidad semántica en
algunos momentos.

### i18n

Libreria para crear traducciones sobre la aplicación.

Encontraremos los archivos de traducciones bajo la ruta `src/app/assets/translations/`, 
usando un hook personalizado `useTranslation`, en la ruta `src/app/hooks/use-translation.hook.ts`.

Este hook nos permitirá cambiar de idioma o hacer llamadas para que nos devuelva una traducción concreta
mediante un enumerador. Por ejemplo 
```typescript
translation(TranslationEnum.PREVIOUS)
```

### redux

Libreria para almacenar el estado de la aplicación. Nos permitirá almacenar todo lo que necesitemos guardar como 
estado global y que pueda ser compartido a cualquier componente.

Todo el boilerplate de redux se encuentra en la ruta `src/app/store/`, donde se crea una nueva ruta para cada 
negocio que vaya separado de otro. Por ejemplo, la gestión del usuario conectado y la gestión de configuración de la web.

Estructurado de la siguiente forma:
- **Actions**: Contiene las interfaces de los dispatchers.
- **Dispatchers**: Contiene las funciones con las implementaciones de las acciones.
- **Reducer**: Contiene las asignaciones de los estados en función de las acciones, llamados reducers.
- **Saga**: Contiene las llamadas de las acciones iniciales, llamadas sagas.
- **Types**: Contiene los tipos de las acciones, estados y otros tipos que puedas estar relacionados con el estado.


Esta libreria se puede usar en cualquier aplicación, tanto de front como back, por eso hay una implementación en react:

#### react-redux

Implementación de redux que permite un funcionamiento adecuado para react mediante un provider inicial.

#### redux-saga

Implementanción de funciones generadoras para redux. Permite realizar llamadas y abstraer aún más la reponsabilidad de 
los componentes y de redux.

### react-router-dom

Libreria que permite gestionar las rutas de la SPA, se encuentra en la ruta `src/app/components/navigation/navigation.component.tsx`.

## Scripts disponibles

### `yarn install`
Permite instalar llas librerias del proyecto. Este proyecto está preparado para funcionar con `yarn`, usar `npm` puede causar problemas.

### `yarn run start`
Permite arrancar el proyecto en la ruta `localhost:3000`.

### `yarn run test`
Permite arrancar los tests.

### `yarn run storybook`
Permite arrancar el storybook en la ruta `localhost:6006` o la especificada.