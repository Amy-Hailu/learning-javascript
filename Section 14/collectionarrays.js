var guestList = ["Robel","Mimi","Eb","Ruth","Jay","Raeey"];
var guestName = prompt("what is your name ?");

if(guestList.includes(guestName)) {

    alert("hello " + guestName);
}
else {

    alert("sorry " + guestName);
}
