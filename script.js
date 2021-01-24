const gradient = document.getElementById("gradient");

function change()
{
    let color1 = document.getElementById("color1")
    let color2 = document.getElementById("color2")
    gradient.style.backgroundImage = `linear-gradient(${color1.value},${color2.value})`;
}

setInterval(change, 200);

change();

