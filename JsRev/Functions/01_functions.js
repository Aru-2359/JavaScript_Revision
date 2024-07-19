function greetings(){
    console.log("Hello!!");
}

greetings()

function addTwoNums(num1, num2){
    return num1 + num2;
}

const res = addTwoNums(3,6)
console.log("Result :" , res);
// addTwoNums(3,"6") //output : 36

function loginUserMessage(username){
    // if(username == undefined){
    //     console.log("Please enter the username!");
    //     return
    // }
    if(!username){
        console.log("Please enter the username!");
        return
    }
    return `${username} just logged in!`
}

// console.log(loginUserMessage("Arunetri")) //output : Arunetri just logged in!
// console.log(loginUserMessage("")) //output :  just logged in!
console.log(loginUserMessage()) //output : undefined just logged in!

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(100));
console.log(calculateCartPrice(400, 700, 300));

const product = {
    productname : "Body Soap",
    price : 199
}

function handleObject(anyobject){
    console.log(`Product is ${anyobject.productname} and price is ${anyobject.price}`);
}

// handleObject(product)
handleObject({
    productname : "Lotion",
    price : 499
})

const myArr = [200, 400, 600, 900]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArr));
console.log(returnSecondValue([700, 500, 600, 100]));