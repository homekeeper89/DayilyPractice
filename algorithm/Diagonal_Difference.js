//0925 Diagonal Difference
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
const arr2 = [[10,20,30,40],
              [10,20,30,40],
              [10,20,30,40],
              [10,20,30,40]] 
              // 0,5,10,15
              // 3,6,9,1
const num = 4
for(var i=0;i++;i<=2){
  console.log("???")
}          
const f= ()=>{
  let si = 0
  let ei = num-1;
  for(var i=0; i<=num; i++){
    console.log(arr2[i][si], arr2[i][ei])
    si++;
    ei--;
    console.log(si, ei)
  }
}
f()