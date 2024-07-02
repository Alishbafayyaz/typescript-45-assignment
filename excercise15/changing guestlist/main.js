let guestname = ["Tehmina", "Alishba", "Warisha"];
let message = "I would like to invite you for dinner.";
for (let i = 0; i < guestname.length; i++) {
    console.log(`\nDear ${guestname[i]}, \n${message} \n\n"Thankyou"`);
}
;
let not_come = "Warisha";
let new_guest = "zain";
guestname[2] = new_guest;
for (let i = 0; i < guestname.length; i++) {
    console.log(`\nDear ${guestname[i]}, \n${message} \n\n"Thankyou"`);
}
;
console.log(`\nDear ${not_come} will not comming.`);
export {};
