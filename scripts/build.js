({
    baseUrl: ".",
    paths: {
		"jquery": "./jquery-1.10.2.min",
		"highcharts": "./highcharts"
	},
	shim: {
		"highcharts": {
			deps: ["jquery"]
		}
	},
    name: "main",
    out: "main-built.js"
})