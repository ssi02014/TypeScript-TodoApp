"use strict";
// import TodoItem from './model/TodoItem';
// import { data } from './data';
// import TodoCollection from './service/TodoCollection';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const sampleTodos: TodoItem[] = data.map(
//   item => new TodoItem(item.id, item.task, item.complete)
// ); 
// /* sampleTodos
//   [
//     TodoItem { id: 1, task: '장보기', complete: true },
//     TodoItem { id: 2, task: 'TS 학습하기', complete: false },  
//     ...
//   ]
// */
// const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);
// myTodoCollection.addTodo("JavaScript 학습하기");
// myTodoCollection.addTodo("정연재 만나기");
// myTodoCollection.markComplete(2, true);
// myTodoCollection.removeComplete();
// myTodoCollection.getTodoItems(true).forEach(item => {
//   //console.log(item) → TodoItem { id: 1, task: '장보기', complete: true }
//   item.printDetails()
// });
const TodoConsole_1 = __importDefault(require("./view/TodoConsole"));
const todoConsole = new TodoConsole_1.default();
todoConsole.promptUser();
