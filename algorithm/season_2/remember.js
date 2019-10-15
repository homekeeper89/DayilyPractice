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
const go = (...args) => reduce((a, f)=>f(a), args)
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs)
const curry = f => (a, ..._) => _.length ? f(a, ..._):(..._)=>f(a, ..._)

const map = (f, iter)=>{
  let res = []
  for(const ele of iter){
    res.push(f(ele))
  }
  return res
}

const filter = (f, iter)=>{
  let res = []
  for(const ele of iter){
    if(f(ele)) res.push(ele)
  }
  return res
}