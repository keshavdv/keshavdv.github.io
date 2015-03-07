$(document).ready(function() {

	$('a.email-link').click(function() {
		var k = "kes"
		var e = "hav"
		var s = "dv"
		var m = k + e + s + "@" + "gmail" + ".com";
		window.location.href  = "mailto:" + m;
	})
});