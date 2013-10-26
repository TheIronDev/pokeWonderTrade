requirejs.config({
	paths: {
		"jquery": "./jquery-1.10.2.min",
		"highcharts": "./highcharts"
	},
	shim: {
		"highcharts": {
			deps: ["jquery"]
		}
	}
});

require(['jquery', 'highcharts'], function($, highcharts){
	$(function () {
		$('#chart-byPokemon').highcharts({
			credits: {
				enabled: false
			},
	        title: {
	            text: 'Wonder Shares by Pokemon'
	        },
	        tooltip: {
	    	    pointFormat: '{series.name} aa: <b>{point.percentage:.1f}%</b>'
	        },
	        plotOptions: {
	            pie: {
	                allowPointSelect: true,
	                cursor: 'pointer',
	                dataLabels: {
	                    enabled: true,
	                    color: '#000000',
	                    connectorColor: '#000000',
	                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
	                }
	            }
	        },
	        series: [{
	            type: 'pie',
	            name: 'Pokemon',
	            data: [
	                ['Pidgey',   67],
	                ['Pikachu',   67],
	                ['Hitmonchan', 5]
	            ]
	        }]
	    });

	    $('#chart-byGender').highcharts({
	        title: {
	            text: 'Wonder Shares by Gender'
	        },
	        credits: {
				enabled: false
			},
	        tooltip: {
	    	    pointFormat: '{series.name} aa: <b>{point.percentage:.1f}%</b>'
	        },
	        plotOptions: {
	            pie: {
	                allowPointSelect: true,
	                cursor: 'pointer',
	                dataLabels: {
	                    enabled: true,
	                    color: '#000000',
	                    connectorColor: '#000000',
	                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
	                }
	            }
	        },
	        series: [{
	            type: 'pie',
	            name: 'Gender',
	            data: [
	                ['Guys',   67],
	                ['Girls', 5]
	            ]
	        }]
	    });
	});
})
		

    

		