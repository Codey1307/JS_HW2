let name = prompt("Введіть своє ім'я");
let age = prompt("Введіть свій вік");
let ageVer;

while(name === "" || name === null || !isNaN(name)){
  name = prompt("Введіть своє ім'я", name);
}
while(age === "" || age === null || isNaN(age)){
  age = prompt("Введіть свій вік", age);
}

if (age < 18) {
  alert("You are not allowed to visit this website");
} else if (age <= 22) {
  ageVer = confirm("Are you sure you want to continue?");
} else{
  alert(`Welcome, ${name}`);
}

if (ageVer === true) {
  alert(`Welcome, ${name}`);
} else if (ageVer === false) {
  alert("You are not allowed to visit this website");
}






