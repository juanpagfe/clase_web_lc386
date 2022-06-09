# Estructura de datos Lineales en JavaScript
Ejemplo de implementación de Colas, Pilas y listas en JavaScript

## Instalación
El código se ejecuta en la terminal usando el motor de ejecución `node` (Puedes instalar NodeJS visitando el siguiente [link](https://nodejs.org/)).  Luego de instalar node en tu sistema, tendrás `npm` disponible.  Para instalar las dependencias usa el comando:

```bash
❯ npm install
added 330 packages, and audited 331 packages in 25s

28 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Ejecución

Para ejecutar el programa principal escribes el siguiente comando:

```bash
❯ npm start

> lc386_linear_data_structures@0.1.0 start
> node src/index.js

============== Stack ==============
1. Elementos en la pila:  Rodrigo Maria Pablo Juan 
Pop 1:  Rodrigo
Pop 2:  Maria
2. Elementos en la pila:  Pablo Juan 
Pop 3:  Pablo
3. Elementos en la pila:  Juan 
============== Stack ==============



============== Queue ==============
1. Elementos en la cola:  Juan Pablo Maria Rodrigo 
Pop 1:  Juan
Pop 2:  Pablo
2. Elementos en la cola:  Maria Rodrigo 
Pop 3:  Maria
3. Elementos en la cola:  Rodrigo 
============== Queue ==============



============== List ==============
1. Elementos en la lista:  [ 'Juan', 'Pablo', 'Maria', 'Rodrigo' ]
1. Mostrar el elemento 3 del a lista:  Rodrigo
2. Mostrar el elemento 0 del a lista:  Juan
3. Borrar elemento 2 de la lista:  [ 'Maria' ]
3. Iterar e imprimir la lista: 
Juan
Pablo
Rodrigo
============== List ==============
```
