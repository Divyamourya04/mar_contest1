let count=0;
document.getElementById("message");
document.getElementById("decrement-btn").onclick=function name(params) {
    count-=1;
   
    if(count<0) {
        
        console.log("Error:cannot go below 0");
        document.getElementById("message").innerHTML="Error:cannot go below 0";
       
    } 
    else {
        
        document.getElementById("countlabel").innerHTML=count; 
        console.log(" ");
        message.classList.remove('hide');
        document.getElementById("message").innerHTML="";
        
    }
   
}
document.getElementById("increment-btn").onclick=function name(params) {
    count+=1;
    document.getElementById("countlabel").innerHTML=count; 
    message.classList.add('hide');
}
document.getElementById("clear-btn").onclick=function name(params) {
    count=0;
    document.getElementById("countlabel").innerHTML=count;  
    message.classList.add('hide');
}