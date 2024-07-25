// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript.
//  There is a hint at the bottom of the file if you get stuck.
// (Hint: setTimeout)

let a = 0
function counter() {
    a += 1
    console.log(a)
    setTimeout(counter,1000)
}
counter()
  
