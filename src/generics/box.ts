import Orange from "./orange";
import Apple from "./apple";

class Box<T> {
  constructor(private fruit: T) {}
  getFruit(): T {
    return this.fruit;
  }
}

const box: Box<Orange> = new Box(new Orange(5));
console.log(box.getFruit().getName());

const testBox = new Box('banana');
//이건 타입 추론으로 const testBox: Box<string> = new Box('banana')와 같음