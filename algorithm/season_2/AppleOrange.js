//2019-10-01

const reduce = (f, acc, iter)=>{
  if(!iter){
    iter = acc[Symbol.iterator]()
    acc = iter.next().value
  }
  for(const ele of iter){
    acc = f(acc, ele)
  }
  return acc;
}

const arr = [7,11,5,15]
const apples = [-2,2,1]
const oranges = [5,-6]

const go = (...args) =>reduce((a,f)=>f(a), args)
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs)
const curry = f => (a, ..._) => _.length ? f(a, ..._) :(..._) =>f(a, ..._)
const curry_go = curry(go)
const curry_reduce = curry(reduce)
const log = console.log
const filter = (f, iter)=>{
  let res = [];
  for(const ele of iter){
    if(f(ele)) res.push(ele)
  }
  return res
}
const map = (f, iter)=>{
  let res = [];
  for(const ele of iter){
    res.push(f(ele))
  }
  return res
}
const curry_map = curry(map)
const curry_filter = curry(filter)

QUnit.test( "TestApple", function( assert ) {
  let res = curry_go(
    apples,
    curry_map(a => a+5)
  )
  assert.deepEqual(res, [3,7,6])
});

QUnit.test("TestOranges", function(assert){
  let res = curry_go(
    oranges,
    curry_map(a=>a+arr[3])
  )
  assert.deepEqual(res, [20, 9])
})

QUnit.test("TestRange", function(assert){
  let res = curry_go(
    oranges,
    curry_map(a=>a+arr[3])
  )

  let rres = curry_go(
    res,
    curry_filter(a => (a >= arr[0] && a <= arr[1]))
  )
  assert.deepEqual(rres, [9])
})