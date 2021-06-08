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
- 🔍 JavaScript
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

- 🔍 TypeScript
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