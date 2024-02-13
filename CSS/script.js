
var animateButton = function (e) {

	e.preventDefault;
	e.target.classList.remove('animate');
	e.target.classList.add('animate');
	setTimeout(function () {
	e.target.classList.remove('animate');
	}, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
	bubblyButtons[i].addEventListener('click', animateButton, false);
}

// JavaScript to simulate the typing animation
const strings = [
	"SaKarKal",
	"Sma9ma9",
	"And i am a ",
	"Frontend Developer",
	"Software Engineer",
];
const textElement = document.querySelector('.text-accent');
let stringIndex = 0;
let charIndex = 0;

function type() {
	if (charIndex < strings[stringIndex].length) {
		textElement.textContent += strings[stringIndex].charAt(charIndex);
		charIndex++;
		setTimeout(type, 50);
	} else {
		setTimeout(erase, 2000);
	}
}

function erase() {
	if (charIndex > 0) {
		textElement.textContent = strings[stringIndex].substring(0, charIndex - 1);
		charIndex--;
		setTimeout(erase, 50);
	} else {
		stringIndex = (stringIndex + 1) % strings.length;
		setTimeout(type, 1000);
	}
}

type(); // Start the typing animation