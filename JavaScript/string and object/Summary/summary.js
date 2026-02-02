// inch to fit
// 12 inch 1 feet
// function inchToFeet(value){
//         let feet = value/12;
//         let valu1 =Math.trunc(feet);
//         let inch =(value%12);
//         console.log(`Feet value is : ${valu1} and inch value is : ${inch}`);

// }
// inchToFeet(150);

// LeapYear condition 
// divisible by 4
// divisileb bye 100 and 400

// function leapYear(Year)
// {
//     if( (Year%400==0 && Year%100==0) || (Year%4==0 && Year%100!=0 ) )return true;
//     else return false;
// }
//  let leapyearCheck=leapYear(2000);
//  console.log(leapyearCheck);


// 'avarge of odd number '

let arr = [];
for(let i=0;i<50;i++){
    let x = Math.floor(Math.random()*94)+5;
    if(x%2==1)
    arr.push(x);
}
let sum = 0 ;
console.log(arr);
for(let x of arr){
    sum+=parseInt(x);
}
console.log(sum);


// Find duplicate value and remove 
