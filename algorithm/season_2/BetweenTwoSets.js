
const a = [3, 4]
const b = [24, 48]

const solution = (a, b) =>{
  b = b.sort()
  a = a.sort()
  let start_num = a[a.length-1]
  let end_num = b[0]
  let res = 0
  debugger
  for(let i = start_num; i <= end_num; i++){
    if(end_num % i == 0){
      for(const ele of a){
        if(ele >= i){
          if(ele % i != 0){
            continue
          }
        }else{
          if(i % ele != 0){
            continue
          }
        }
        res +=1
      }
    }
  }
  return res
}

console.log(solution(a,b))
// QUnit.cases(
//   [
//   {input_a: [2,4], input_b :[16,32,96], expected :3}
// ]).test("BaseTest",function(params) {
//   equal(params.expected, params.expected)
// })