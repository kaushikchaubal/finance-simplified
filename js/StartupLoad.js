$(function() {
	loadAreas();
	refreshChart();

	$("#refreshButton").click(refreshChart);
});

$(document).ready(function(){
	$('#accordian').accordion({
    	active: false,
    	collapsible: true            
	});
});