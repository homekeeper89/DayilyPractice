//0925 Diagonal Difference
// 6/11 test cases failed :(
const log = console.log
const reduce = (f, acc, iter)=>{
    if(!iter){
        iter = acc[Symbol.iterator]();
        acc = iter.next().value
    }
    for(const ele of iter){
        acc = f(acc, ele)
    }
    return acc
}
const go = (...args) => reduce((a,f)=>f(a), args)
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs)
const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._)
const arr = [11,2,4,
            4, 5, 6,
            10, 8, -12]
// 0, 4, 8
// 2, 4, 6
const curry_go = curry(go)
const arr2 = [[10,20,30,40],
              [10,20,30,40],
              [10,20,30,40],
              [10,20,30,40]] 
              // 0,5,10,15
              // 3,6,9,1
const num = 4
const f= (num)=> (iter) => {
  let si = 0
  let ei = num-1;
  let siadd= 0;
  let eiadd= 0;
  for(var i=0; i<num; i++){
    siadd += iter[i][si]
    eiadd += iter[i][ei]
    si++;
    ei--;
  }
  log(siadd, eiadd)
  return siadd - eiadd
}
go(
  arr2,
  a => f(a.length)(a),
  log
  )