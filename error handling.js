//try {
   // console.log(x); // x is not defined
//} catch (error) {
    //console.log("Something went wrong!");
//}



try {
    let num = 10;
    console.log(num.toUpperCase()); // Error
} catch (error) {
    console.log("Error:", error.message);
}