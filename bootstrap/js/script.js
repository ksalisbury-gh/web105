// Last modified date of page

const date = new Date(document.lastModified);
document.getElementById("lastMod").innerHTML = 'This page was last updated on <span style="font-weight: bold;">' + date + '</span>.';

// Birthday years (So I don't have to do it manually)

var dob = '20040915';
var year = Number(dob.substr(0, 4));
var month = Number(dob.substr(4, 2)) - 1;
var day = Number(dob.substr(6, 2));
var today = new Date();
var age = today.getFullYear() - year;
if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  age--;
}
document.getElementById("bday").innerHTML = 'Hi, my name is Keegan S., I\'m <strong>' + age + '</strong> years old and I live within the northwestern suburbs of Chicagoland.';