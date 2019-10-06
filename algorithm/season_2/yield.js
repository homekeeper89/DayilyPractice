// 다시 테스트
// 테스트 두번째
function *foo(){
  console.log(yield)
  let val = yield
  
}
let g = foo();

const someFunc = (iter) =>{
  for(const ele of iter){
    let g = foo()
    g.next()
    if(ele%2==0){
      g.next('2로 나눠짐')
    }else{
      g.next('홀수임')
    }
  }
}

let testInput = [1,2,3,4,5]
// someFunc(testInput)
//https://medium.com/dailyjs/a-simple-guide-to-understanding-javascript-es6-generators-d1c350551950
function *funnyGen(i){
  console.log(i)
  const j = 5*(yield(i*10));
  console.log(j);
  const k = yield(2*j/4);
  console.log(k)
  return (i+j+k);
}
var gen = funnyGen(129); 
// 위에는 아무런 반응이 없다. console.log(i)가 찍힐것 처럼 보이지만 그렇지 않다.
log(gen.next(20))
// 이때 console.log(i) 가 찍히고 기존에 i값이 yield(i*10)으로 하여 1290이 나오고 다음 yield를 대기
log(gen.next(10))
// 여기 상황이 웃긴데, yield(i*10) 자체가 그냥 10으로 대체된다. 위의 20은 나가리.. 그래서 j는 50
log(gen.next(5))
// i = 129, 다음은 10, 그다음은 5 이런식으로 변수가 사용되서 결국 129 + 50 + 5 184가 나온다

function *funGen(){
  yield;
  foo(yield 'I am useless')
}
function foo(x){
  log('Just Pringin args' , x)
}
console.clear()
gen = funGen();
log(gen.next()) // undefined
log(gen.next()) // 'I am useless'
log(gen.next())
