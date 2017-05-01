"use strict";

class Queue {
    constructor(capacity) {
        this._capacity = capacity || Infinity;
        this._storage = {};
        this._head = 0;
        this._tail = 0;
    }

    enqueue(val) {
        if (this.count() < this._capacity) {
            this._storage[this._tail] = val;
            this._tail = this._tail + 1;
            return this.count();
        }
        return "Max capacity reached";
    }

    dequeue() {
        let element = this._storage[this._head];
        delete this._storage[this._head];
        if (this._head < this._tail) this._head++;
        return element;
    }

    peek() {
        return this._storage[this._head];
    }

    count() {
        return this._tail - this._head;
    }

    contains(value) {
        for (let i = this._head; i < this._tail; i++) {
            if (this._storage[i] === value) return true;
        }
        return false;
    }

    until(value) {
        for (let i = this._head; i < this._tail; i++) {
            if (this._storage[i] === value) return i-this._head+1;
        }
        return null;
    }
}

let myQueue = new Queue(3);
console.log(myQueue.enqueue('a'), 'should be 1');
console.log(myQueue.enqueue('b'), 'should be 2');
console.log(myQueue.enqueue('c'), 'should be 3');
console.log(myQueue.enqueue('d'), 'should be Max capacity reached');
console.log(myQueue.dequeue(), 'should be a');
console.log(myQueue.count(), 'should be 2');
console.log(myQueue.peek(), 'should be b');
console.log(myQueue.count(), 'should be 2');
console.log(myQueue.contains('b'), 'should be true');
console.log(myQueue.contains('d'), 'should be false');
console.log(myQueue._storage, myQueue._head);
console.log(myQueue.until('b'), 'should be 1');
console.log(myQueue.until('c'), 'should be 2');
console.log(myQueue.until('d'), 'should be null');