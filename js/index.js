// INDEX JS

// GET WINDOW HEIGHT AND WIDTH
var width = window.innerWidth;
var height = window.innerHeight;

// GET ID SHORTCUTS
var warnButton = document.getElementsByClassName("warnButton");
var warnText = document.getElementById("warnText");
var medWarning = document.getElementById("medWarning");
var tabeDude = document.getElementById("tabeDude");
var logoTabeDude = document.getElementById("logoTabeDude");
var logo = document.getElementById("logo");
var goBack = document.getElementById("goback");


// SHORTCUT FUNCIOTN FOR GRABBING ID AND SETTING BACKGROUND AND DISPLAY VALUES
function set(idee, background, display, bs, br, bp) {
	var setIdee = document.getElementById(idee);
	setIdee.style.background = background;
	setIdee.style.display = display;
	setIdee.style.backgroundSize = bs;
	setIdee.style.backgroundRepeat = br;
	setIdee.style.backgroundPosition = bp;
};

set("tabeDude", "url('img/icons&art/tabeDude2.png')", "block", "contain", "no-repeat");


// WARNING SCREEN -- ONLOAD CALL IN THE BODY TAG OF INDEX.HTML 
// function warning() {
	// // SET BACKGROUND AND DISPLAY FOR WARNING SCREEN
	// set("warning", "-webkit-linear-gradient(rgba(50,50,50,0.9), rgba(255,255,255,0.5), rgba(50,50,50,0.9))");
	// set("warning", "linear-gradient(rgba(50,50,50,0.9), rgba(255,255,255,0.5), rgba(50,50,50,0.9))");
	// set("background2", "-webkit-linear-gradient(to right, rgba(50,50,50,0.9), rgba(255,255,255,0.9), rgba(50,50,50,0.9))");
	// set("background2", "linear-gradient(to right, rgba(50,50,50,0.9), rgba(255,255,255,0.9), rgba(50,50,50,0.9))");
	// set("medWarning", "-webkit-linear-gradient(to right, rgba(225,100,50,0.9), rgba(225,100,50,0.9), rgba(225,100,50,0.9))", "block");
	// set("medWarning", "linear-gradient(to right, rgba(225,100,50,0.9), rgba(225,100,50,0.9), rgba(225,100,50,0.9))", "block");
	// 
	
	// // BRING WARNING SCREEN BACKGROUND DIV TO FRONT AND CENTER IN WINDOW
	// document.getElementById("warning").style.zIndex = "999999";
	// document.getElementById("warning").style.position = "fixed";
	// document.getElementById("background2").style.zIndex = "99999";
	
	// // ADD DEPTH TO TABE DUDE
	// tabeDude.style.webkitFilter = "drop-shadow(10px 10px 7.5px rgba(0,50,0,0.7))";
	// tabeDude.style.filter = "drop-shadow(10px 10px 7.5px rgba(0,50,0,0.7))";
	
	// // QUALIFYING QUESTION
	// warnText.innerHTML = "Greetings!<br><br>Are you an OMM patient or at least 21 years of age?";
	
	// // SHOW BUTTONS
	// for(i = 0; i < warnButton.length; i++) {
		// warnButton[i].style.display = "inline-block";
		// warnButton[i].style.webkitFilter = "drop-shadow(5px 5px 5px rgba(0,50,0,0.7))";
		// warnButton[i].style.filter = "drop-shadow(5px 5px 5px rgba(0,50,0,0.7))";
	// }
	
	// // HIDE GO BACK BUTTON
	// goback.style.display = "none";
// };

// warning();


// // NO BUTTON
// function warnNo() {
	// // APOLOGY TEXT
	// warnText.innerHTML = "So sorry, but you must be an OMM patient or at least 21 years of age to enter.<br><br>Hope you have a wonderful day!";
	
	// // MAKE TABE DUDE SAD
	// set("tabeDude", "url('img/tabeDudeSad.png')");
	
	// // HIDE BUTTONS
	// for(i = 0; i < warnButton.length; i++) {
		// warnButton[i].style.display = "none";
	// }
	
	// // SHOW GO BACK BUTTON
	// goback.style.display = "inline-block";
// };
