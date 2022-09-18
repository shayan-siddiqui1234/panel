function game(){
let nam = document.querySelector("#nam").value
let num = document.querySelector("#no1").value

let num2 = Math.floor(Math.random() * 10) +1 

console.log(num2)

let chk = " "
if(num == num2){
    chk = " yes Sir you win "
}  else if (num == num2+1    ){
    chk = "Close Enough"
 }else {
    chk =  "Better Luck For Next Time "
}



document.querySelector("#no11").innerHTML =   nam +" " + chk   + " <br> Thanks For your Time";
}


// else if (num = --num2){
//     chk = "Close Enough"
// }