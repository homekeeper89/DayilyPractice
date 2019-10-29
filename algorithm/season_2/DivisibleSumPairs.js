// 1022 Divisible Sum Pairs
// written by homekeeper89
// https://github.com/homekeeper89
// input = [1,2,3,4,5,6], key = 5, res = [1,4],[2,3],[4,6]

// 1. input array 를 iter
// 2. key - iter 인덱스 값
// 3. 2번 값이 리스트에 있는지 확인
// 4. 있으면 res에 추가
// 엔드조건은?

const solution = (input, key) =>{
  let res = []
  for(let i = 0; i < input.length; i++){
    for(let j = i+1; j < input.length; j++){
      if((input[i] + input[j]) % key == 0){
        let temp = []
        temp.push(input[i])
        temp.push(input[j])
        res.push(temp)
      }
    }
  }
  return res.length
}

QUnit.cases(
  [{input:[1,2,3,4,5,6], key:5, expected:3},
  {input:[1,3,2,6,1,2], key:3, expected:5}]
).test('Divisible ', function(param){
  let res = solution(param.input, param.key)
  equal(res, param.expected)
})

