let close = document.getElementById("close");
close.addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("pop2").style.visibility = "visible";
    document.getElementById("popup").style.visibility = "hidden";
}
let close2 = document.getElementById("pop2");
close2.addEventListener("click", function(){
    document.getElementById("pop2").style.visibility = "hidden";
});




