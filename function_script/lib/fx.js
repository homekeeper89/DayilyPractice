const L = {};
const add = (a,b) => a+b;
const log = console.log;
const curry = f => (a, ..._) =>_.length ? f(a, ..._) : (..._)=> f(a, ..._)
const go = (...args) =>reduce((a, f)=>f(a),  args)
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs)

const map = curry((f, iter)=>{ // 어떤 값을 수집할지에 대해 추상화 한다(함수 f에게 위임한다), 직접 입력안함
    let res = [];
    for (const a of iter){
        res.push(f(a));
    }
    return res;
})


const filter = curry((f, iter)=>{
    let res = [];
    for (const a of iter){
        if(f(a)) res.push(a);
    }
    return res
})

const reduce = curry((f, acc, iter)=>{
    if(!iter){
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for(const a of iter){
        acc = f(acc, a);
    }
    return acc
})

const take = curry((l, iter)=>{
    let res = [];
    for (const a of iter){
        res.push(a)
        if(res.length == l) return res;
    }
    return res;
})