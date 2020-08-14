$(function () {

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

    $.getJSON("data/without-parole.json", function(data) {
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

            plotOptions: {
                series: {
                    events: {
                        legendItemClick: function () {
                            return false;
                        }
                    },
                    allowPointSelect: false,
                    enableMouseTracking: false
                }
            },

            legend: {
                layout: 'vertical',
                align: 'bottom',
                y: 20,
                x: 150,
                borderWidth: 0
            },

            mapNavigation: {
                enabled: false,
                buttonOptions: {
                    verticalAlign: 'top'
                }
            },

            colorAxis: {
                dataClasses: [{
                    name: 'JLWOP is an option, but no youth serving a life sentence',
                    from: 1,
                    to: 1,
                    color: {
                        patternIndex: 3
                    }
                    // color: 'rgba(216, 66, 38, .2)'
                }, {
                    name: 'JLWOP is an option, youth are serving life sentences',
                    from: 2,
                    to: 2,
                    color: 'rgba(216, 66, 38, .8)'
                }, {
                    name: 'JLWOP is banned, no youth serving a life sentence',
                    from: 3,
                    to: 3,
                    // color: 'rgba(171, 170, 167, .8)'
                    color: {
                        patternIndex: 1,
                        fillColor: {
                            pattern: {
                                color: '#33ff66'
                            }
                        }
                    },
                    
                }, {
                    name: 'JLWOP is banned, but there are youth serving a life sentence ',
                    from: 4,
                    to: 4,
                    color: 'rgba(47, 49, 59, .8)'
                }]
            },

            tooltip: {
                enabled: false,
                useHTML: false,
                headerFormat: '',
                pointFormat: "<b>{point.state_name}</b><br />&#8226; Parole: <b>{point.value}</b>"
            },

            series : [{
                // keys: ['name','hc-key','value','color.pattern.color'],
                data : data,
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: 'name',
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
