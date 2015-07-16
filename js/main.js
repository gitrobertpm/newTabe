// MAIN JS

// GET WINDOW HEIGHT AND WIDTH
var width = window.innerWidth;
var height = window.innerHeight;

// SET FOOTER LINK ICONS
document.getElementsByClassName("footerLink")[0].style.background = "url('img/icons&art/home.png')";
document.getElementsByClassName("footerLink")[1].style.background = "url('img/tabelogoIcon.png')";
document.getElementsByClassName("footerLink")[2].style.background = "url('img/icons&art/resources.png')";
document.getElementsByClassName("footerLink")[3].style.background = "url('img/icons&art/about.png')";
document.getElementsByClassName("footerLink")[4].style.background = "url('img/icons&art/contact.png')";
document.getElementById("footerTabeDude").style.background = "url('img/icons&art/tabeDude2.png')";


// ID SHORTCUTS
var nav = document.getElementById("nav");
var closeNav = document.getElementById("closeNav");
var navLink = document.getElementsByClassName("navLink");

// HIDE HEADER ANCHORS INTITIALLY
function set() {
	closeNav.style.display = "none";
	for (i = 0; i < navLink.length; i++) {
		navLink[i].style.display = "none";
		navLink[i].style.opacity = "0";
	}
}
set();

// NAV BUTTON TO REVEAL HEADER NAV
function navi() {
	// SET HEADER NAV STYLE
	nav.style.width = "100%";
	nav.style.height = "50px";
	nav.style.background = "linear-gradient(rgba(15,35,15,0.7), rgba(0,0,0,0.7), rgba(15,35,15,0.7))";
	nav.style.cursor = "default";
	nav.style.left = "0px";
	nav.style.marginLeft = "0px";
	
	// CLOSE HADER NAV BUTTON STYLE
	closeNav.style.cursor = "pointer";
	closeNav.style.display = "block";
	closeNav.style.zIndex = "999999";
	
	// SHOW HEADER NAV ANCHORS
	for (i = 0; i < navLink.length; i++) {
		navLink[i].style.opacity = "1";
		navLink[i].style.display = "block";
	}
};


// CLOSE NAV BUTTON TO HIDE HEADER NAV
function closeNavi() {
	// RETURN HEADER NAV STYLE TO INITIAL
	if (width < 550) {
		nav.style.width = "45px";
		nav.style.marginLeft = "-22.5px";
	} else if (width > 549) {
		nav.style.width = "65px";
		nav.style.marginLeft = "-32.5px";
	}
	
	nav.style.height = "45px";
	nav.style.background = "none";
	nav.style.cursor = "default";
	nav.style.left = "50%";
	
	
	// HIDE CLOSE NAV BUTTON
	closeNav.style.display = "none";
	
	// HIDE HEADER ANCHORS
	for (i = 0; i < navLink.length; i++) {
		navLink[i].style.opacity = "0";
		navLink[i].style.display = "none";
	}
	
	// CLOSE RESOURCE DIV IF OPEN
	document.getElementById("navResourceDiv").setAttribute("style", "display: none");
};

// OPEN RESOURCE NAV DIV
function openResources() {
	document.getElementById("navResourceDiv").setAttribute("style", "display: block; z-index: 9999999; position: fixed");
};

// CLOSE RESOURCE NAV DIV
function closeResources() {
	document.getElementById("navResourceDiv").setAttribute("style", "display: none; z-index: 0; position: absolute");
};

// SET NAV BACKGROUND ON SCROLL
document.getElementById("body").addEventListener("wheel", navWrapperBackground);

function navWrapperBackground() {
	document.getElementById("navWrapper").style.background = "rgba(0,0,0,0.3)";
};

// SET NAV BACKGROUND ON TOUCH
document.getElementById("body").addEventListener("touchstart", navWrapperBackground1);

function navWrapperBackground1() {
	document.getElementById("navWrapper").style.background = "rgba(0,0,0,0.3)";
};

// FIX FOR STUPID IE SINCE IE CANT HANDLE ANIMATIONS IN MEDIA QUERIES -- STUPID IE
function handleIE() {
	if (navigator.userAgent.indexOf("Trident") > 0 && width > 549) {
		document.getElementById("logoTabeDude").setAttribute("style", "animation: none !important; top: 220px; opacity: 1");
		document.getElementById("greenDudeEat").setAttribute("style", "animation: none !important; left: 2px");
		document.getElementById("brownie").setAttribute("style", "animation: none !important; opacity: 1; right: 0px");
		document.getElementById("greenDudeSmile").setAttribute("style", "animation: none !important; left: 1px; top: 10px");
		document.getElementById("shades").setAttribute("style", "animation: none !important; left: 35px; opacity: 1");
	} 
};

handleIE();


