// HOME JS

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
var greenDude1 = document.getElementById("greenDude1");
var brownie = document.getElementById("brownie");
var greenDudeEat = document.getElementById("greenDudeEat");
var greenDude2 = document.getElementById("greenDude2");
var clock = document.getElementById("clock");
var sec = document.getElementById("sec");
var greenDude3 = document.getElementById("greenDude3");
var greenDudeSmile = document.getElementById("greenDudeSmile");
var shades = document.getElementById("shades");
var s2weed = document.getElementById("s2_weedImg");

// SHORTCUT FUNCIOTN FOR GRABBING ID AND SETTING BACKGROUND AND DISPLAY VALUES
function set(idee, background, display, bs, br, bp) {
	var setIdee = document.getElementById(idee);
	setIdee.style.background = background;
	setIdee.style.display = display;
	setIdee.style.backgroundSize = bs;
	setIdee.style.backgroundRepeat = br;
	setIdee.style.backgroundPosition = bp;
};

// SET IMAGES AND IMAGE ATTRIBUTES
set("down", "url('img/icons&art/down.png')", "block", "100% 100%", "no-repeat");

if (width < 550) {
	set("greenDude1", "url('img/icons&art/icon3.png')", "block", "50px 50px", "no-repeat");
	set("greenDudeEat", "url('img/icons&art/eat.png')", "block", "100px 100px", "no-repeat");
	set("brownie", "url('img/icons&art/icon2.png')", "block", "50px 50px", "no-repeat");
	set("greenDude2", "url('img/icons&art/icon3.png')", "block", "50px 50px", "no-repeat");
	set("clock", "url('img/icons&art/icon4.png')", "block", "50px 50px", "no-repeat");
	set("sec", "url('img/icons&art/sec.png')", "block", "30px 30px", "no-repeat", "top");
	set("greenDude3", "url('img/icons&art/icon3.png')", "block", "50px 50px", "no-repeat");
	set("greenDudeSmile", "url('img/icons&art/smile.png')", "block", "100px 100px", "no-repeat");
	set("shades", "url('img/icons&art/icon6.png')", "block", "50px 50px", "no-repeat");
} else if (width > 549) {
	set("oregon1", "url('img/oregon8.png')", "block", "contain", "no-repeat", "center");
	set("oregon2", "url('img/oregon2.png')", "block", "contain", "no-repeat", "center");
	set("greenDude1", "url('img/icons&art/icon3.png')", "block", "100px 100px", "no-repeat");
	set("greenDudeEat", "url('img/icons&art/eat.png')", "block", "150px 150px", "no-repeat");
	set("brownie", "url('img/icons&art/icon2.png')", "block", "100px 100px", "no-repeat");
	set("greenDude2", "url('img/icons&art/icon3.png')", "block", "100px 100px", "no-repeat");
	set("clock", "url('img/icons&art/icon4.png')", "block", "100px 100px", "no-repeat");
	set("sec", "url('img/icons&art/sec.png')", "block", "50px 50px", "no-repeat", "top");
	set("greenDude3", "url('img/icons&art/icon3.png')", "block", "100px 100px", "no-repeat");
	set("greenDudeSmile", "url('img/icons&art/smile.png')", "block", "150px 150px", "no-repeat");
	set("shades", "url('img/icons&art/icon6.png')", "block", "100px 100px", "no-repeat");
}

// SET BUD IMG IN SECTION 2
if (width < 550) {
	set("s2_weedImg", "url('img/backgroundImgs/whiteWidowSm.jpg')", "block", "cover", "no-repeat");
} else if (width > 549 && width < 1000) {
	set("s2_weedImg", "url('img/backgroundImgs/whiteWidowM.jpg')", "block", "cover", "no-repeat");
} else if (width > 999) {
	set("s2_weedImg", "url('img/backgroundImgs/whiteWidowL.jpg')", "block", "cover", "no-repeat");
}

// SET SECTION THREE ICON IMAGES
set("productsIcon", "url('img/tabelogoIcon.png')", "block", "50% 70%", "no-repeat", "bottom");
set("couponIcon", "url('img/icons&art/coupon.png')", "block", "40% 70%", "no-repeat", "bottom");
set("comingSoonIcon", "url('img/icons&art/comingSoon.png')", "block", "40% 70%", "no-repeat", "bottom");



// SET ANIMATIONS ON LITTLE GREEN DUDES
document.getElementById("littleGreenDudes").addEventListener("wheel", greenDudeAnimation);

function greenDudeAnimation() {
	greenDudeEat.style.webkitAnimation = "eat 1.25s ease-out 0s forwards";
	greenDudeEat.style.animation = "eat 1.25s ease-out 0s forwards";
	brownie.style.webkitAnimation = "brownie 1.25s ease-out 0.25s forwards";
	brownie.style.animation = "brownie 1.25s ease-out 0.25s forwards";
	clock.style.webkitAnimation = "clock 1.25s ease-out 1.5s forwards";
	clock.style.animation = "clock 1.25s ease-out 1.5s forwards";
	sec.style.webkitAnimation = "sec 15s linear 1.5s infinite";
	sec.style.animation = "sec 15s linear 1.5s infinite";
	greenDudeSmile.style.webkitAnimation = "smile 1.25s ease-out 2.5s forwards";
	greenDudeSmile.style.animation = "smile 1.25s ease-out 2.5s forwards";
	shades.style.webkitAnimation = "shades 1.25s ease-out 3s forwards";
	shades.style.animation = "shades 1.25s ease-out 3s forwards";
};

document.getElementById("littleGreenDudes").addEventListener("touchstart", greenDudeAnimation1);

function greenDudeAnimation1() {
	greenDudeEat.style.webkitAnimation = "eat 1.5s ease-out 1s forwards";
	greenDudeEat.style.animation = "eat 1.5s ease-out 1s forwards";
	brownie.style.webkitAnimation = "brownie 1.5s ease-out 1.5s forwards";
	brownie.style.animation = "brownie 1.5s ease-out 1.5s forwards";
	clock.style.webkitAnimation = "clock 1.5s ease-out 3s forwards";
	clock.style.animation = "clock 1.5s ease-out 3s forwards";
	sec.style.webkitAnimation = "sec 15s linear 3s infinite";
	sec.style.animation = "sec 15s linear 3s infinite";
	greenDudeSmile.style.webkitAnimation = "smile 1.5s ease-out 4s forwards";
	greenDudeSmile.style.animation = "smile 1.5s ease-out 4s forwards";
	shades.style.webkitAnimation = "shades 1.5s ease-out 4.5s forwards";
	shades.style.animation = "shades 1.5s ease-out 4.5s forwards";
};


// // FIX FOR STUPID IE SINCE IE CAN'T HANDLE ANIMATIONS IN MEDIA QUERIES -- STUPID IE
// function handleIE() {
	// if (navigator.userAgent.indexOf("Trident") > 0 && width > 549) {
		// document.getElementById("logoTabeDude").setAttribute("style", "animation: none !important; top: 220px; opacity: 1");
		// document.getElementById("greenDudeEat").setAttribute("style", "animation: none !important; left: 2px");
		// document.getElementById("brownie").setAttribute("style", "animation: none !important; opacity: 1; right: 0px");
		// document.getElementById("greenDudeSmile").setAttribute("style", "animation: none !important; left: 1px; top: 10px");
		// document.getElementById("shades").setAttribute("style", "animation: none !important; left: 35px; opacity: 1");
	// }
// };

// handleIE();






