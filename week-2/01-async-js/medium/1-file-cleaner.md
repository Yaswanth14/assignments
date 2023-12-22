## File cleaner

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

fs = require('fs');

function readAndWriteData(source, destination)
{
fs.readFile(source, 'utf-8', function(err, data)
{
if(err)
{
console.log(err);
return;
}
data = data.replace(/\s+/g, ' ');
fs.writeFile(destination, data, function(err){
if(err) console.log(err);
else console.log("Updated the file with data");
})
})
}
readAndWriteData('a.txt', 'a.txt');
