Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

- HH:MM::SS (Eg. 13:45:23)

- HH:MM::SS AM/PM (Eg 01:45:23 PM)

const date = new Date();
let hh = date.getHours();
let mm = date.getMinutes();
let ss = date.getSeconds();

function addZeroIfNecessary(value)
{
value = value + ' ';
if (value.length === 2)
{
value = '0'+value;
value = value.substr(0,2);
}
return value;
}

// console.log(addZeroIfNecessary(1));

function clock()
{
ss++;
if(ss === 60)
{
ss = 0;
mm++;
}
if(mm === 60)
{
mm = 0;
hh++;
}
if(hh == 24)
{
hh = 0;
}
let timeStr = `${addZeroIfNecessary(hh)}:${addZeroIfNecessary(mm)}:${addZeroIfNecessary(ss)}`;
console.log('Time = ' + timeStr);
}

setInterval(clock, 1000);
