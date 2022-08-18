/* function changeText() {
    let userInput = document.getElementById("userInput").value;
    document.getElementById("test2").innerHTML = userInput;
  } */
document.getElementById("info").innerHTML = "<h1>Hello World</h1>";
document.getElementById("test").innerHTML = "<h1>Hello h1<h1>";
document.getElementById("h2").innerHTML = "<h2>How Are You?</h2>";
document.getElementById("container").innerHTML = "<p>start of the element</p>";
function init() {
		var datum = new Date();
		document.getElementById('zeit').innerHTML = datum;
	}
document.addEventListener("DOMContentLoaded", function () {
		init();
	});
document.write("<br>end of the element");
