function refreshChart() {
	var url = "http://sampleappserver.herokuapp.com/getData";

	var options = {
		chart: {
			type: 'column',
			renderTo: 'secondChart'
		},
		title: {
			text: 'Second title text'
		},
		xAxis: {
			categories: [],
			title: {
				text: 'X-axis'
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Y-axis',
			},
			labels: {
				overflow: 'justify'
			}
		},		 
	};

	$.getJSON(url, function(data) {
		var x_categories = [];
		var data_series = [];
		var series1 = [];

		$.each(data, function(key,val) { 
			if (key == "First value" || key == "Second value" || key == "Third value" || key == "Forth value" || key == "Fifth value" ) {
				x_categories.push(key);
				series1.push(val);
			}
		});

		options.xAxis.categories = x_categories;
		data_series.push({name: data.Description, data:series1});
		options.series = data_series;
		var chart = new Highcharts.Chart(options);
	});
}