//Birthday Cake Candles
const reduce = (f, acc, iter)=>{
    if(!iter){
        iter = acc[Symbol.iterator]()
        acc =iter.next().value
    }
    for(const ele of iter){
        acc = f(acc, ele)
    }
    return acc
}
const log = console.log
const go = (...args)=>reduce((a,f)=>f(a), args)
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs)
const curry = f => (a, ..._) =>_.length ? f(a, ..._) : (..._)=> f(a, ..._)
const f = pipe(
    (a,b,c)=>c,
    a => a+10,
    a => a+100,
    log
)
const arr = [3,2,1,3]
const curry_go = curry((...args)=>curry_reduce((a,f)=>f(a), args))
const curry_reduce = curry((f,acc,iter)=>{
    if(!iter){
        iter = acc[Symbol.iterator]()
        acc =iter.next().value
    }
    for(const ele of iter){
        acc = f(acc, ele)
    }
    return acc
})
let base_num = 1
// curry_go(
//     arr,
//     reduce((a,b)=> a-b>0 )

// )
const filter = curry((f, iter)=>{
    let res = [];
    for(const ele of iter){
        if(f(ele)) res.push(ele)
    }
    return res
})
const num = 3
let test_arr = [4,3,2,3,2,1]
// log(reduce((a,b)=> a<num&&a-b>0?a:b, test_arr))
// log(filter(a=>a<num&& a-b>0)), test_arr
// const curry_go = curry((...args)=>curry_reduce((a,f)=>f(a), args))
// filter로 filter 하는데 이는 reduce를 통해 구한 최소값을 바탕으로 한다.
// 문제는 
go(
    test_arr,
    filter(a => a == reduce((a,b)=> a<num&& a-b>0?a:b, test_arr)),
    log
)

let a = curry_reduce((a,b)=> a<num&& a-b>0?a:b)(test_arr)
// log(a)