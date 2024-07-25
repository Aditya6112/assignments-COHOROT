// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

/*
The expression /\s+/g is a regular expression (regex) used in JavaScript for matching patterns in strings. Here's a breakdown of its components:

/ ... /: The slashes denote the start and end of the regular expression.
\s: This matches any whitespace character. Whitespace characters include spaces, tabs, and newline characters.
+: This quantifier means "one or more" of the preceding element. So, \s+ matches one or more whitespace characters.
g: This is a flag that stands for "global". It means that the regex should be applied to the entire string, not just the first occurrence.

*/
const fs = require("fs")
fs.readFile("file.txt", 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    const cleanedData = data.replace(/\s+/g, ' ').trim();
    fs.writeFile("file.txt", cleanedData, 'utf-8', (err) => {
        if (err) {
            console.error('Error writing file: ', err);
            return;
        }
    })
    console.log('File cleaned successfully.');
    return;
})

