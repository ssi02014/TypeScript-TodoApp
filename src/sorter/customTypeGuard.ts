let data: string | number[];

//파라미터 is string 은 Type Guard에만 사용하는 연산자
function isString(data: string | number[]): data is string {
  return (<string>data).split !== undefined;
}

// data = 'TypeScript';
data = [1, 2, 3, 4, 5, 6, 7];

if (isString(data)) {
  console.log(data.split(""));
} else {
  console.log(data.reduce((a, b) => a + b));
}