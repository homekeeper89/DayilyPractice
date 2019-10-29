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
const filter = (f, iter)=>{
  let res = [];
  for(const ele of iter){
    if(f(ele)) res.push(ele)
  }
  return res
}
const go = (...args) => reduce((a, f)=>f(a), args)
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs)
const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._)

const product = [
        {name:'tshirt', price:5000, owner:'lim'},
        {name:'blue jeans', price:6000, owner:'kim'},
        {name:'yshirt', price:10000, owner:'jim'},
        {name:'iphone', price:200000, owner:'kim'}]

const curry_reduce = curry(reduce)
const curry_map = curry(map)
const curry_filter = curry(filter)
const curry_go = curry(go)
const log = console.log
// name만 뽑아보자
let name  = 
  curry_go(product,
    curry_map(p => p.name),
    log
  )
// price를 뽑는데 owner가 kim인 애들
curry_go(product,
    curry_filter(p => p.owner == 'kim'),
    curry_map(p => p.price),
    log
  )



