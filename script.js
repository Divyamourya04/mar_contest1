let count=0;
document.getElementById("message")
document.getElementById("decrement-btn").onclick=function name(params) {
    count-=0;
    if(count=0) {
        console.log("Error:cannot go below 0");
    } 
    else {
        console.log(" ")
        message.classList.remove('hide')
        
    }
   
}
document.getElementById("increment-btn").onclick=function name(params) {
    count+=1;
    document.getElementById("countlabel").innerHTML=count; 
    message.classList.add('hide')
}
document.getElementById("clear-btn").onclick=function name(params) {
    count=0;
    document.getElementById("countlabel").innerHTML=count;  
    message.classList.add('hide')
}