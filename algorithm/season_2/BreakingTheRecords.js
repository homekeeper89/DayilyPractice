// 1006 BreakingTheRecords
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
const go = (...args) => reduce((a,f)=>f(a), args)
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs)
const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._)=>f(a, ..._)
const curry_go = curry(go)
const curry_reduce = curry(reduce)
const log = console.log
const test_input = [10,5,20,20,4,5,2,25,1]
const test_expected = [2,4]
let min_val=test_input[0]
let max_val=test_input[0]
let counter = [0,0]

const checker = (iter)=>{
  for(const ele of iter){
    if(ele < min_val){
      min_val = ele
      counter[1] += 1
    }else if(ele > max_val){
      max_val = ele
      counter[0] += 1
    }
  }
  return counter
}
const filter = (f, iter)=>{
  
}
const map = (f, iter)=>{
  let res = []
  for(const ele of iter){
    res.push(f(ele))
  }
}
const curry_checker = curry(checker)
curry_go(
  test_input, 
  curry_checker(test_input),
  log
  )
log("it is works test?", new Date())
QUnit.test("First Test", function(assert){
  assert.equal(true, 'a'==='a')
})
QUnit.test("First Test", function(assert){
  assert.equal(true, 'a'==='a')
})
QUnit.test("First Test", function(assert){
  assert.equal(true, 'a'==='a')
})
