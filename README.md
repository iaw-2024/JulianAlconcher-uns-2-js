# Ejercicio Técnico 2 - JavaScript

Implementación del listado del Ejercicio Técnico 1, con JavaScript tanto en el Servidor como en el Cliente

## Objetivo

El objetivo de este ejercicio técnico es implementar un listado de elementos utilizando JavaScript tanto en el servidor como en el cliente. Se explorarán tres enfoques diferentes: utilizando JavaScript en el servidor con Express, JavaScript en el cliente utilizando el DOM y una combinación de ambos para obtener y mostrar datos del servidor en el cliente.

## Descripción

Se desea desarrollar un listado de elementos (el mismo que fue utilizado en el Ejercicio Técnico 1) para una aplicación web que permita a los usuarios visualizar datos. Se explorarán tres enfoques diferentes para implementar este listado: uno utilizando JavaScript en el servidor con Express para proporcionar datos, otro utilizando JavaScript en el cliente para generar y manipular el DOM directamente, y un tercer enfoque que combine ambos para obtener datos del servidor y mostrarlos en el cliente.

En todos los casos, los datos deben ser estáticos, almacenados en un archivo. Pueden ser generados con herramientas como [mockapi.io](https://mockapi.io).

## Requerimientos Técnicos

1. Crear tres ejercicios separados, cada uno en su propia carpeta con un nombre específico que indique el enfoque utilizado: `express`, `dom` y `cliente_servidor`.
2. Implementar un servidor utilizando Express en el ejercicio `express`, que proporcione datos para el listado.
3. Utilizar JavaScript en el cliente para generar y manipular el DOM directamente en el ejercicio `dom`.
4. En el ejercicio `cliente_servidor`, combinar JavaScript en el servidor con Express para obtener datos y JavaScript en el cliente para mostrar los datos obtenidos en la página.
5. Todos los ejercicios deben incluir una interfaz de usuario clara y funcional que permita al usuario ver los elementos del listado.

## Criterios de Evaluación

- Correcta implementación de JavaScript en el servidor utilizando Express para proporcionar datos.
- Uso efectivo de JavaScript en el cliente para generar y manipular el DOM directamente.
- Integración exitosa de JavaScript tanto en el cliente como en el servidor para obtener y mostrar datos del servidor en el cliente.
- Presentación clara y ordenada de los elementos del listado en la interfaz de usuario.
- Cumplimiento de los requisitos técnicos especificados en el enunciado.

## Entregables

1. Crear un [nuevo repositorio](https://github.com/organizations/iaw-2024/repositories/new) público utilizando como template este repositorio (`iaw-2024/ejercicio-tecnico-2-js`). El nombre del repositorio debe ser `<usuario-github>-2-js` y debe estar dentro de la organización `iaw-2024`.
2. Crear una rama o branch denominado `entrega` y realizar los ejercicios en esa rama o branch.
3. Hacer un deploy en Vercel sobre el branch entrega, para que los ejercicios queden disponibles en la web.
4. Crear un Pull Request del branch `entrega` al branch `main` con un link en la descripción del Pull Request a la página web pública.
5. La página pública debe contener:
   - en `/express` el ejercicio implementado con JavaScript en el servidor utilizando Express.
   - en `/dom` el ejercicio implementado con JavaScript en el cliente utilizando el DOM.
   - en `/cliente_servidor` el ejercicio implementado con JavaScript tanto en el cliente como en el servidor, obteniendo datos del servidor y mostrándolos en el cliente.
   - Cada carpeta debe contener los archivos necesarios para ejecutar el ejercicio (por ejemplo, archivos JavaScript, HTML, CSS, etc.).

## Notas Adicionales

- Se sugiere utilizar las funcionalidades proporcionadas por Express y JavaScript para manejar las peticiones HTTP y la manipulación del DOM de manera efectiva y eficiente.
- Se recomienda probar las implementaciones en diferentes navegadores y dispositivos para asegurar la compatibilidad y el correcto funcionamiento de la aplicación.
