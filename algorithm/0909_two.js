const log = console.log
let arr = [-4,3,-9,0,4,1]
const go = (...args)=>reduce((a,f) => f(a), args)

const reduce = (f, acc, iter)=>{
    if(!iter){
        iter = acc[Symbol.iterator]()
        acc =iter.next().value
    }
    for (const ele of iter){
        acc = f(acc, ele)
    }
    return acc
}

const filter = (f, iter)=>{
    let res = [];
    for (const a of iter){
        if(f(a)) res.push(a)
    }
    return res
}
const map = (f, iter)=>{
    let res = [];
    for (const a of iter){
        res.push(f(a))
    }
    return res
}
// 여기 아래 부분의 모양은 같기에 pipe 형태로 바꿔줄수있을듯
const under_zero = go(
    arr,
    arr =>filter(a => a>0, arr),
    arr =>map(a=>'A', arr),
    log
)
const same_zero = go(
    arr,
    arr =>filter(a => a==0, arr),
    arr =>map(a=>'B', arr),
    log
)
const up_zero = 
go(
    arr,
    arr =>filter(a => a<0, arr),
    arr =>map(a=>'C', arr),
    log
)

const sort = (iter)=>{
    for (const a in iter){
        let max = a
        for(const b in iter.slice(a)){
            if(iter[Number(b)+Number(a)]>iter[max]){
                max = Number(b)+Number(a)
            }
        }
        let temp = iter[a]
        iter[a] = iter[max]
        iter[max] = temp
    }
    return iter
}