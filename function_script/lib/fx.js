const log = console.log;

const map = (f, iter)=>{ // 어떤 값을 수집할지에 대해 추상화 한다(함수 f에게 위임한다), 직접 입력안함
    let res = [];
    for (const a of iter){
        res.push(f(a));
    }
    return res;
}


const filter = (f, iter)=>{
    let res = [];
    for (const a of iter){
        if(f(a)) res.push(a);
    }
    return res
}

const reduce = (f, acc, iter)=>{
    if(!iter){
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for(const a of iter){
        acc = f(acc, a);
    }
    return acc
}