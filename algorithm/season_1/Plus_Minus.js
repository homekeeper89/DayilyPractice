// 0926 Plus Minus
// 8/12 test cases failed :(
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
const arr = [-76,-33, 0, -37, 39, 0, 33, -10, 0, 57,59,0,-14,-57,0,-96,45,0,-60,82,0,-94,-31,0,-68,-53,0,-57,100,0,35,81,0,-4,76,0,15,60,0,2,-85,0,16,-70,0,62,-25,0,4,-89,0,-79,-80,0,-23,97,0,69,-68,0,-83,-57,0,74,1,0,-66,23,0,68,-80,0,100,10,0,-73,-54,0,0,4,0,-8,-86,0,58,-85,0,-100,-100,0,43,61,0,61,-86,0,24,-95,0,-54]
const check = (num)=>{
    let res = '';
    if(num >0) res = 'pos';
    else if (num == 0) res = 'zero';
    else res = 'neg'
    log(res)
    return res
}
const map = (f, iter)=>{
    let res = {pos:0, neg:0,zero:0};
    for(const ele of iter){
        res[f(ele)] += 1
    }
    return Object.values(res)
}
const convert = (length) => (num) =>{
    return (num/length).toFixed(6)
}
const map_origin = (f, iter)=>{
    let res = [];
    for(const ele of iter){
        res.push(f(ele))
    }
    return res
}
const select_sort = (arr) =>{
    let pointer = 0;
    for(let i =0; i < arr.length; i++){
        for(let j=i; j < arr.length; j++){
            if(arr[i] < arr[j]){
                pointer = arr[j]
                arr[j] = arr[i]
                arr[i] = pointer
            }
        }
    }
    return arr
}
const print = (iter) =>{
    for(const ele of iter){
        console.log(ele)
    }
}
go(arr,
    a => map(check, a),  
    a => map_origin(convert(arr.length), a),
    a => print(a)
)