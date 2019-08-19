document.addEventListener("DOMContentLoaded", function() {

	var austDay = new Date();
	austDay = new Date(2019, 12-1, 1);
	$('#defaultCountdown').countdown({
		until: austDay,
		format: 'dOHMS'
	});

});
