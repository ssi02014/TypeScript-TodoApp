# 💻 TypeScript-ToDoList
타입스크립트로 만들어보는 ToDoList 📑

<br />

## 📈 프로젝트 시작 전 셋팅 과정
### 🔍 1. 타입스크립트 설치
```
  node install -g typescript
  npm install -g ts-node
```

<br />

### 🔍 2. tsconfig.json 생성 및 설정
```
  //tsconfig.json 생성
  tsc --init
```

<br />

- tsconfig.json 설정
```json
{
  "compilerOptions": {
    /* Basic Options */
    "target": "es5",  
    "module": "commonjs",
    "outDir": "./build",  //빌드 된 이후 자바스크립트 파일이 저장 될 장소
    "rootDir": "./src",   //타입스크립트 소스코드가 있는 저장소

    /* Strict Type-Checking Options */
    "strict": true,  

    /* Module Resolution Options */
    "esModuleInterop": true, 
    "skipLibCheck": true,  
    "forceConsistentCasingInFileNames": true 
  }
}

```

<br />

### 🔍 3. package.json 생성 및 설정
```
  //package.json 생성
  npm init -y
```

<br />

- package.json 설정
```json
  {
    ...
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "tsc -w",
      "start:run": "nodemon build/index.js",
      "start": "concurrently npm:start:*"
    },
    ...
  }
```

### 🔍 nodemon, concurrently 설치
```
  npm install nodemon concurrently
```
- concurrently는 동시에 여러 명령어를 실행하기 위해 사용된다.
- nodemon: 실시간으로 수정사항을 반영해준다.

<br />

## 👨‍💻 TodoItem: JavaScript vs TypeScript
### 🔍 JavaScript
```js
  class TodoItem {
    constructor(id, task, complete) {
      this.id = id;
      this.task = task;
      this.complete = complete;
    }

    printDetails() {
      console.log(
        `${this.id} \t ${this.task} \t ${this.complete ? "(complete)" : ""}`
      );
    }
  }
```

<br />

### 🔍 TypeScript
- 타입스크립트에서는 타입을 지정해주는거 이외에 `접근 지정자(private, public, protected)` 등을 지정할 수 있다.
- 생성자(contructor)안에서 `접근 지정자`를 지정하면 따로 프로퍼티 정의할 필요 없이 프로퍼티로 정의된다.
- 함수의 리턴 값이 없으면 반환 값 타입을 `void`로 지정해야 한다.
```ts
  class TodoItem {
    constructor(public id: number, public task: string, public complete: boolean) {
      this.id = id;
      this.task = task;
      this.complete = complete;
    }

    printDetails(): void {
      console.log(
        `${this.id} \t ${this.task} \t ${this.complete ? "(complete)" : ""}`
      );
    }
  }

  export default TodoItem;
```

<br />

## 👨‍💻 TodoCollection
### 🔍 getTodoById 메서드
- 함수 반환 값의 대한 타입을 `TodoItem | undefined`이런 식으로 지정하면 반환 값의 타입이 TodoItem 또는 undefined라는 의미
```ts
  import TodoItem from "./TodoItem";

  class TodoCollection {
    ...
    getTodoById(id: number): TodoItem | undefined {
      return this.todoItems.find((item) => item.id === id);
    }
    ...
  }

  export default TodoCollection;
```

<br />

### 🏃‍♂️ Type Annotations - Inference Around Functions
- 함수의 파라미터를 정의할 때 각 파라미터의 타입을 지정하지 않으면 `any` 타입의 파라미터가 지정 된다.
- 함수의 파라미터에 타입을 지정하지 않으면 일반 변수와 마찬가지로 암묵적인 any 타입의 적용으로 경고 사항이다.
- 함수의 반환 값에 대한 타입은 return 실행문에 따라 `타입 추론(Type Inference)`이 적용 된다.
- 반환 값의 경우 retrun 구문으로 `명시적인 타입의 유추`가 가능하다.
- 함수의 반환 값이 없을 경우 `void` 타입의 반환을 정의한다.
- 함수의 반환 값으로 정의 가능한 `never` 타입은 절대 발생하지 않는 값의 타입을 나타낸다. 쉽게 말하면 반환을 안한다는 의미
- `void` 타입은 변수로 사용 될 경우 `undefined`, `null` 값만 대입(assign)이 가능하다.
- `never`타입은 어떤 변수의 변수에도 대입 될 수 있지만, never 타입에는 어떤 타입의 값도 대입될 수 없다.

<br />

### 🏃‍♂️ Type Annotations - Tuple
- 튜플을 이용하면 배열의 요소 수와 각 요소에 대한 타입을 지정할 수 있다.
- 튜플은 정해진 길에아 맞지 않으면 에러가 발생. 하지만 `push()`는 튜플의 규칙을 무시함.
- 서로 다른 타입의 요소를 갖는 배열은 순서에 상관없이 데이터를 넣을 수 있지만, 반면 튜플은 정해진 순서에 맞게 넣어야 함
- 튜플 타입은 배열보다 저장되는 요소에 순서와 수에 제약을 두고자 할 때 사용
```ts
  const tuples: [string, number] = ['Jeon', 27]; //튜플
  const arr: (string | number)[] = ['Jeon', 27, 'MinJae', 26]; //배열

  tuples[0] = 'Park' // OK
  tuples[0] = 50 // Error: Type '50' is not assignable to type 'string'.ts(2322)

  tuples[1] = 50 // OK
  
  tuples.push(100);
  console.log(tuples); // ['Park', 50, 100] 
```

<br />


## 🏃‍♂️ Generics
- 재사용 가능한 클래스, 함수를 만들기 위해 다양한 타입에서 사용 가능 하도록 하는 것이 `제네릭`이다.
- 제네릭을 이용하면 모든 타입의 객체를 다루면서 객체 타입의 무결성을 유지할 수 있다.
- 제네릭을 통해 클래스나 함수 내부에서 사용되는 특정 데이터의 타입을 외부에서 지정한다.
- 제네릭이 적용된 대상(클래스, 함수, 인터페이스)은 선언 시점이 아닌 생성 시점에 사용하는 타입을 결정한다.

```ts
class Box<T> {
  constructor(private fruit: T) {}
  getFruit(): T {
    return this.fruit;
  }
}
```
- 위 코드에서 `<T>`을 적어 제네릭을 적용 이를 타입 파라미터라고 한다.
- T말고 어떠한 알파벳을 사용해도 상관은 없지만 관용적으로 T를 사용

<br />

```ts
const box: Box<Orange> = new Box(new Orange(5));
```
- 위에 코드를 보면 box를 정의하면서 box의 타입으로 Box의 타입을 제네릭으로 `<Oragne>`를 지정함 실제 인스턴스화 하면서 Orange 객체를 생성해서 넣음

<br />

```ts
class Box<Orange> {
  constructor(private fruit: Orange) {}
  getFruit(): Orange {
    return this.fruit;
  }
}
```
- 결과적으로 T라고 지정된 타입들은 모두 Orange 타입이 된다.

<br />

