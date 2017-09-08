const fs = require('fs');
const notes = ['c', 'd', 'e', 'f', 'g', 'a', 'h'];
const tones = [1, 2, 4, 8, 16, 32];

let jsonFile = [];

genRandomTone = () => tones[Math.floor(Math.random()*6)]
genRandomNote = () => notes[Math.floor(Math.random()*7)]
genRandomSize = () => Math.floor(Math.random()*200)+1;
generatedJSON = [];
for (let i=0; i<=genRandomSize(); i++){
    generatedJSON.push({note:genRandomNote(), tone:genRandomTone()})
}
fs.writeFileSync('data2.json', JSON.stringify(generatedJSON));

// 1/2 1/4 1/8 1/16
