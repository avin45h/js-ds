"use strict";
// Implementation using string
class Stack {
    constructor(capacity) {
        this._capacity = capacity || Infinity;
        this._storage = {};
        this._count = 0;
    }

    push(val) {
        if(this._count < this._capacity){
            this._count = this._count + 1;
            this._storage[this._count] = val;
            return this._count;
        }
        return "Stack Overflow";
    }

    pop() {
        let elem = this._storage[this._count];
        if (this._count <= 0 ){
            return "Stack underflow";
        }
        if (delete this._storage[this._count]) {
            this._count = this._count - 1;
            return elem;
        }
        return "Element not deleted"
    }

    peek() {
        return this._storage[this._count];
    }

    size() {
        return this._count;
    }

    print() {
        return JSON.stringify(this._storage);
    }
}

/*

let menu = new Stack();
console.log(menu.pop());
console.log(menu.push("Something 1") && menu.print());
console.log(menu.pop());
console.log(menu.push("Something 2") && menu.print());
console.log(menu.push("Something 3") && menu.print());
console.log(menu.pop());
console.log(menu.push("Something 4") && menu.print());
console.log(menu.pop());

*/
