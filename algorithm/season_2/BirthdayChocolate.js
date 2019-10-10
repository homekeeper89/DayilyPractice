// 1008, 1009, 7/14 test cases failed
const reduce = (f, acc, iter)=>{
  if(!iter){
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for(const ele of iter){
    acc = f(acc, ele)
  }
  return acc;
}

const go = (...args) => reduce((a,f)=>f(a), args)
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs)
const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._)

const curry_reduce = curry(reduce)
const curry_go = curry(go)

const test_input = [1,2,1,3,2]
const test_sum = 3 // 원하는 값
const test_sequence = 2 // 연속되는 시퀀스
// 1 <= d <= 31, 1 <= m <= 12
const checker = (iter, sum, sequence, counter=0) => {
  if (sequence == 0 || sequence > iter.length){
    return counter
  }
  for(let i = 0; i < iter.length; i++){
    let temp = sum
    if(sequence==1){
      temp -= iter[i]
    }
    for(let j = i; j <= i + (sequence-1); j++){
      if(j+sequence-1 >=iter.length){
        continue
      }
      console.log(`%ctemp : ${temp} ${iter[j]}`,`color:red`)
      temp -= iter[j]
    }
    console.log(`%ctemp : ${temp}`,`color:red`)
    if(temp == 0){
      counter += 1
    }
  }
  return counter
}
QUnit.cases([{input : test_input, sum:test_sum, expected:2}])
  .test("First Test", function(param){
    let ans = 2
    equal(param.expected == ans, true)
  })
QUnit.cases([
  {input : [1,2,1,3,2], sum:3, sequence:2, expected:2},
  {input : [1,1,1,1,1], sum:3, sequence:2, expected:0},
  {input : [4], sum:4, sequence:1, expected:1},
  {input : [4,2,9,8,3], sum:11, sequence:2, expected:2}
]).test("Checker test", function(param){
    let res =checker(param.input, param.sum, param.sequence)
    dev_console(param.input, res)
    equal(param.expected == res, true)
  })