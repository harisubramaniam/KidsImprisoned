$(function () {

    // Prepare demo data
    // var data = ;

    // Setup map params
    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Montserrat'
            }
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        lang: {
            thousandsSep: ','
        }
    });

    $.getJSON("data/without-parole.json", function(dataset) {
    // Initiate the chart
    // $('#container').highcharts('Map', {
    Highcharts.mapChart('container', {
        legend: {
            enabled: true
        },

        chart: {
            backgroundColor: '#EFEEE8',
            marginTop: 0,
            marginBottom: 0
        },

        title : {
            enabled: false,
            text : '',
            floating: true,
            verticalAlign: 'top',
            margin: 0
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'top'
            }
        },

        colorAxis: {
            dataClasses: [{
                name: 'Test One',
                from: 1,
                to: 1,
                color: {
                    pattern: {
                        path: {
                            d: 'M 3 3 L 8 3 L 8 8 Z',
                            strokeWidth: 2
                        },
                        width: 4,
                        height: 4,
                        color: 'url(#highcharts-default-pattern-3)'
                    }
                }
                // color: 'url(#highcharts-default-pattern-8)'
                // color: 'rgba(216, 66, 38, .2)'
            }, {
                name: 'Test Two',
                from: 2,
                to: 2,
                color: 'rgba(216, 66, 38, .8)'
            }, {
                name: 'Test Three',
                from: 3,
                to: 3,
                color: 'rgba(171, 170, 167, .8)'
            }, {
                name: 'Test Four',
                from: 4,
                to: 4,
                color: 'rgba(171, 170, 167, .2)'
            }]
        },

        tooltip: {
            enabled: false,
            useHTML: true,
            headerFormat: '',
            pointFormat: "<b>{point.state_name}</b><br />&#8226; Youth diagnosed with COVID: <b>{point.value}</b>"
        },

        series : [{
            data : dataset,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: 'hc-key',
            name: 'Without parole',
            states: {
                hover: {
                    color: '#171717'
                }
            },
            dataLabels: {
                allowOverlap: true,
                enabled: true,
                formatter: function(){
                    if(this.key === "District of Columbia")
                        return this.key;
                }
            }
        }, {
            name: 'Separators',
            type: 'mapline',
            data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
            color: 'silver',
            showInLegend: false,
            enableMouseTracking: false
        }]
    });
    });
});
