//Birthday Cake Candles

const num = 4
const arr = [3,2,1,3]

const filter = (f,iter)=>{
    let res = []
    for(const a of iter){
        if(f(a)) res.push(a)
    }
    return res
}

const find_max =(iter)=>{
    let max = 0;
    for(var i=0; i<iter.length;i++){
        if(iter[i] > max){
            max = iter[i]
        }
    }
    return max
}
let res = filter(ele => ele<num, arr)
console.log(res.length)
let max = find_max(res)
console.log(max)
res = filter(ele => ele==max, res)
console.log(res.length)