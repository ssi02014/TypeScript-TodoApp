"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orange_1 = __importDefault(require("./orange"));
class Box {
    constructor(fruit) {
        this.fruit = fruit;
    }
    getFruit() {
        return this.fruit;
    }
}
const box = new Box(new orange_1.default(5));
console.log(box.getFruit().getName());
const testBox = new Box('banana');
//이건 타입 추론으로 const testBox: Box<string> = new Box('banana')와 같음
