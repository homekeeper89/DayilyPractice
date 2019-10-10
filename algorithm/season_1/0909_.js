let arr = [-4,3,-9,0,4,1]
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
}
let un_zero = filter(a =>a<0, arr).length
let zero = filter(a =>a==0, arr).length
let up_zero = filter(a=>a>0, arr).length

let base = arr.length

let arry = [un_zero, zero, up_zero]

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
let arrs = sort(arry)
map(a=>console.log((a / base).toFixed(6)), arrs)