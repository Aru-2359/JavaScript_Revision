//Object Literal

const mySym = Symbol("key1")

const JsUser = {
    name : "Arunetri",
    "full_name" : "Arunetri Dhar", //can write the key as string too
    [mySym] : "myKey1", //symbol should always be inside square brackets
    age : 21,
    location : "Kolkata",
    email : "arunetridhar421@gmail.com",
    isLoggedIn : true,
    lastLoggedInDays : ["Monday", "Wednesday", "Saturday"]
}

console.log(JsUser.email); //one way to access elements
console.log(JsUser["email"]); //another way to access elements
console.log(JsUser["full_name"]);
console.log(JsUser[mySym])

console.log(JsUser);
JsUser.email= "arunetridhar421@outlook.com"
console.log(JsUser);

// Object.freeze(JsUser)
// JsUser.email = "arunetridhar421@yahoo.com"
// console.log(JsUser);

JsUser["greetings"] = function(){
    console.log(`Hello, ${this.name}!`);
}

console.log(JsUser.greetings());

console.log(JsUser);