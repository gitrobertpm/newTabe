// PRODUCTS JS

// GET WINDOW HEIGHT AND WIDTH
var width = window.innerWidth;
var height = window.innerHeight;

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
set("brownieKit", "url('img/productImgs/brownieKit.png')", "block", "100% 100%", "no-repeat", "center");
set("testing", "url('img/productImgs/testingLogo2.png')", "block", "100% 100%", "no-repeat");
set("flare", "url('img/productImgs/tabeFlare.png')", "block", "100% 100%", "no-repeat");

// ELEMENT VARIABLES
var slideInput = document.getElementsByTagName("input");
var slideLabel = document.getElementsByTagName("label");
var wrap = document.getElementById("wrap");

// FUNCTION TO SEE WHICH SLIDE IS CHECKED, ADD BACKGROUND TO LABEL FOR THAT SLIDE -- ALSO DECIDES .WRAP HEIGHT BASED ON WINDOW WIDTH
function check() {
	for (i = 0; i < slideInput.length; i++) {
		if (slideInput[i].checked) {
			slideLabel[i].style.background = "-webkit-linear-gradient(to right, rgba(150,200,150,0.7), rgba(25,50,25,0.7), rgba(150,200,150,0.7))";
			slideLabel[i].style.background = "linear-gradient(to right, rgba(150,200,150,0.7), rgba(25,50,25,0.7), rgba(150,200,150,0.7))";
		} else {
			slideLabel[i].style.background = "none";
		}
	}
	
	if (width < 550) {
		if (slideInput[2].checked) {
			wrap.style.height = "2275px";
		}
		
		if (slideInput[0].checked) {
			wrap.style.height = "800px";
		}
		
		if (slideInput[1].checked) {
			wrap.style.height = "1000px";
		}
		
		if (slideInput[3].checked) {
			wrap.style.height = "875px";
		}
	} else if (width > 549 && width < 1000)  {
		if (slideInput[2].checked) {
			wrap.style.height = "1800px";
		}
		
		if (slideInput[0].checked) {
			wrap.style.height = "800px";
		}
		
		if (slideInput[1].checked) {
			wrap.style.height = "750px";
		}
		
		if (slideInput[3].checked) {
			wrap.style.height = "750px";
		}
	} else if (width > 999) {
		if (slideInput[2].checked) {
			wrap.style.height = "2200px";
		}
		
		if (slideInput[0].checked) {
			wrap.style.height = "750px";
		}
		
		if (slideInput[1].checked) {
			wrap.style.height = "875px";
		}
		
		if (slideInput[3].checked) {
			wrap.style.height = "750px";
		}
	}
	
};

