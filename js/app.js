// check if window is below threshold of navbar-expand-md (767px)
function checkWidth () {
	// toggle between nav heights depending on if navbar is deployed or not
	if ($(window).width() <= 767) {
		$(".anchor").css("top", "-176px");
	} else {
		$(".anchor").css("top", "-57px");
	}
}
checkWidth();

// check width again if window is resized
$(window).on("resize", () => {
	checkWidth();
});

// listen for toggler button in nav being clicked using boolean variable
let navDeployed = false;

$("#toggler").on("click", () => {
	navDeployed = !navDeployed;
	// check for home button being clicked
	$("#toggler").css("transition", "0.5s ease");
	if (navDeployed) {
		$("body").css({
			"padding-top": "176px",
			"transition": "0.35s ease"
		})
	} else {
		$("body").css({
			"padding-top": "57px",
			"transition": "0.35s ease"
		})
	}
});

