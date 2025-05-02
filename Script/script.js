window.onload = function () {
    document.getElementById("image").style.animation = "fadeUp 2s ease-in-out forwards";
};
const talkbtn = document.getElementById("let'sTalk");

talkbtn.addEventListener("click", (event) =>  {
    event.preventDefault();
   window.open("let'sTalk.html", "_blank")
});



