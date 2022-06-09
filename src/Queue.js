/**
 * Class that overrides and encapsulates the definition of an queue in JavaScript
 */
class Queue {
    constructor() {
        this.queue = []
    }

    /**
     * Enqueue an item to the queue
     * @param {*} item 
     */
    enqueue(item) {
        this.queue.push(item)
    }

    /**
     * dequeue the last element of the queue
     * @param {*} item 
     */
    dequeue(item) {
        if (this.queue.length > 0) {
            return this.queue.shift();
        }
    }

    /**
     * Returns the first item of the queue without deleting it
     * @returns item
     */
    peek() {
        return this.queue[0];
    }

    /**
     * Checks if the queue is empty
     * @returns true if queue is empty
     */
    isEmpty() {
        return this.queue.length == 0;
    }

    /**
     * Returns the elements of the queue ordered
     * @returns string with elements
     */
    toString() {
        var str = "";
        for (var i = 0; i < this.queue.length; i++)
            str += this.queue[i] + " ";
        return str;
    }
}

module.exports = Queue