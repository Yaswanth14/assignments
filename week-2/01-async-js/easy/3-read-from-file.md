## Reading the contents of a file

Write code to read contents of a file and print it to the console.
You can use the fs library to as a black box, the goal is to understand async tasks.
Try to do an expensive operation below the file read and see how it affects the output.
Make the expensive operation more and more expensive and see how it affects the output.

fs = require('fs');

console.log("before file read function")

const fileContent = fs.readFile("a.txt", "utf-8", function(err, data)
{
if(err) console.log(err);
console.log("File Content = " + data);
})

console.log("After file read funtion")

function timeLag(n)
{
const beforeExe = new Date();

    let val = 0;
    for(let i=0; i<n; i++) val++;

    const afterExe = new Date();

    return afterExe-beforeExe;

}

const timeBurnt = timeLag(1000000000);
console.log(`The execution took ${timeBurnt/1000} seconds`);

console.log("After file read and time lag functions call");
