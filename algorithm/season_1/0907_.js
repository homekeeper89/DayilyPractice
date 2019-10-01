// simple array sum
const reduce = (f, acc, iter)=>{
    if(!iter){
        iter = acc[Symbol.iterator]()
        acc = iter.next().value
    }
    for(const ele of iter){
        acc = f(acc, ele)
    }
    return acc
}
const go =(...args)=>reduce((a,f)=>f(a), args)
const pipe = (f, ...fs) => (...as) => go(f(as), ...fs)
const curry = f => (a, ..._) => _.length? f(a, ..._):(..._)=>f(a, ..._)

const curry_go = curry(go)
const curry_pipe = curry(pipe)
const curry_reduce = curry(reduce)
const arr = [1,2,3,4,5]
const log = console.log

curry_go(
    arr,
    curry_reduce((a,b)=>a+b),
    log
)

