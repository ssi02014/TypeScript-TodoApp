let data: string | number[];

//파라미터 is string 은 Type Guard에만 사용하는 연산자
function isString(data: string | number[]): data is string {
  return (<string>data).split !== undefined;
}

data = 'TypeScript';
if(isString(data)) {
  console.log(data.split(""));
} else {
  //number []
}