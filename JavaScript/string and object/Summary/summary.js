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
    arr.push(x);
}

// // Find duplicate value and remove 

// let nonDuplicate=[...new Set(arr)];

// console.log(nonDuplicate.length);

// const max = Math.max(...arr);
// const min =Math.min(...arr);
// console.log(`${max}  and min value ${min}`);


// Js Date and time 

// const today = new Date();
// console.log(today.toLocaleDateString('en'));

// let a = 10;
// let b= 20;
// [a,b]=[b,a];
// console.log( `${a}   ${b}`);

// const mx=Math.min(...arr);
// console.log(mx);


// const product =[
//     {name:'sampo',price:500,quantity:4},
//     {name:'chruni',price:100,quantity:3},
//     {name:'shart',price:900,quantity:5},
//     {name:'Pant',price:1200,quantity:2},
//     {name:'dskf',price:2200,quantity:7}
// ];
// let sum =0;
// for(let x of product){
//     sum+=(x.price*x.quantity);
// }
// console.log(sum);

function add(num1,num2){

    return num1 + num2;
}
function substruct(num1,num2){
    return num1-num2;
}
function multlipy(num1,num2){
    return num1*num2;
}
function division (num1,num2){
    return  num1/num2;
}
function calculator(a,b,operation){
    
    if(operation==='add'){
       return add(a,b);
    }else if(operation==='sub'){
            return substruct(a,b);
    }else if(operation=='mul'){
        return multlipy(a,b);
    }else{
        return division(a,b);
    }
}

const calculateValue =calculator(5,20,'mul');
console.log(calculateValue);
