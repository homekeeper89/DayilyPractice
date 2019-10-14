// Grading Students
// 5자리에서 계산해야하는건데
const arr = [73,67,38,33]

const check = (ele)=>{
    if(ele < 38){
        return ele
    }else{
        let s_num = ele % 10;
        let b_num = s_num >5 ? 10 : 5
        let t_num = parseInt(ele/10)
        let num = Math.abs(b_num- s_num)
        if(num < 3){
            if(s_num<=5){
                num = t_num * 10 + 5
            }else{
                num = (t_num+1) * 10
            }
            return num
        }else{
            return ele
        }
    }
}

const map = (f, iter)=>{
    let res = [];
    for(const a of iter){
        res.push(f(a))
    }
    return res
}

let res = map(check, arr)
console.log(res)