$(function () {

    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Montserrat'
                // fontWeight: 400
            },
            // backgroundColor: '#EFEEE8'
        },
        lang: {
            thousandsSep: ','
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        }
    });

    $('#container').highcharts({
        chart: {
            type: 'line'
        },

        title: {
            text: null
        },

        subtitle: {
            text: null
        },

        legend: {
            enabled: false
        },
  
        xAxis: {
            categories: ['2003-04', '2005-06', '2007', '2009', '2015', '2017'],
        },

        yAxis: {
            labels: {
                format: '{value:,.0f}'
            },
            title: {
                text: 'Number of public schools'
            },
            min: 22500, 
        
            plotLines: [{
                value: 0,
                width: 2,
                color: '#ABAAA7'
            }]
        },

        tooltip: {
            headerFormat: '<b>{point.x}</b><br>',
            valueDecimals: 0
        },

        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            },
            series: {
                animation: {
                    duration: 3000
                },
                events: {
                    legendItemClick: function() {
                        return false;
                    }
                }
            }
        },

        series: [{
            name: 'Number of schools with public resource officers',
            color: '#232947',
            lineWidth: 3.5,
            marker: {
                symbol: 'triangle',
                radius: 3
            },
            data: [{
                y: 26000,
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 26900,
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 29400,
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 25700,
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 35100,
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 42100,
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }]
        }]
    });
  });