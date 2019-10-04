const log = console.log
const reduce = (f, acc, iter)=>{
    if(!iter){
        iter = acc[Symbol.iterator]()
        acc = iter.next().value
    }
    for(const a of iter){
        acc = f(acc, a)
    }
    return acc
}
const go = (...args)=>reduce((a,f)=>f(a), args)
const filter =(f, iter)=>{
    let res = [];
    for(const a of iter){
        if(f(a)) res.push(a)
    }
    return res
}
const arr = [1,2,3]
go(
    arr,
    arr => filter(a=>a%2, arr),
    log
    )
// 대각선끼리의 차이(절대값) 을 구하는 것
const list_ = [[11, 2, 4], [4,5,6], [10,8,-12]]
const isInterable = a=> a && a[Symbol.iterator];
const filter_ = (f, iter)=>{
    let res = [];
    iter.forEach(function(value, i){
        if(f(value, i)) res.push(value)
    })
    return res
}

const flatten_ = (iter)=>{
    let res = []
    for(const a of iter){
        if(isInterable(a)){
            for(const b of a){
                res.push(b)
            }
        }else{
            res.push(a)
        }
    }
    return res
}
const flat_list = flatten_(list_)
const check_index = (value, index)=>{
    if(index % 4 == 0){
        return true
    }
}
const check_index_ = (value, index)=>{
    let temp = index
    if(temp == 2 || temp == 4 || temp == 6){
        return true
    }
}
const add_ = (a, b) => a+b;
const reduce_ = (f, acc,iter)=>{
    if(!iter){
        iter = acc[Symbol.iterator]();
        acc = iter.next().value
    }
    for(const a of iter){
        acc = f(acc, a)
    }
    return acc
}
go(
    list_,
    list_ => flatten_(list_),
    list_ => filter_(check_index, list_),
    list_ => reduce_(add_, list_),
    log
)
let one = filter_(check_index, flat_list)
let two = filter_(check_index_, flat_list)
// log(one)
one = reduce_(add_, one)
two = reduce_(add_, two)
log(one)
log(two)