function printNumber(from, to){
    console.log(from);
    let timerId = setInterval(function(){
        if(from == to){
            clearInterval(timerId);
        }
    },1000);
}
setTimeout(printNumber,5000,'hi','itsme');