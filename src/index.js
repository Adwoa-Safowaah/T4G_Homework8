function checkGender() {
let gender = prompt("What is your gender? (Male or Female)");

if (gender.toLowerCase() === "female") {
    alert("You are a girl! 👩");
}
else if (gender.toLowerCase() === "male") {
    alert("You are a boy! 👨");
}
else {
    alert("Invalid input. Please enter `Male` or `Female`.");
}

}