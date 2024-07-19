const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc+curr, 0) //output: 6
//const myTotal = myNums.reduce((acc, curr) => acc+curr, 3) //output: 9
console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "web dev course",
        price : 4999
    },
    {
        itemName : "java course",
        price : 1999
    },
    {
        itemName : "python course",
        price : 3999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);