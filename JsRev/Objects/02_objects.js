//Singleton Object

// const tinderUser = new Object()
// console.log(tinderUser); //output : {}

//Non-singleton Object

const tinderUser = {}
console.log(tinderUser); //output : {}

tinderUser.id = "123abc"
tinderUser.name = "Percy"
tinderUser.isLoggedIn = false;
console.log(tinderUser);


const regularUser = {
    email : "something@gmail.com",
    fullname : {
        userFullName : {
            firstname: "Arunetri",
            lastname : "Dhar"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userFullName);
console.log(regularUser.fullname.userFullName.firstname);


const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj5 = {5 : "e", 6 : "f"}

const obj3 = {obj1, obj2}
console.log(obj3);
//const obj4 = Object.assign({}, obj1, obj2) //{} is the optional parameter, but it is a good practice
// const obj4 = Object.assign({}, obj1, obj2, obj5)
const obj4 = {...obj1, ...obj2, ...obj5}
console.log(obj4);

const users = [
    {
        id : 1,
        name : "aaa"
    },
    {
        id : 2,
        name : "bbb"
    },
    {
        id : 3,
        name : "ccc"
    },
    {
        id : 4,
        name : "ddd"
    },
    {
        id : 5,
        name : "eee"
    }
]

console.log(users[2].name);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')) //true
console.log(tinderUser.hasOwnProperty('ph_no')) //false

const course = {
    courseName: "JavaScript Revision",
    price: "999",
    courseInstructor: "Hitesh"
}

//object destructuring
const { courseInstructor : instructor } = course;
console.log(instructor);