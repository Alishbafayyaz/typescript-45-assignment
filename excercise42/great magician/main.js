"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magician = ['Blain', 'Criss Angel', 'Harry'];
function Magician_show(magician) {
    magician.forEach(magician => {
        console.log(magician);
    });
}
;
function Great_Magician(magician) {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = 'The Great ' + magician[i];
    }
}
Magician_show(magician);
Great_Magician(magician);
Magician_show(magician);
