"use strict";
class Orange {
    constructor(brix = 0) {
        this.brix = brix;
        this.name = 'Orange';
    }
    getName() {
        return this.name;
    }
    getBrix() {
        return this.brix;
    }
}
