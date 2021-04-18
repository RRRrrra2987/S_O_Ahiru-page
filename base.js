function sleep(waitMsec) {
    var startMsec = new Date();
    
    while (new Date() - startMsec < waitMsec);
}
var count1=1
function action1(){
    if (count1%2==1){
        let target = document.getElementById("reaction1");
        target.className = "mieru";
    }
    else{
            let target = document.getElementById("reaction1");
        target.className = "mienai";
}
count1=count1+1}
