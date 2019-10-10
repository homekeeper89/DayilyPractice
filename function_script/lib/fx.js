const L = {};
const add = (a,b) => a+b;
const log = console.log;
const curry = f => (a, ..._) =>_.length ? f(a, ..._) : (..._)=> f(a, ..._)
const go = (...args) =>reduce((a, f)=>f(a),  args)
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs)

const find = curry((f, iter)=> go(
    iter,
    filter(f),
    take(1),
    ([a]) => a
  ))

const map = curry((f, iter)=>{ // 어떤 값을 수집할지에 대해 추상화 한다(함수 f에게 위임한다), 직접 입력안함
    let res = [];
    for (const a of iter){
        res.push(f(a));
    }
    return res;
})

L.map = curry(function *(f, iter){ // 어떤 값을 수집할지에 대해 추상화 한다(함수 f에게 위임한다), 직접 입력안함
    for (const a of iter){
        yield go1(a,f);
    }
})


const filter = curry((f, iter)=>{
    let res = [];
    for (const a of iter){
        if(f(a)) res.push(a);
    }
    return res
})
const go1 = (a, f) => a instanceof Promise ? a.then(f) : f(a);

const reduce = curry((f, acc, iter)=>{
    if(!iter){
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }else{
        iter = iter[Symbol.iterator]();
    }
    let cur;
    // while(!(cur = iter.next()).done){
    //     const a = cur.value;
    //     acc = f(acc, a);
    //     // acc = acc instanceof Promise ? acc.then(acc=>f(acc,a)):f(acc,a)
    // }
    return go1(function recur(acc){
        while(!(cur = iter.next()).done){
        const a = cur.value;
        acc = f(acc, a);
        // acc = acc instanceof Promise ? acc.then(acc=>f(acc,a)):f(acc,a)
        if (acc instanceof Promise) return acc.then(recur);
        }
        return acc;
    }(acc));
})

const reduce_legacy = curry((f, acc, iter)=>{
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
    return function recur(){
        for (const a of iter){
            if (a instanceof Promise) return a.then(a =>{
                res.push(a)
                if(res.length == l) return res;
                return recur()
            });
            res.push(a)
            if(res.length == l) return res;
        }
        return res;
    }
})

const take_legacy = curry((l, iter)=>{
    let res = [];
    for (const a of iter){
        if (a instanceof Promise) return a.then(a =>{
            res.push(a)
            if(res.length == l) return res;
            
        })
        res.push(a)
        if(res.length == l) return res;
    }
    return res;
})