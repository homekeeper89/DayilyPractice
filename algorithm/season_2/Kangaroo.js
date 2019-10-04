// Kangaroo -> 12/30 test cases failed

const reduce = (f, acc, iter)=>{
  if(!iter){
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for(const ele of iter){
    acc = f(acc, ele)
  }
  return acc
}
const map = (f, iter)=>{
  let res = [];
  for(const ele of iter){
    res.push(f(ele))
  }
  return res
}
const go = (...args)=>reduce((a,f)=>f(a), args);
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);
const curry = f => (a, ..._) => _.length ? f(a, ..._):(..._)=>f(a, ..._)

const test_input = [0,2,5,3]
const check = (args)=> {
  if(args[0] - args[2] < 0 && args[1] - args[3] >0){
    return 'YES'
  }else if(args[0] - args[2] > 0 && args[1] - args[3] < 0){
      return 'YES'
  }
  return 'NO'
}
QUnit.test("First Test", function(assert){
  assert.equal(true, 'a'==='a')
})
QUnit.cases(
  [{input : [0,2,5,4], expected:'NO'},
  {input : [0,3,4,2], expected:'YES'}]
).test('input test', function(params){
  console.log(params.input)
  let res = check(params.input)
  equal(res, params.expected)
})