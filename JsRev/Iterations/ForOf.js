const arr = [1, 2, 3, 4, 5]
for(const num of arr){
    console.log(num);
}

const greetings = "Hello user!"
for (const greet of greetings) {
    console.log(`Each character of greetings is ${greet}`);
}

const map = new Map()
map.set(1, 'a')
map.set(2, 'b')
map.set(3, 'c')
console.log(map);

for (const [key, value] of map) {
    console.log(key, ':- ', value);
}
//Objects are not iterable using for of

