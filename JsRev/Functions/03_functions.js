const product = {
    productname : "Lux Body Soap",
    price : 199,
    isAvailable : true,
    welcomeMsg : function(){
        console.log(`${this.productname} is the best body soap in the world!`);
        console.log(this);
    }
}

// product.welcomeMsg()
// product.productname = "Dove Body Soap"
// product.welcomeMsg()

// function chai(){
//     //console.log(this);
//     let username = "aruuuuuu"
//     console.log(this.username); //output: undefined cuz this ta object e kaaj kore, not for functions
//     console.log(username);
// }
// chai()

// const chai = function(){
//     let username = "aruuuuuu"
//     console.log(this.username); //output: undefined cuz this ta object e kaaj kore, not for functions
// }
// chai()

const chai = () =>{
    let username = "aruuuuuu"
    console.log(username); //output: undefined cuz this ta object e kaaj kore, not for functions
}
chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }
const addtwo = (num1, num2) => num1 + num2
console.log(addtwo(5,6));