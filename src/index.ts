import TodoConsole from "./service/view/TodoConsole";
import Sorter from "./sorter/sorter";

//TodoList
// const todoConsole = new TodoConsole();
// todoConsole.promptUser();

let sorter = new Sorter([10, 2, 3, 14, 9, 5, -7]);
console.log(sorter.sort());


sorter = new Sorter('TypeScript');
console.log(sorter.sort());
