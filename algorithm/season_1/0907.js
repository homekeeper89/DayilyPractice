// simple array sum
const log = console.log
const reduce = (f, acc, iter)=>{
    if(!iter){
        iter = acc[Symbol.iterator]()
        acc = iter.next().value
    }
    for(const value of iter){
        acc = f(acc, value)
    }
    return acc
}

const add = (a,b) => a+b;

const list = [1,2,3,4,6]

// log(reduce(add, list))

