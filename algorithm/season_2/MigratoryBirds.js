// 10.23 
// input = [1,1,2,2,3], expected =  1
// input = [1,4,4,5,3], expected = 4
// 주어진 인풋에서 반복되는 숫자 카운트 세고 이 중 제일 맥스값을 리턴하면 되는데.

// 로직 설계
// 1. input 순회. 
// 2. input 을 다시 순회,
// 3. 같은 값이 있는 지 확인, 같은값 있으면 카운트를 올린다.
// 4. 카운트를 max값으로 설정, 더 높은 카운트가 나오면 max 교체
// 5. max를 return
// 엔드조건? : iter 다 돌면 엔드.


QUnit.cases([
  {input : [1,1,2,2,3], expected : 1},
  {input : [1,4,4,4,5,3], expected : 4},
]).test('Set env', function(param){
  equal(param.expected, param.expected)
})