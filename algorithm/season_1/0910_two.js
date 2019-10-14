// Mini-Max Sum 5개의 원소 중 4개의 원소를 픽해서 min sum과 max sum을 해라
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

let arr = [4,5,2,3,1]
// Mini-Max Sum 5개의 원소 중 4개의 원소를 픽해서 min sum과 max sum을 해라

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
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs)

go(
    arr,
    arr => bubble_sort(arr),
    arr => reduce((a,b)=>a+b, arr),
    log
)

go(
    arr,
    arr => reduce((a,b)=> a>b?a:b, arr),
    log
)
go(
    arr,
    arr => reduce((a,b)=> a<b?a:b, arr),
    log
)