// staircase

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
const log = console.log
const go = (...args) => reduce((a,f)=>f(a), args)

const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs)

const f = pipe(
    (a,b)=> a+b,
    a => a+10,
    a=> a+1000,
    log
)

f(0,10)