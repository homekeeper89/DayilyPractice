// 0924 월요일
const log = console.log
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
const map = (f, iter)=>{
    let res = [];
    for(const a of iter){
        res.push(f(a, iter))
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
const go = (...args)=>reduce((a,f)=>f(a), args)
const pipe = (f, ...fs) => (...as) => go(f(as), ...as)
const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._)=>f(a, ..._)

const curry_reduce = curry(reduce)
const curry_go = curry(go)
const curry_map = curry(map)

const a = [17,28,30]
const b = [99,16,8]
const index = (ele, iter)=>{
    return iter.indexOf(ele)
}
const test = (a,b) => (iter) => {
    let res = [0,0]
    for(const ele of iter){
        if(a[ele] > b[ele]){
            res[0] += 1
        }else if (a[ele] == b[ele]){
            continue
        }else{
            res[1] += 1
        }
    }
    return res
}
const curry_test = curry(test)
curry_go(
    a,
    curry_map(index),
    curry_test(a,b),
    log
)