// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


// fs.readFile( filename, encoding, callback_function )//method

//fs ia a async method so it will keep working and tell the code that go forward and execute the code while I am reading the file.
const fs=require("fs")
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data)
})

let a=0;
for(let i=0;i<10000000000000000000;i++){
    a++;
}
console.log("After read File and the expensive operation")