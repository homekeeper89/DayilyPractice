// 10.23 
// input = [1,1,2,2,3], expected =  1
// input = [1,4,4,5,3], expected = 4
// 주어진 인풋에서 반복되는 숫자 카운트 세고 이 중 제일 맥스값을 리턴하면 되는데.

const reduce = (f, acc, iter) =>{
  if(!iter){
    iter = acc[Symbol.iterator]()
    acc = iter.next().value
  }
  for(const ele of iter){
    acc = f(acc, ele)
  }
  return acc;
}
const map = (f, iter) =>{
  let res = [];
  for(const ele of iter){
    res.push(f(ele))
  }
  return res
}
const filter = (f, iter)=>{
  let res = [];
  for(const ele of iter){
    if(f(ele)) res.push(ele)
  }
  return res
}
const go = (...args) => reduce((a,f)=>f(a), args)
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs)
const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._)
const curry_reduce = curry(reduce)
const curry_go = curry(go)
const curry_pipe = curry(pipe)

// 로직 설계
// 1. input 순회. 
// 2. input 을 다시 순회,
// 3. 같은 값이 있는 지 확인, 같은값 있으면 카운트를 올린다.
// 4. 카운트를 max값으로 설정, 더 높은 카운트가 나오면 max 교체
// 5. max를 return
// 엔드조건? : iter 다 돌면 엔드.

// 시작을 어디부터 해야할까? 
// 동률(같은 갯수)가 나왔다는걸 어떻게 체크해야할까 > 동률체크를 어떻게 하는지가 관건인듯
const solution = (input) =>{
  let res_normal = []
  let res_one = []
  let res_max =1
  for(let i =0; i < input.length;i++){
    let max = 0
    let base = input[i]
    for(let j = 0; j < input.length;j++){
      if(base == input[j]){
        max += 1
      }
    }
    if(max > res_max){
      res_max = max
      res_normal.push(base)
    }
    else if(max == res_max){
      let res = max == 1 ? res_one : res_normal
      if(!res.includes(base)){
        res.push(base)
      }
    }
  }
  let res = res_max == 1 ? res_one : res_normal
  res = res.length == 1? res[0] : res[1]
  return res
}

const solution_re = (input) =>{
  // let res_array = []
  let res = {}
  for(const ele of input){
    let counter = 0;
    for(let i =0; i<input.length;i++){
      if(ele == input[i]){
        counter +=1;
      }
    }
    res[ele] = counter
  }
  return res
}
const sort_key_value = (obj) =>{
  let res = reduce((a,b)=> a-b > 0 ? a:b, Object.values(obj)) 
}


QUnit.cases([
  {input : [1,1,2,2,3], expected : 2},
  {input : [1,4,4,4,5,3], expected : 4},
  {input : [1,2,3,4,5,4,3,2,1,3,4], expected :3},
]).test('new solution check', function(param){
  let res = solution_re(param.input)
  sort_key_value(res)
  console.log(res)
  equal(param.expected, param.expected)
})

// QUnit.cases([
//   {input : [1,1,2,2,3], expected : 2},
//   {input : [1,4,4,4,5,3], expected : 4},
//   {input : [1,2,3,4,5,4,3,2,1,3,4], expected :3},
// ]).test('count same num', function(param){
//   let res = solution(param.input)
//   equal(param.expected, res)
// })

// QUnit.cases([
//   {input : [1,1,2,2,3], expected : 1},
//   {input : [1,4,4,4,5,3], expected : 4},
// ]).test('Set env', function(param){
//   equal(param.expected, param.expected)
// })