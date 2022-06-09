const Stack = require('./Stack')
const Queue = require('./Queue')



console.log("============== Stack ==============")
let stack = new Stack()

stack.push("Juan")
stack.push("Pablo")
stack.push("Maria")
stack.push("Rodrigo")
console.log("1. Elementos en la pila: ", stack.toString())
console.log("Pop 1: ", stack.pop())
console.log("Pop 2: ", stack.pop())
console.log("2. Elementos en la pila: ", stack.toString())
console.log("Pop 3: ", stack.pop())
console.log("3. Elementos en la pila: ", stack.toString())
console.log("============== Stack ==============")

console.log("\n\n")


console.log("============== Queue ==============")
let queue = new Queue()

queue.enqueue("Juan")
queue.enqueue("Pablo")
queue.enqueue("Maria")
queue.enqueue("Rodrigo")
console.log("1. Elementos en la cola: ", queue.toString())
console.log("Pop 1: ", queue.dequeue())
console.log("Pop 2: ", queue.dequeue())
console.log("2. Elementos en la cola: ", queue.toString())
console.log("Pop 3: ", queue.dequeue())
console.log("3. Elementos en la cola: ", queue.toString())
console.log("============== Queue ==============")

console.log("\n\n")


console.log("============== List ==============")
let list = []

list.push("Juan")
list.push("Pablo")
list.push("Maria")
list.push("Rodrigo")
console.log("1. Elementos en la lista: ", list)
console.log("1. Mostrar el elemento 3 del a lista: ", list[3])
console.log("2. Mostrar el elemento 0 del a lista: ", list[0])
console.log("3. Borrar elemento 2 de la lista: ", list.splice(2, 1))
console.log("3. Iterar e imprimir la lista: ")
list.forEach(element => {
    console.log(element)
});
console.log("============== List ==============")