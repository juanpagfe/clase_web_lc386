/**
 * Class that overrides and encapsulates the definition of an stack in JavaScript
 */
class Stack {
    constructor() {
        this.stack = []
    }

    /**
     * Pushes an item to the stack
     * @param {*} item 
     */
    push(item) {
        this.stack.push(item)
    }

    /**
     * Pops the first item of the stack
     * @param {*} item 
     */
    pop(item) {
        return this.stack.pop()
    }

    /**
     * Returns the first item of the stack without deleting it
     * @returns item
     */
    peek() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * Checks if the stack is empty
     * @returns true if stack is empty
     */
    isEmpty() {
        return this.stack.length == 0;
    }

    /**
     * Returns the elements of the stack ordered
     * @returns string with elements
     */
    toString() {
        var str = "";
        for (var i = this.stack.length - 1; i >= 0; i--)
            str += this.stack[i] + " ";
        return str;
    }
}

module.exports = Stack