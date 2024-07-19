const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObj) {
    console.log(key);
}
for (const key in myObj) {
    console.log(myObj[key]);
}
for (const key in myObj) {
    console.log(`${key} is the shortcut for ${myObj[key]}`);
}

const programming = ["js", "c++", "java", "ruby"]
for (const key in programming) {
    console.log(key); //index print hoy
}
for (const key in programming) {
    console.log(programming[key]);
}

//Maps are not iterable using for in loop