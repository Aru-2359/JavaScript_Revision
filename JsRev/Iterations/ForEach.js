const coding = ["js", "c++", "java", "ruby", "python"]

coding.forEach((element) => {
    console.log(element);
})

function printMe(element){
    console.log(element);
}
coding.forEach(printMe)

coding.forEach((element, index, arr) => {
    console.log(element, index, arr);
})

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "java",
        languageFileName : "java"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
})

//for each loop does not return anything