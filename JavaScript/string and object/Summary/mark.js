let subject = {
    math:78,
    english:65,
    physics:88,
    bangla:55
}
let andother = Object.values(subject);
let mx = Math.max(...andother);
let mn =Math.min(...andother)
console.log(mn);
console.log(mx);
console.log( andother);