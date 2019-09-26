// 0926 Plus Minus
const reduce = (f, acc, iter)=>{
    if(!iter){
        iter = acc[Symbol.iterator]();
        acc =iter.next().value
    }
    for(const ele of iter){
        acc = f(acc, ele)
    }
    return acc;
}
const go = (...args) => reduce((a,f)=>f(a), args)
const pipe = (f, ...fs) => (...as) => go(f(as), ...fs)
const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._)
const log = console.log
const arr = [-4, 3, -9,0,4,1]
const check = (num)=>{
    let res = '';
    if(num >0) res = 'pos';
    else if (num == 0) res = 'zero';
    else res = 'neg'
    log(res)
    return res
}
const map = (f, iter)=>{
    let res = {pos:0, zero:0, neg:0};
    for(const ele of iter){
        res[f(ele)] += 1
    }
    return Object.values(res)
}
const convert = (length) => (num) =>{
    return (num/length).toFixed(length)
}
const map_origin = (f, iter)=>{
    let res = [];
    for(const ele of iter){
        res.push(f(ele))
    }
    return res
}
go(arr,
    a => map(check, a),  
    a => map_origin(convert(arr.length), a),
    log
)