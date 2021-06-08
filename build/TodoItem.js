"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoItem = /** @class */ (function () {
    function TodoItem(id, task, complete) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    TodoItem.prototype.printDetails = function () {
        console.log(this.id + " \t " + this.task + " \t " + (this.complete ? "(complete)" : ""));
    };
    return TodoItem;
}());
exports.default = TodoItem;
