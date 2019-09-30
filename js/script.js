
 
document.getElementById("tempFahr").value = "";

function output(){  
  var eventType=document.querySelector("select");
  var select=addEventListener("change",output);
var choice=clothes.value;
var tempFahr=document.getElementById("tempFahr").value;

  
  if (choice==="casual" && tempFahr <54){
    var result= tempFahr.concat(" is cold, and your event is casual, you should wear something warm and comfy.");
    console.log(result);
} else if (choice==="casual" && tempFahr >=54 && tempFahr<=70){
    var result=tempFahr.concat(" is chilly, and your event is casual, you should wear something comfy with a light jacket.");
    console.log(result);
} else if(choice==="casual" && tempFahr>70){
var result=tempFahr.concat(" is warm, and your event is casual, you should wear something comfy without a jacket.");
    console.log(result);
} else if (choice==="semiFormal" && tempFahr<54){
var result=tempFahr.concat(" is cold, and your event is semi formal, you should wear a polo with a coat.");
    console.log(result);
} else if (choice==="semiFormal" && tempFahr>=54 && tempFahr<=70){
var result=tempFahr.concat(" is chilly, and your event is semil formal, you should wear a polo with a light jacket.");
    console.log(result);
} else if (choice==="semiFormal" && tempFahr>70){
var result=tempFahr.concat(" is warm, and your event is semi formal, you should wear a polo with no jacket.");
    console.log(result);
} else if (choice==="formal" && tempFahr<54){
var result=tempFahr.concat(" is cold, and your event is ",choice,", you should wear a suit with a coat.");
    console.log(result);
} else if (choice==="formal" && tempFahr>=54 && tempFahr<=70){
var result=tempFahr.concat(" is chilly, and your event is ",choice,", you should wear a suit with a jacket.");
    console.log(result);
} else if (choice==="formal" && tempFahr>70){
var result=tempFahr.concat(" is warm, and your event is ",choice,", you should wear a polo with no jacket.");
    console.log(result);
} else{
console.log();
  }
}