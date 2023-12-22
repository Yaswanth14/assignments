## Write to a file

Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

fs = require('fs');

let data = "Hey this is test 2";

fs.writeFile('b.txt', data, function(err){
if(err) console.log(err);
else console.log("Updated the file with data");
})

function readAndWriteData(source, destination)
{
fs.readFile(source, 'utf-8', function(err, data)
{
if(err)
{
console.log(err);
return;
}
fs.writeFile(destination, data, function(err){
if(err) console.log(err);
else console.log("Updated the file with data");
})
})
}
readAndWriteData('a.txt', 'b.txt');
console.log(typeof readFile);
