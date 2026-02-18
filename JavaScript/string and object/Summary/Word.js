let sentence="I love jsans i love coding ans js is fun";
sentence=sentence.toLowerCase();
let newObject={};
function wordCounter(sentence){
     
    let word =sentence.split(" ");
    for(let x of word){
        if(newObject[x])newObject[x]++;
        else newObject[x]=1;
    }
    console.log(Object.keys(newObject).length);
    console.log(word.length);
    console.log(newObject);
}
wordCounter(sentence);