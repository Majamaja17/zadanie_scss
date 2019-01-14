// nav
document.getElementById('myTopnav').addEventListener('click', respNav);

function respNav() {

    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
S