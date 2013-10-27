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

		Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function(color) {
		    return {
		        radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
		        stops: [
		            [0, color],
		            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
		        ]
		    };
		});

		$('#chart-byPokemon').highcharts({
			credits: {
				enabled: false
			},
			chart: {
				height: 800
			},
	        title: {
	            text: 'Wonder Shares by Pokemon'
	        },
	        tooltip: {
	    	    pointFormat: '{series.name} : <b>{point.y} ({point.percentage:.1f}%)</b>'
	        },
	        plotOptions: {
	            pie: {
	                allowPointSelect: true,
	                cursor: 'pointer',
	                dataLabels: {
	                    enabled: true,
	                    color: '#000000',
	                    connectorColor: '#000000',
	                    format: '<b>{point.name}</b>: {point.y}'
	                }
	            }
	        },
	        series: [{
	            type: 'pie',
	            name: 'Pokemon',
	            data: [
					[ 'Wingull', 1 ],
					[ 'Bulbasaur', 1 ],
					[ 'Farfetch\'d', 1 ],
					[ 'Furfrou', 1 ],
					[ 'Pachirisu', 1 ],
					[ 'Lombre', 1 ],
					[ 'Swadloon', 1 ],
					[ 'Pansage', 1 ],
					[ 'Doduo', 1 ],
					[ 'Gyrados', 1 ],
					[ 'Foongus', 1 ],
					[ 'Beldum', 1 ],
					[ 'Electrike', 1 ],
					[ 'Psyduck', 1 ],
					[ 'Gulpin', 1 ],
					[ 'Nosepass', 1 ],
					[ 'Gothita', 1 ],
					[ 'Swinub', 1 ],
					[ 'Riolu', 1 ],
					[ 'Kakuna', 1 ],
					[ 'Slowpoke', 1 ],
					[ 'Slugma', 1 ],
					[ 'Karrablast', 1 ],
					[ 'BIdoof', 1 ],
					[ 'Snorunt', 1 ],
					[ 'Petilil', 1 ],
					[ 'Fletchinder', 1 ],
					[ 'Linoone', 1 ],
					[ 'Tauros', 1 ],
					[ 'Weepinbell', 1 ],
					[ 'Liepard', 1 ],
					[ 'Noctowl', 1 ],
					[ 'Lapras', 1 ],
					[ 'Roggenrola', 1 ],
					[ 'Jigglypuff', 1 ],
					[ 'Mienfoo', 1 ],
					[ 'Skorupi', 1 ],
					[ 'Sableye', 1 ],
					[ 'Fennekin', 1 ],
					[ 'Swirlix', 1 ],
					[ 'Spheal', 1 ],
					[ 'Cranidos', 1 ],
					[ 'Roselia', 1 ],
					[ 'Seedot', 1 ],
					[ 'Cubone', 1 ],
					[ 'Quagsire', 1 ],
					[ 'Woobat', 1 ],
					[ 'Braixen', 1 ],
					[ 'Floatzel', 1 ],
					[ 'Masquerain', 1 ],
					[ 'Nidorino', 1 ],
					[ 'Metapod', 1 ],
					[ 'Gothorita', 1 ],
					[ 'Spinarak', 1 ],
					[ 'Miltank', 1 ],
					[ 'Pumpkaboo', 1 ],
					[ 'Larvitar', 1 ],
					[ 'Magikarp', 1 ],
					[ 'Trapinch', 1 ],
					[ 'Electrode', 1 ],
					[ 'Pichu', 1 ],
					[ 'Jolteon', 1 ],
					[ 'Swanna', 1 ],
					[ 'Hariyama', 1 ],
					[ 'Geodude', 1 ],
					[ 'Togepi', 1 ],
					[ 'Aron', 1 ],
					[ 'Clauncher', 1 ],
					[ 'Throh', 1 ],
					[ 'Greninja', 1 ],
					[ 'Lickitung', 1 ],
					[ 'Gogoat', 1 ],
					[ 'Litleo', 1 ],
					[ 'Solosis', 1 ],
					[ 'Zigzagoon', 1 ],
					[ 'Chespin', 1 ],
					[ 'Axew', 1 ],
					[ 'Dwebble', 1 ],
					[ 'Amoonguss', 2 ],
					[ 'Abra', 2 ],
					[ 'Sentret', 2 ],
					[ 'Helioptile', 2 ],
					[ 'Drifloon', 2 ],
					[ 'Volbeat', 2 ],
					[ 'Golem', 2 ],
					[ 'Ditto', 2 ],
					[ 'Gastly', 2 ],
					[ 'Bidoof', 2 ],
					[ 'Caterpie', 2 ],
					[ 'Dugtrio', 2 ],
					[ 'Machop', 2 ],
					[ 'Ducklett', 2 ],
					[ 'Pansear', 2 ],
					[ 'Basculin', 2 ],
					[ 'Pidgey', 2 ],
					[ 'Chingling', 2 ],
					[ 'Dedenne', 2 ],
					[ 'Tyrunt', 2 ],
					[ 'Deino', 2 ],
					[ 'Wobbuffet', 2 ],
					[ 'Skitty', 2 ],
					[ 'Trevenant', 2 ],
					[ 'Larvesta', 2 ],
					[ 'Shellder', 2 ],
					[ 'Ledyba', 2 ],
					[ 'Seviper', 2 ],
					[ 'Minun', 2 ],
					[ 'Smeargle', 2 ],
					[ 'Sneasel', 2 ],
					[ 'Illumise', 2 ],
					[ 'Mawile', 3 ],
					[ 'Scatterbug', 3 ],
					[ 'Noibat', 3 ],
					[ 'Espurr', 3 ],
					[ 'Aerodactyl', 3 ],
					[ 'Vivillon', 3 ],
					[ 'Spoink', 3 ],
					[ 'Oddish', 3 ],
					[ 'Bergmite', 3 ],
					[ 'Combee', 3 ],
					[ 'Skiddo', 3 ],
					[ 'Hawlucha', 3 ],
					[ 'Luvdisc', 3 ],
					[ 'Charmander', 4 ],
					[ 'Zubat', 4 ],
					[ 'Stunfisk', 4 ],
					[ 'Panpour', 5 ],
					[ 'Weedle', 5 ],
					[ 'Snubbull', 5 ],
					[ 'Flabebe', 6 ],
					[ 'Goomy', 6 ],
					[ 'Ralts', 7 ],
					[ 'Pancham', 7 ],
					[ 'Pikachu', 7 ],
					[ 'Inkay', 7 ],
					[ 'Honedge', 7 ],
					[ 'Fletchling', 8 ],
					[ 'Gible', 8 ],
					[ 'Bunnelby', 9 ],
					[ 'Froakie', 10 ],
					[ 'Eevee', 10 ]
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
	    	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	        },
	        plotOptions: {
	            pie: {
	                allowPointSelect: true,
	                cursor: 'pointer',
	                dataLabels: {
	                    enabled: true,
	                    color: '#fff',
	                    connectorColor: '#000000',
	                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
	                    distance: -60
	                }
	            }
	        },
	        series: [{
	            type: 'pie',
	            name: 'Gender',
	            data: [
	                ['Guys',   216],
	                ['Girls', 84]
	            ]
	        }]
	    });

	    $('#chart-byCountry').highcharts({
	        title: {
	            text: 'Wonder Shares by Country'
	        },
	        color: ['#fff00', '#000fff'],
	        chart: {
				height: 800
			},
	        credits: {
				enabled: false
			},
	        tooltip: {
	    	    pointFormat: '<b>{point.y}</b>'
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
	            name: 'Country',
	            data: [
					[ 'Switzerland', 1 ],
					[ 'Poland', 1 ],
					[ 'Austria', 1 ],
					[ 'Singapore', 1 ],
					[ 'Portugal', 1 ],
					[ 'Anguilla', 1 ],
					[ 'Peru', 1 ],
					[ 'South Korea', 2 ],
					[ 'Sweden', 2 ],
					[ 'Greece', 2 ],
					[ 'Netherlands', 3 ],
					[ 'Belgium', 3 ],
					[ 'Norway', 3 ],
					[ 'Brazil', 4 ],
					[ 'Mexico', 4 ],
					[ 'Spain', 5 ],
					[ 'France', 5 ],
					[ 'Italy', 7 ],
					[ 'Australia', 8 ],
					[ 'Germany', 9 ],
					[ 'Canada', 12 ],
					[ 'United Kingdom', 12 ],
					[ 'Japan', 75 ],
					[ 'United States', 137 ]
  				]
	        }]
	    });

		$('#chart-byUSA').highcharts({
	        title: {
	            text: 'Wonder Shares within USA'
	        },
	        credits: {
				enabled: false
			},
	        tooltip: {
	    	    pointFormat: '<b>{point.y}</b>'
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
	            name: 'Country',
	            data: [
					[ 'Wisconsin', 1 ],
					[ 'Tennessee', 1 ],
					[ 'Arkansas', 1 ],
					[ 'Illinois', 1 ],
					[ 'Mississippi', 1 ],
					[ 'Utah', 1 ],
					[ 'Kentucky', 1 ],
					[ 'Nevada', 1 ],
					[ 'South Carolina', 1 ],
					[ 'West Virginia', 1 ],
					[ 'Missouri', 1 ],
					[ 'Alamaba', 1 ],
					[ 'Minnesota', 2 ],
					[ 'Colorado', 2 ],
					[ 'Washington', 2 ],
					[ 'Louisiana', 2 ],
					[ 'Oregon', 2 ],
					[ 'Idaho', 2 ],
					[ 'Indiana', 2 ],
					[ 'Georgia', 2 ],
					[ 'North Carolina', 3 ],
					[ 'Maryland', 3 ],
					[ 'Puerto Rico', 3 ],
					[ 'Arizona', 3 ],
					[ 'Pennsylvania', 4 ],
					[ 'Ohio', 4 ],
					[ 'Virginia', 5 ],
					[ 'Massachusetts', 5 ],
					[ 'Michigan', 6 ],
					[ 'Florida', 9 ],
					[ 'New Jersey', 10 ],
					[ 'Texas', 14 ],
					[ 'New York', 14 ],
					[ 'California', 16 ]
  				]
	        }]
	    });


		$('#chart-waitTimes').highcharts({
            chart: {
                type: 'spline'
            },
            credits: {
				enabled: false
			},
            title: {
                text: 'Wonder Trade Wait Times'
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: { // don't display the dummy year
                    month: '%e. %b',
                    year: '%b'
                }
            },
            yAxis: {
                title: {
                    text: 'Wait Times (secs)'
                },
                min: 0
            },
            plotOptions: {
                spline: {
                	lineWidth: 1,
                    marker: {
                        enabled: false
                    }
                }
            },
            legend: {
                enabled:false  
            },
            series: [{
                name: 'Wait Times',
                data: [
                    [Date.UTC(2013,9,26, 8, 13), 23],
					[Date.UTC(2013,9,26, 8, 16), 22],
					[Date.UTC(2013,9,26, 8, 20), 18],
					[Date.UTC(2013,9,26, 8, 22), 21],
					[Date.UTC(2013,9,26, 8, 25), 18],
					[Date.UTC(2013,9,26, 8, 27), 16],
					[Date.UTC(2013,9,26, 8, 29), 19],
					[Date.UTC(2013,9,26, 8, 32), 15],
					[Date.UTC(2013,9,26, 8, 34), 22],
					[Date.UTC(2013,9,26, 8, 36), 21],
					[Date.UTC(2013,9,26, 8, 38), 15],
					[Date.UTC(2013,9,26, 8, 40), 13],
					[Date.UTC(2013,9,26, 8, 42), 16],
					[Date.UTC(2013,9,26, 8, 43), 14],
					[Date.UTC(2013,9,26, 8, 45), 21],
					[Date.UTC(2013,9,26, 8, 47), 23],
					[Date.UTC(2013,9,26, 8, 49), 15],
					[Date.UTC(2013,9,26, 8, 51), 18],
					[Date.UTC(2013,9,26, 8, 52), 16],
					[Date.UTC(2013,9,26, 8, 54), 90],
					[Date.UTC(2013,9,26, 9, 0), 12],
					[Date.UTC(2013,9,26, 9, 1), 17],
					[Date.UTC(2013,9,26, 9, 2), 19],
					[Date.UTC(2013,9,26, 9, 5), 24],
					[Date.UTC(2013,9,26, 9, 7), 26],
					[Date.UTC(2013,9,26, 9, 9), 21],
					[Date.UTC(2013,9,26, 9, 11), 13],
					[Date.UTC(2013,9,26, 9, 13), 29],
					[Date.UTC(2013,9,26, 9, 15), 15],
					[Date.UTC(2013,9,26, 9, 25), 21],
					[Date.UTC(2013,9,26, 9, 29), 22],
					[Date.UTC(2013,9,26, 9, 30), 33],
					[Date.UTC(2013,9,26, 9, 32), 15],
					[Date.UTC(2013,9,26, 9, 34), 15],
					[Date.UTC(2013,9,26, 9, 36), 18],
					[Date.UTC(2013,9,26, 9, 37), 16],
					[Date.UTC(2013,9,26, 9, 43), 27],
					[Date.UTC(2013,9,26, 9, 45), 16],
					[Date.UTC(2013,9,26, 9, 47), 18],
					[Date.UTC(2013,9,26, 9, 48), 17],
					[Date.UTC(2013,9,26, 9, 54), 13],
					[Date.UTC(2013,9,26, 9, 56), 18],
					[Date.UTC(2013,9,26, 9, 57), 18],
					[Date.UTC(2013,9,26, 9, 59), 18],
					[Date.UTC(2013,9,26, 10, 0), 16],
					[Date.UTC(2013,9,26, 10, 3), 16],
					[Date.UTC(2013,9,26, 10, 7), 15],
					[Date.UTC(2013,9,26, 10, 9), 21],
					[Date.UTC(2013,9,26, 10, 12), 16],
					[Date.UTC(2013,9,26, 10, 13), 17],
					[Date.UTC(2013,9,26, 10, 15), 17],
					[Date.UTC(2013,9,26, 10, 16), 23],
					[Date.UTC(2013,9,26, 10, 19), 18],
					[Date.UTC(2013,9,26, 10, 23), 21],
					[Date.UTC(2013,9,26, 10, 24), 17],
					[Date.UTC(2013,9,26, 10, 26), 18],
					[Date.UTC(2013,9,26, 10, 28), 15],
					[Date.UTC(2013,9,26, 10, 30), 22],
					[Date.UTC(2013,9,26, 10, 32), 21],
					[Date.UTC(2013,9,26, 10, 33), 19],
					[Date.UTC(2013,9,26, 10, 38), 17],
					[Date.UTC(2013,9,26, 10, 40), 18],
					[Date.UTC(2013,9,26, 10, 42), 17],
					[Date.UTC(2013,9,26, 10, 45), 16],
					[Date.UTC(2013,9,26, 10, 47), 20],
					[Date.UTC(2013,9,26, 10, 48), 16],
					[Date.UTC(2013,9,26, 10, 54), 26],
					[Date.UTC(2013,9,26, 10, 57), 21],
					[Date.UTC(2013,9,26, 10, 59), 18],
					[Date.UTC(2013,9,26, 11, 1), 21],
					[Date.UTC(2013,9,26, 11, 2), 18],
					[Date.UTC(2013,9,26, 11, 4), 17],
					[Date.UTC(2013,9,26, 11, 6), 15],
					[Date.UTC(2013,9,26, 11, 9), 78],
					[Date.UTC(2013,9,26, 11, 11), 21],
					[Date.UTC(2013,9,26, 11, 14), 17],
					[Date.UTC(2013,9,26, 11, 15), 18],
					[Date.UTC(2013,9,26, 11, 19), 21],
					[Date.UTC(2013,9,26, 11, 21), 16],
					[Date.UTC(2013,9,26, 11, 23), 17],
					[Date.UTC(2013,9,26, 11, 25), 14],
					[Date.UTC(2013,9,26, 11, 27), 19],
					[Date.UTC(2013,9,26, 11, 28), 12],
					[Date.UTC(2013,9,26, 11, 30), 20],
					[Date.UTC(2013,9,26, 11, 31), 18],
					[Date.UTC(2013,9,26, 11, 33), 16],
					[Date.UTC(2013,9,26, 11, 35), 78],
					[Date.UTC(2013,9,26, 11, 38), 14],
					[Date.UTC(2013,9,26, 11, 41), 16],
					[Date.UTC(2013,9,26, 11, 42), 17],
					[Date.UTC(2013,9,26, 11, 44), 20],
					[Date.UTC(2013,9,26, 11, 45), 21],
					[Date.UTC(2013,9,26, 11, 47), 19],
					[Date.UTC(2013,9,26, 11, 48), 20],
					[Date.UTC(2013,9,26, 11, 51), 20],
					[Date.UTC(2013,9,26, 11, 52), 19],
					[Date.UTC(2013,9,26, 11, 53), 20],
					[Date.UTC(2013,9,26, 11, 55), 20],
					[Date.UTC(2013,9,26, 11, 56), 17],
					[Date.UTC(2013,9,26, 11, 58), 21],
					[Date.UTC(2013,9,26, 12, 9), 16],
					[Date.UTC(2013,9,26, 12, 11), 18],
					[Date.UTC(2013,9,26, 12, 13), 19],
					[Date.UTC(2013,9,26, 12, 15), 19],
					[Date.UTC(2013,9,26, 12, 16), 19],
					[Date.UTC(2013,9,26, 12, 19), 25],
					[Date.UTC(2013,9,26, 12, 20), 17],
					[Date.UTC(2013,9,26, 12, 23), 25],
					[Date.UTC(2013,9,26, 12, 28), 18],
					[Date.UTC(2013,9,26, 12, 29), 23],
					[Date.UTC(2013,9,26, 12, 31), 19],
					[Date.UTC(2013,9,26, 12, 32), 15],
					[Date.UTC(2013,9,26, 12, 35), 19],
					[Date.UTC(2013,9,26, 12, 36), 17],
					[Date.UTC(2013,9,26, 12, 37), 15],
					[Date.UTC(2013,9,26, 12, 39), 17],
					[Date.UTC(2013,9,26, 12, 40), 16],
					[Date.UTC(2013,9,26, 12, 42), 20],
					[Date.UTC(2013,9,26, 12, 44), 19],
					[Date.UTC(2013,9,26, 12, 45), 77],
					[Date.UTC(2013,9,26, 12, 48), 26],
					[Date.UTC(2013,9,26, 12, 50), 19],
					[Date.UTC(2013,9,26, 12, 51), 19],
					[Date.UTC(2013,9,26, 12, 53), 19],
					[Date.UTC(2013,9,26, 12, 55), 17],
					[Date.UTC(2013,9,26, 12, 59), 19],
					[Date.UTC(2013,9,26, 13, 0), 18],
					[Date.UTC(2013,9,26, 13, 3), 23],
					[Date.UTC(2013,9,26, 13, 6), 25],
					[Date.UTC(2013,9,26, 13, 8), 48],
					[Date.UTC(2013,9,26, 13, 12), 16],
					[Date.UTC(2013,9,26, 13, 13), 20],
					[Date.UTC(2013,9,26, 13, 15), 25],
					[Date.UTC(2013,9,26, 13, 18), 26],
					[Date.UTC(2013,9,26, 13, 24), 25],
					[Date.UTC(2013,9,26, 13, 25), 23],
					[Date.UTC(2013,9,26, 13, 27), 18],
					[Date.UTC(2013,9,26, 13, 28), 15],
					[Date.UTC(2013,9,26, 13, 30), 17],
					[Date.UTC(2013,9,26, 13, 36), 15],
					[Date.UTC(2013,9,26, 13, 38), 16],
					[Date.UTC(2013,9,26, 13, 39), 16],
					[Date.UTC(2013,9,26, 13, 41), 15],
					[Date.UTC(2013,9,26, 13, 42), 27],
					[Date.UTC(2013,9,26, 13, 45), 20],
					[Date.UTC(2013,9,26, 13, 46), 22],
					[Date.UTC(2013,9,26, 13, 48), 16],
					[Date.UTC(2013,9,26, 13, 49), 20],
					[Date.UTC(2013,9,26, 13, 55), 21],
					[Date.UTC(2013,9,26, 13, 56), 10],
					[Date.UTC(2013,9,26, 13, 58), 18],
					[Date.UTC(2013,9,26, 14, 1), 16],
					[Date.UTC(2013,9,26, 14, 3), 20],
					[Date.UTC(2013,9,26, 14, 4), 20],
					[Date.UTC(2013,9,26, 14, 6), 12],
					[Date.UTC(2013,9,26, 14, 7), 15],
					[Date.UTC(2013,9,26, 14, 9), 17],
					[Date.UTC(2013,9,26, 14, 11), 17],
					[Date.UTC(2013,9,26, 14, 13), 19],
					[Date.UTC(2013,9,26, 14, 14), 23],
					[Date.UTC(2013,9,26, 14, 16), 21],
					[Date.UTC(2013,9,26, 14, 17), 21],
					[Date.UTC(2013,9,26, 14, 19), 14],
					[Date.UTC(2013,9,26, 14, 21), 17],
					[Date.UTC(2013,9,26, 14, 24), 18],
					[Date.UTC(2013,9,26, 14, 26), 20],
					[Date.UTC(2013,9,26, 14, 27), 20],
					[Date.UTC(2013,9,26, 14, 29), 16],
					[Date.UTC(2013,9,26, 14, 30), 15],
					[Date.UTC(2013,9,26, 14, 31), 23],
					[Date.UTC(2013,9,26, 14, 34), 16],
					[Date.UTC(2013,9,26, 14, 36), 17],
					[Date.UTC(2013,9,26, 14, 39), 19],
					[Date.UTC(2013,9,26, 14, 40), 14],
					[Date.UTC(2013,9,26, 14, 42), 22],
					[Date.UTC(2013,9,26, 15, 11), 28],
					[Date.UTC(2013,9,26, 15, 13), 21],
					[Date.UTC(2013,9,26, 15, 14), 17],
					[Date.UTC(2013,9,26, 15, 16), 17],
					[Date.UTC(2013,9,26, 15, 19), 17],
					[Date.UTC(2013,9,26, 15, 21), 17],
					[Date.UTC(2013,9,26, 15, 23), 14],
					[Date.UTC(2013,9,26, 15, 24), 18],
					[Date.UTC(2013,9,26, 15, 26), 24],
					[Date.UTC(2013,9,26, 15, 27), 12],
					[Date.UTC(2013,9,26, 15, 29), 14],
					[Date.UTC(2013,9,26, 15, 30), 17],
					[Date.UTC(2013,9,26, 15, 32), 26],
					[Date.UTC(2013,9,26, 15, 34), 25],
					[Date.UTC(2013,9,26, 15, 35), 24],
					[Date.UTC(2013,9,26, 15, 37), 18],
					[Date.UTC(2013,9,26, 15, 39), 19],
					[Date.UTC(2013,9,26, 15, 40), 15],
					[Date.UTC(2013,9,26, 15, 42), 75],
					[Date.UTC(2013,9,26, 15, 45), 13],
					[Date.UTC(2013,9,26, 15, 47), 15],
					[Date.UTC(2013,9,26, 15, 48), 27],
					[Date.UTC(2013,9,26, 15, 53), 13],
					[Date.UTC(2013,9,26, 15, 54), 12],
					[Date.UTC(2013,9,26, 15, 55), 17],
					[Date.UTC(2013,9,26, 15, 57), 15],
					[Date.UTC(2013,9,26, 15, 58), 15],
					[Date.UTC(2013,9,26, 16, 0), 14],
					[Date.UTC(2013,9,26, 16, 1), 15],
					[Date.UTC(2013,9,26, 16, 3), 14],
					[Date.UTC(2013,9,26, 16, 4), 21],
					[Date.UTC(2013,9,26, 16, 6), 14],
					[Date.UTC(2013,9,26, 16, 7), 9],
					[Date.UTC(2013,9,26, 16, 9), 18],
					[Date.UTC(2013,9,26, 16, 10), 16],
					[Date.UTC(2013,9,26, 16, 13), 15],
					[Date.UTC(2013,9,26, 16, 17), 16],
					[Date.UTC(2013,9,26, 16, 18), 16],
					[Date.UTC(2013,9,26, 16, 19), 16],
					[Date.UTC(2013,9,26, 16, 21), 19],
					[Date.UTC(2013,9,26, 16, 22), 14],
					[Date.UTC(2013,9,26, 16, 33), 16],
					[Date.UTC(2013,9,26, 16, 34), 26],
					[Date.UTC(2013,9,26, 16, 37), 18],
					[Date.UTC(2013,9,26, 16, 39), 21],
					[Date.UTC(2013,9,26, 16, 40), 17],
					[Date.UTC(2013,9,26, 16, 41), 17],
					[Date.UTC(2013,9,26, 16, 43), 15],
					[Date.UTC(2013,9,26, 16, 45), 11],
					[Date.UTC(2013,9,26, 16, 46), 13],
					[Date.UTC(2013,9,26, 16, 48), 16],
					[Date.UTC(2013,9,26, 16, 49), 20],
					[Date.UTC(2013,9,26, 16, 50), 20],
					[Date.UTC(2013,9,26, 16, 52), 77],
					[Date.UTC(2013,9,26, 16, 54), 13],
					[Date.UTC(2013,9,26, 16, 56), 14],
					[Date.UTC(2013,9,26, 16, 57), 16],
					[Date.UTC(2013,9,26, 16, 59), 18],
					[Date.UTC(2013,9,26, 17, 0), 15],
					[Date.UTC(2013,9,26, 17, 1), 14],
					[Date.UTC(2013,9,26, 17, 3), 15],
					[Date.UTC(2013,9,26, 17, 6), 16],
					[Date.UTC(2013,9,26, 17, 7), 15],
					[Date.UTC(2013,9,26, 17, 8), 18],
					[Date.UTC(2013,9,26, 17, 13), 35],
					[Date.UTC(2013,9,26, 17, 14), 27],
					[Date.UTC(2013,9,26, 17, 16), 15],
					[Date.UTC(2013,9,26, 17, 17), 11],
					[Date.UTC(2013,9,26, 17, 18), 12],
					[Date.UTC(2013,9,26, 17, 19), 15],
					[Date.UTC(2013,9,26, 17, 21), 18],
					[Date.UTC(2013,9,26, 17, 22), 17],
					[Date.UTC(2013,9,26, 17, 23), 15],
					[Date.UTC(2013,9,26, 17, 25), 40],
					[Date.UTC(2013,9,26, 17, 27), 18],
					[Date.UTC(2013,9,26, 17, 29), 18],
					[Date.UTC(2013,9,26, 17, 30), 17],
					[Date.UTC(2013,9,26, 17, 32), 14],
					[Date.UTC(2013,9,26, 17, 33), 19],
					[Date.UTC(2013,9,26, 17, 35), 18],
					[Date.UTC(2013,9,26, 17, 36), 15],
					[Date.UTC(2013,9,26, 17, 37), 14],
					[Date.UTC(2013,9,26, 17, 38), 17],
					[Date.UTC(2013,9,26, 17, 40), 20],
					[Date.UTC(2013,9,26, 17, 41), 30],
					[Date.UTC(2013,9,26, 17, 42), 19],
					[Date.UTC(2013,9,26, 17, 44), 17],
					[Date.UTC(2013,9,26, 17, 45), 17],
					[Date.UTC(2013,9,26, 17, 46), 19],
					[Date.UTC(2013,9,26, 17, 48), 19],
					[Date.UTC(2013,9,26, 17, 49), 19],
					[Date.UTC(2013,9,26, 17, 51), 19],
					[Date.UTC(2013,9,26, 17, 52), 20],
					[Date.UTC(2013,9,26, 17, 53), 14],
					[Date.UTC(2013,9,26, 17, 54), 19],
					[Date.UTC(2013,9,26, 17, 56), 20],
					[Date.UTC(2013,9,26, 17, 57), 12],
					[Date.UTC(2013,9,26, 17, 59), 16],
					[Date.UTC(2013,9,26, 18, 0), 19],
					[Date.UTC(2013,9,26, 18, 1), 17],
					[Date.UTC(2013,9,26, 18, 3), 20],
					[Date.UTC(2013,9,26, 18, 4), 15],
					[Date.UTC(2013,9,26, 18, 5), 15],
					[Date.UTC(2013,9,26, 18, 7), 15],
					[Date.UTC(2013,9,26, 18, 8), 28],
					[Date.UTC(2013,9,26, 18, 10), 18],
					[Date.UTC(2013,9,26, 18, 11), 14],
					[Date.UTC(2013,9,26, 18, 13), 10],
					[Date.UTC(2013,9,26, 18, 15), 19],
					[Date.UTC(2013,9,26, 18, 16), 18],
					[Date.UTC(2013,9,26, 18, 17), 16],
					[Date.UTC(2013,9,26, 18, 19), 23],
					[Date.UTC(2013,9,26, 18, 21), 27],
					[Date.UTC(2013,9,26, 18, 22), 21],
					[Date.UTC(2013,9,26, 18, 23), 19],
					[Date.UTC(2013,9,26, 18, 25), 25],
					[Date.UTC(2013,9,26, 18, 27), 23],
					[Date.UTC(2013,9,26, 18, 29), 13],
					[Date.UTC(2013,9,26, 18, 30), 17],
					[Date.UTC(2013,9,26, 18, 31), 19],
					[Date.UTC(2013,9,26, 18, 32), 22],
					[Date.UTC(2013,9,26, 18, 34), 19],
					[Date.UTC(2013,9,26, 18, 35), 18],
					[Date.UTC(2013,9,26, 18, 38), 17],
					[Date.UTC(2013,9,26, 18, 39), 17]
                ]
            }]
        });
	});
})
		

    

		