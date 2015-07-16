// CONTACT JS

// SHORTCUT FUNCIOTN FOR GRABBING ID AND SETTING BACKGROUND AND DISPLAY VALUES
function set(idee, background, display, bs, br, bp) {
	var setIdee = document.getElementById(idee);
	setIdee.style.background = background;
	setIdee.style.display = display;
	setIdee.style.backgroundSize = bs;
	setIdee.style.backgroundRepeat = br;
	setIdee.style.backgroundPosition = bp;
};

set("contactIcon", "url('img/icons&art/contact.png')", "block", "100% 100%", "no-repeat", "center");
set("twitterIcon", "url('img/icons&art/twitter.png')", "block", "75% 75%", "no-repeat", "bottom");
set("pinterestIcon", "url('img/icons&art/pinterest.png')", "block", "75% 75%", "no-repeat", "bottom");