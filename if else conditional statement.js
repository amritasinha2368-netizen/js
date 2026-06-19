// Conditional Statements


// 1 if-else-if condition
// let marks = 32
// if (marks >= 90) {
//     console.log("Grade A")
// } else if (marks >= 60) {
//     console.log("Grade B")
// } else if (marks >= 33) {
//     console.log("Grade C")
// }
// else {
//     console.log("Failed")
// }

// 2 switch case
// let day = 6
// switch (day) {
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     default:
//         console.log("Other Day")
// }


// Looping statements

// 1 for loop
// for(let i=1; i<=10; ++i){
//     console.log(i)
// }

// 2 while loop
// let i=1;
// while(i<=5){
//     console.log(i)
//     ++i
// }

// 3 do-while loop
// let start=1
// do{
//     console.log(start)
//     start++
// }while(start>=8);



// Jumping statemnt break and continue like python


// return
function checkNum(num){
    if(num>0){
        return "Positive"
    }
    return "Eqal to Zero or Negative"
}

const result=checkNum(-7)
console.log(result)