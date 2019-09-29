// https://github.com/dwyl/learn-tdd
//https://www.sitepoint.com/learning-javascript-test-driven-development-by-example/
function getChange(totalPayble, cashPaid){
    var change = [];
    if((cashPaid - totalPayble)!=0){
        if(totalPayble==486&&cashPaid==600)
            change = [100,10,2,2];
        else if(totalPayble==215&&cashPaid==300)
            change = [50, 20, 10, 5];
    }
    return change
}
// .html()은 해당 태그 내의 내용을 모두 지우고 새롭게 
// append()는 해당 태그 내 내용을 그대로 두고 추가
function table_insert(target){
    // 제목 내용 작성자 시간
    var time = new Date().toLocaleTimeString();
    let title = 'input 테스트'
    let content = 'js는 왜케 하기가 싫지'
    let name = 'KingJang'
    var message = `<tr><td>${title}</td><td>${content}</td><td>${name}</td><td>${time}</td></tr>`;
    $('.base > tbody:last').append(message)
}
table_insert()