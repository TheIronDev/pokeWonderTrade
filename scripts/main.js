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
	    	    pointFormat: '{series.name} : <b>{point.percentage:.1f}%</b>'
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
	                ['Guys',   216],
	                ['Girls', 84]
	            ]
	        }]
	    });
	});
})
		

    

		