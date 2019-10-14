const log = console.log
const reduce = (f, acc,iter)=>{
    if(!iter){
        iter = acc[Symbol.iterator]()
        acc = iter.next().value
    }
    for(const ele of iter){
        acc = f(acc, ele)
    }
    return acc
}
const go = (...args) => reduce((a,f)=>f(a),args)
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs)
const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._)

let arr = [18,90,90,13,90,75,90,8,90,43]
arr = [3,2,1,3]
const map = (f, iter)=>{
    let res = []
    for(const ele of iter){
        res.push(f(ele))
    }
    return res
}
let RES = {}
const obj_map = (f, iter)=>{
    let res = {}
    for(const ele of iter){
        res[ele] = f(ele)
    }
}
const convert = (iter) =>{
    let res= {}
    for(const num of iter){
        if(typeof(res[num]) === 'undefined'){
            res[num] = 1
        }else{
            res[num]++
        }
    }
    return Object.values(res)
}
go(
    arr,
    arr => map(a =>Math.abs(arr.length-a), arr),
    arr => convert(arr),
    arr => reduce((a,b) => a-b>0?a:b, arr),
    log
)