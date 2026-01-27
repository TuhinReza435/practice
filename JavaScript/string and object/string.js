const country='Bangladesh';
country[0]='x';
console.log(country);

//video 2

const varsitys ='Islamic university';
console.log(varsitys);

const subject="computer science and Engineering ";
let x=subject;
console.log(x.toUpperCase());


const drink = 'Water';
const lik = ' Water ';
if(drink.trim()===lik.trim()){
    console.log('This is same');
}else{
    console.log("They are not same");
}


//video 3 -> substring / string slice
const address ='123456789';
const temp=['asdf','asdfa','asdfasdf','asdfasdf'];
const part =address.slice(1,3);
const splite=address.split('4');
console.log(typeof splite);
console.log(address.includes('21'));
const reverse=address.split('').reverse().join('');
console.log(reverse);


//Video Four=>object related
const bottle={
    brand:'apple',
    price:45,
    color:'white',
    isClean:true
};

const subjectx={
    name:'Math',
    teacher:'Tuhin Reza',
    examDate:'Note Known',
    chapter:['First','Second','Third','Forth'],
    exam:{
        name:'Finnal exam',
        totalMark :100

    }
}
subject.name='Engish';
for(let x in subjectx){
    console.log(subjectx[x]);
}

//Number of key in a object

const computer ={
    name:'samsung',
    price:'20k',
    processor:'intel',
    hdd:'256GB'
}
const keys=Object.values(computer);
console.log(keys);

const varsity={
    name:'iu',
    department:['cse','ict','eee'],
    events:['Science fair','ekusay february','bijoyda'],
    unique:{
        color:'blue',
        result:{
            gpa:5,
            merit:'top'
        }
    }
}
console.log(varsity.unique.result.gpa)

const mobile={
    brand:'Honor',
    price:42000,
    color:'green',
    camera:'200mp'
}

for(let x in mobile){
    console.log(`${x} ${mobile[x]}`)
}


// Task 1
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors["golden rod"]);


//Task 2

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car['passenger capacit']=5;
console.log(car);

//Task 3
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

const mark =student.physics;
for(let x in mark){
    console.log(mark[x]);
}

//Task 4

let students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const sz = Object.keys(students).length;
console.log(sz);

const ojbectName={
    name: 'John Doe',
    age: 25,
    city: 'Example City',
   isStudent: true
}

for(let x in ojbectName){
    console.log(`Key : ${x} | type : ${typeof ojbectName[x]}`);
}