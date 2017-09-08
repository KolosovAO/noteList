const fs = require('fs');
const notes = ['c', 'd', 'e', 'f', 'g', 'a', 'h'];

let jsonFile = [];

genRandomNote = () => notes[Math.floor(Math.random()*7)]

generate = (count) => new Array(count).map(i=>genRandomNote())

console.log(generate(20));
// 1/2 1/4 1/8 1/16
