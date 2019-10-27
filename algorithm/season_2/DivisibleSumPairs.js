// 191018
// array, k, array[i] < k && array[j] > k && arr[i] + arr[j] % k == 0
// 이런 조건이라...
// k보다 작은 애들, 큰애들 구분
// 작은애들을 iter로 돌림
// 큰애들과 하나씩 더하고 %k를 함
// ==0 이면 push

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
  let res =[];
  for(const ele of iter){
    res.push(f(ele))
  }
  return res;
}
const filter = (f, iter)=>{
  let res =[];
  for(const ele of iter){
    if(f(ele)) res.push(ele)
  }
  return res
}
const go = (...args) => reduce((a,f)=>f(a), args)
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs)
const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._)