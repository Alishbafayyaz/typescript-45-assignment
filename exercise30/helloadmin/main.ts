let person : string[]=['Alina','Saba','Fatimah','Sana','Admin'];

// Question 30: Hello Admin: Greet users differently, especially 'admin'.


for ( let i = 0 ; i<person.length ; i++){
    if(person[i] === 'Admin'){
        console.log('Hello Admin, would you like to see a status report?')
    }
    else{
        console.log(`Hello ${person[i]}, Thank you for logging in again`)
    }
}