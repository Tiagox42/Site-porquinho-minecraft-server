new PlayerCounter({
    element: element,
    ip: '51.81.11.167:25586',
    format: '{online}/{max}', // default {online}
    refreshRate: 60 * 1000 // default 1m
});

function status(){
    if ({online} = 'offline') {
        document.getElementById("i1").style.color = "red";
        document.getElementById("i2").innerHTML = "&#128531";
    }
}
