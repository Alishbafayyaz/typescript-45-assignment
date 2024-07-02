"use strict";
// Question 32: Checking Usernames: Ensure uniqueness in usernames.
let currentUsers = ['ahmed', 'zubair', 'ubaid', 'zain', 'zohan'];
let newUsers = ['shoaib', 'fayyaz', 'abid', 'zain', 'ahmed'];
newUsers.forEach((newUsers) => {
    if (currentUsers.some((currentUsers) => currentUsers.toLowerCase() === newUsers.toLowerCase())) {
        console.log(`${newUsers} will need to enter a new username`);
    }
    else {
        console.log(`${newUsers} is available`);
    }
});
