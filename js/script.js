document.addEventListener("DOMContentLoaded", function(event) {
    status1();
});

function status1(){
    setTimeout(function(){
    var stastusInfo = document.getElementById("i1").innerHTML;

    if (stastusInfo == 'offline') {
        document.getElementById("i1").style.color = "red";
        document.getElementById("i2").innerHTML = "&#128531";
        console.log(stastusInfo)
    }
    }, 100)}