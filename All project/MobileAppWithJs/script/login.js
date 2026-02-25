 document.getElementById("login-btn").addEventListener('click',(event)=>{
    event.preventDefault();
    console.log('login btn click')
    const inputnumber = document.getElementById("input-number").value;
    const password = document.getElementById("password").value;
   inputnumber === "01735245738" && password === "2648"
     ? (alert("Login success"),
       window.location.assign("./Html/home.html"))
     : alert("Login Failed");
 });