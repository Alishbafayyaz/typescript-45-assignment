let guestname = ["Tehmina", "Alishba", "Warisha"];
let message = "I would like to invite you for dinner.";
// for (let i=0; i<guestname.length; i++){
// console.log(`\nDear ${guestname[i]}, \n${message} \n\n"Thankyou"`)};
let new_guest = "zain";
// guestname [2] = new_guest;
// for (let i=0; i<guestname.length; i++){
//     console.log(`\nDear ${guestname[i]}, \n${message} \n\n"Thankyou"`)};
guestname.unshift("rida", "bushra", "zohan");
for (let i = 0; i < guestname.length; i++) {
    console.log(`\nDear ${guestname[i]}, \n${message} \n\n"Thankyou"`);
}
;
export {};
