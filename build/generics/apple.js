"use strict";
class Apple {
    constructor(brix = 0) {
        this.brix = brix;
        this.name = 'Apple';
    }
    getName() {
        return this.name;
    }
    getBrix() {
        return this.brix;
    }
}
