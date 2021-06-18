"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Orange;
