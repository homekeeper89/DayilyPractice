// Grading Students
// 5자리에서 계산해야하는건데
const arr = [73,67,38,33]

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
const log = console.log
const go = (...args)=>reduce((a,f)=>f(a), args)
const pipe = (f, ...fs) => (...as) => go(f(as), ...fs)
const curry = f => (a, ..._) =>_.length? f(a, ..._) : (..._) => f(a, ..._)

const curry_go = curry(go)
const curry_pipe = curry(pipe)
const curry_reduce = curry(reduce)
const curry_map = curry((f,iter)=>{
    let res = [];
    for(const ele of iter){
        res.push(f(ele))
    }
    return res
})
const curry_filter = curry((f, iter)=>{
    let res = [];
    for(const ele of iter){
        if(f(ele)) res.push(ele)
    }
    return res
})
// Math.round((a.val * 2)/10)*5
curry_go(
    arr,
    curry_map(a=> a<38?{'key':false, 'val':a}:{'key':true, 'val':a}),
    curry_map(a => a.key==true? Math.round((a.val * 2)/10)*5 : a.val),
    log
)