// 1005 Breaking the Records
const reduce = (f, acc, iter)=>{
  if(!iter){
    iter = acc[Symbol.iterator]();
    acc = iter.next().value
  }
  for(const ele of iter){
    acc = f(acc, ele)
  }
  return acc;
}

const go = (...args) =>reduce((a,f)=>f(a), args)
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs)
const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._)
const curry_reduce = curry(reduce)
const curry_go = curry(go)
const curry_pipe = curry(pipe)
const test_input = [10,5,20,20,4,5,2,25,1]
QUnit.cases([{input:test_input, expected:[2,4]}])
.test('first tset', function(params){
  deepEqual(params.expected, params.expected)
})
let res = [0,0]
const checker = (iter)=>{
  for(const ele of iter){
    if(ele > max_val){
      max_val = ele
      res[0] += 1
      continue
    }else if(ele<min_val){
      min_val = ele;
      res[1] += 1
      continue
    }
  }
  return res
}
let max_val = test_input[0]
let min_val = test_input[0]
const log = console.log
const curry_checker = curry(checker)
curry_go(test_input,
  curry_checker(test_input),
  log
  )
// n개를 받으면 1번째부터 n번째가지 슬라이싱
// 1번째는 max이자 min으로 설정
// filter를 통해 max, min 확인
// 확인될때마다 카운트