// // document
// //   .getElementById("btn-update-title")
// //   .addEventListener(
// //     "click",
// //     () =>
// //       (document.getElementById("Event-title").innerText = "New Event added"),
// //   );
// // document.getElementById("login").addEventListener("click", () => {
// //   document.getElementById("user").innerText = "New user Added";
// });
const form = document.querySelector("form");
document.getElementById("btn-post-cmt").addEventListener("click", (event) => {
    console.log('Hi im here');
     const commentWrite = document.getElementById("text-area");
     const comentBox = document.getElementById("commnet-sction");
     console.log(commentWrite.value);
     const newComment= document.createElement('p');
     newComment.className="Comment";
     newComment.innerText=commentWrite.value;
     comentBox.appendChild(newComment);
     form.reset();
     form.reset();
     
});