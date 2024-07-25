// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// fs.write(fd, string, position, encoding, callback)

const fs=require("fs"); 
   
const str = "Hello world "; 
const filename = "empty.txt"; 
   
fs.open(filename, "a", (err, fd)=>{ 
    if(err){ 
        console.log(err.message); 
    }else{ 
        fs.write(fd, str, (err, bytes)=>{ 
            if(err){ 
                console.log(err.message); 
            }else{ 
                console.log(bytes +' bytes written'); 
            } 
        })         
    } 
})

