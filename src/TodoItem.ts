class TodoItem {
  //타입스크립트에서는 타입을 지정해주는거 이외에 접근 지정자(private, public, protected) 등을 지정할 수 있음
  //또한 생성자 안에서 접근 지정자를 지정하면 프로퍼티로 정의 됨
  constructor(public id: number, public task: string, public complete: boolean) {
    this.id = id;
    this.task = task;
    this.complete = complete;
  }

  //리턴 존재하지 않을 시 void 타입 선언
  printDetails(): void {
    console.log(
      `${this.id} \t ${this.task} \t ${this.complete ? "(complete)" : ""}`
    );
  }
}

export default TodoItem;