$(document).ready(function() {
	$("input.make_lui_datepicker").each(function() {
		if ($(this).attr("data-format")) {
			var format = $(this).attr("data-format");
		}
		else {
			var format = "yy-mm-dd";
		}
		$(this).datepicker({
			dateFormat: format
		});
	});
	$("input.make_lui_datepicker_select").each(function() {
		if ($(this).attr("data-format")) {
			var format = $(this).attr("data-format");
		}
		else {
			var format = "yy-mm-dd";
		}
		$(this).datepicker({
			dateFormat: format,
			changeMonth: true,
			changeYear: true
		});
	});
});