// 1029
// input_a = [2,6]
// input_b = [24,36]
// input_a 는 약수가 되고, input_b는 배수가 되는 수의 갯수를 구해라
// [2,4], [16,32,96] 의 경우 4,8,16으로 return은 3

// 로직 설계
// 두번째 리스트 안에 있는 변수는 배수가 되어야한다.
// 즉 무조건 두번째 리스트 안에있는 수가 들어가야하므로 두번째 리스트를 정렬한다.
// 정렬된 리스트의 제일 첫번째(제일 작은값)이 배수의 가장 큰 값이 되고
// 첫번째 리스트의 마지막 값은 약수의 가장 작은 값이 된다.
// 약수를 구하고 그 중 첫번째 리스트에서 가장 큰값 이상인 애를 뽑자...

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
