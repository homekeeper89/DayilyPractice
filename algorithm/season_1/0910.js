// Mini-Max Sum 5개의 원소 중 4개의 원소를 픽해서 min sum과 max sum을 해라
let arr = [4,5,2,3,1]

const bubble_sort = (iter=>{
    for(var i =0 ; i < iter.length ; i++){
        for(var k = iter.length; k > i ; k--){
            if(iter[k] < iter[k-1]){
                let temp = iter[k-1]
                iter[k-1] = iter[k]
                iter[k] = temp
            }
        }
    }
    return iter
})
const add = (a,b)=>a+b;
const reduce = (f, acc, iter)=>{
    if(!iter){
        iter = acc[Symbol.iterator]()
        acc = iter.next().value
    }
    for(let a of iter){
        acc = f(acc, a)
    }
    return acc
}
bubble_sort(arr)
let res = reduce(add, arr)
console.log(res - arr[4], res - arr[0])