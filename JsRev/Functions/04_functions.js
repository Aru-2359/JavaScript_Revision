//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

(function chai(){
    //this is a named iife
    console.log("DB CONNECTED");
})();  //; is IMPORTANT if we want to add another IIFE

( (name) => {
    //this is an unnamed iife
    console.log(`hohohoho ${name}`);
})("aruuu")