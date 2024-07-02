"use strict";
let magicians = ['Blain', 'Harry', 'Criss Angel'];
// Function jo magicians ki list dikhata hai
function show_magicians(magicians) {
    magicians.forEach(magic => {
        console.log(magic);
    });
}
// Function jo magicians ko "Great" banata hai
function make_great(magicians) {
    let greatMagicians = [];
    magicians.forEach(magic => {
        greatMagicians.push(`${magic} the Great`);
    });
    return greatMagicians;
}
// Nayi "great" list banane aur dikhane ka code
let greatMagicians = make_great(magicians); // Original list ko modify karke nayi list banate hain
show_magicians(greatMagicians); // Nayi list ko print karte hain
