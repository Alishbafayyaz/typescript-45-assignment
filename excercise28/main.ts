// Stages of Life: Write an if-else chain that determines a person’s stage of life.


// • If the person is less than 2 years old, print a message that the person is a baby.


import inquirer from "inquirer";
const year = await inquirer.prompt([
    { message: "Enter your age", type: "number", name: "stage of life"}]);
//Set a value for the variable age, and then:
//  let year : number = 35;

if (year<2){
    console.log("the person is a baby.");
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if(year>=2 && year<4){
    console.log("the person is a toddler.");
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if(year>=4 && year<13){
    console.log("the person is a kid.");
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if(year>=13 && year<20){
    console.log("the person is a teenager.");
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if(year>=20 && year<65){
    console.log("the person is an adult.");
}
// • If the person is age 65 or older, print a message that the person is an elder.

else{
    console.log("the person is an elder.");
}