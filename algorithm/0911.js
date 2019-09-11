// Staircase
const num_array = (num)=>{
    let res = ''
    for(let i=0; i<=num;i++){
        res += ' '
    }
    return res
}

const str_array = (start, num)=>{
    let base = num -1
    let res = ''
    for(let i=base; i>=start;i--){
        res += '#'
    }
    return res
}
const stair = (num)=>{
    for (let i=num; i>=0;i--){
        console.log(num_array(i) + str_array(i, num))
    }
}

stair(6)