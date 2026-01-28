/*
   Looping 
   1.for loop
   2.while loop
   3.for of-->array loop korar junno
   4.for in --> object loop korar junno
*/
const friends =['elon','bill','mark','waren'];
for(let friend of friends)console.log(friend);

const number =[1,2,3,6,5,4,3,23,2,1];
console.log(number.sort(function(a,b){return b-a}));// js sorting 