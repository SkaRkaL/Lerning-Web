
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