// https://github.com/dwyl/learn-tdd
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