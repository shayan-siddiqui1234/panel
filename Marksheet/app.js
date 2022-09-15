function marksheet(){
let nam = document.querySelector("#fname").value
let fanam = document.querySelector("#fatname").value
let roll = document.querySelector("#roll").value
document.querySelector("#h1").innerHTML = "Name :  " + nam
document.querySelector("#h2").innerHTML = "Father Name : " + fanam
document.querySelector("#h3").innerHTML = "Roll Number : " + roll
 

let s1 = +document.querySelector("#s1").value
let s2 = +document.querySelector("#s2").value
let s3 = +document.querySelector("#s3").value
let s4= +document.querySelector("#s4").value
let s5 = +document.querySelector("#s5").value
let s6 = +document.querySelector("#s6").value

let add = s1+s2+s3+s4+s5+s6

let per = (add/550) * 100

let perc = Math.round(per)

document.querySelector("#add").innerHTML = "Your Obtained Marks : " + add
document.querySelector("#perc").innerHTML = "Your Percentage is : "+ perc+"% :"
let grade = " ";
if(perc == 100) {
    grade = "Your Grade is A+ & Extra Ordinary Student ";
} else if(perc >= 90) {
    grade = "Your Grade is A+ & Excellent  ";
} else if(perc >= 80) {
    grade = "Your Grade is Aone & Keep it Up ";
} else if(perc >= 70) {
    grade = "Your Grade is A & Good  ";
} else if(perc >= 60) {
    grade = "Your Grade is B & Satisfied ";
} else if(perc >= 50) {
    grade = "Your Grade is C & Below Average ";
} else if(perc >= 40) {
    grade = "Your Grade is D & Need More Improvement";
} else if(perc <= 40) {
    grade = "Your Grade is  Failed &  Working very Hard  ";
} else {
    grade = "You  are not the part of  this school"
}
document.querySelector("#grade").innerHTML ="Grade & Remarks : " +  grade 







































}
