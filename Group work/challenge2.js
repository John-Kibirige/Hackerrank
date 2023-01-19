// In this exercise we focus on the javascript string repeat method 

const chorus = "Because I'm happy. ";

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(3.5)}`);
console.log('-----------------------------------------------------');
// console.log(`Chorus lyrics for "Happy": ${chorus.repeat(4000000000)}`); // invalid string length
console.log('-----------------------------------------------------');
console.log(`Chorus lyrics for "Happy": ${chorus.repeat(0)}`);
console.log('-----------------------------------------------------');
// console.log(`Chorus lyrics for "Happy": ${chorus.repeat(-1)}`); // invalid count value
console.log('-----------------------------------------------------');
console.log(`Chorus lyrics for "Happy": ${chorus.repeat(3.9)}`);
console.log('-----------------------------------------------------');
// console.log(`Chorus lyrics for "Happy": ${chorus.repeat(1 / 0)}`);
