var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");

var rightbutton = document.getElementById("to right");
var leftbutton = document.getElementById("to left");
var topbutton = document.getElementById("to top");
var bottombutton = document.getElementById("to bottom");

function update() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.innerHTML = body.style.background + ";";
}

rightbutton.addEventListener("click", function() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
	css.innerHTML = body.style.background + ";";
});

leftbutton.addEventListener("click", function() {
	body.style.background = "linear-gradient(to left, " + color1.value + ", " + color2.value + ")"
	css.innerHTML = body.style.background + ";";
});

topbutton.addEventListener("click", function() {
	body.style.background = "linear-gradient(to top, " + color1.value + ", " + color2.value + ")"
	css.innerHTML = body.style.background + ";";
});

bottombutton.addEventListener("click", function() {
	body.style.background = "linear-gradient(to bottom, " + color1.value + ", " + color2.value + ")"
	css.innerHTML = body.style.background + ";";
});

color1.addEventListener("input", update);
color2.addEventListener("input", update);
