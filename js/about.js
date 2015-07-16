// ABOUT PAGE


// SHORTCUT FUNCIOTN FOR GRABBING ID AND SETTING BACKGROUND AND DISPLAY VALUES
function set(idee, background, display, bs, br, bp) {
	var setIdee = document.getElementById(idee);
	setIdee.style.background = background;
	setIdee.style.display = display;
	setIdee.style.backgroundSize = bs;
	setIdee.style.backgroundRepeat = br;
	setIdee.style.backgroundPosition = bp;
};

// SET DOWN ARROW ICON AND ABOUT ICON
set("down", "url('img/icons&art/down.png')", "block", "75% 75%", "no-repeat", "center");
set("aboutIcon", "url('img/icons&art/about.png')", "block", "100% 100%", "no-repeat", "center");