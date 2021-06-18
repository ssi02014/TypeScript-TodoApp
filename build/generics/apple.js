"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Apple;
