function makeYellow()
{
   const currentColor = window.getComputedStyle(document.body).backgroundColor;
       document.body.style.backgroundColor =
        (currentColor === "rgb(255, 255, 0)") ? "white" : "yellow";
}
function makeRed(){
   document.body.style.backgroundColor='red';

}
const blue = document.getElementById('make-blue');
blue.onclick= ()=>document.body.style.backgroundColor='blue';

document.getElementById('purple').addEventListener('click',()=>
     document.body.style.backgroundColor='purple'
  )
function makePurple()
{
   document.onclick()
}
document.getElementById('green').addEventListener('click',()=>document.body.style.backgroundColor='green')