let guestname : string [] = ["Tehmina", "Alishba", "Warisha"];
let message : string = "I would like to invite you for dinner.";
guestname.unshift("rida", "bushra", "zohan");
console.log (`unfortunately we cann't invite more than 2 person`)
while(guestname.length>2){
    let remove_guest = guestname.pop();
    console.log(`sorry ${remove_guest} you are not invite`);
}
for (let i=0; i<guestname.length; i++){
    console.log(`\nDear ${guestname[i]}, \n${message} \n\n"Thankyou"`)};