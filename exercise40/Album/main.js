//Exercise 40
function Music_album(Artistname, Albumtitle, trackno) {
    return `${Artistname}, ${Albumtitle} ,${trackno}`;
}
let album1 = Music_album('Atif aslam', 'Rang e Bahar', 10);
let album2 = Music_album('Chahat Fateh Ali', 'Bado Badi', 15);
let album3 = Music_album('Aima Baig ', 'Afreen ', 14);
console.log(album1);
console.log(album2);
console.log(album3);
export {};
