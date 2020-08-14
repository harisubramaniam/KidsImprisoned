$(function (H) {
    function deferRender (proceed) {
        var series = this, 
            $renderTo = $(this.chart.container.parentNode);

        // It is appeared, render it
        if ($renderTo.is(':appeared') || !series.options.animation) {
            proceed.call(series);
            
        // It is not appeared, halt renering until appear
        } else  {
            $renderTo.appear(); // Initialize appear plugin
            $renderTo.on('appear', function () {
                proceed.call(series);
            });
        }
    };
    
    H.wrap(H.Series.prototype, 'render', deferRender);
    
}(Highcharts));

Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Montserrat'
        },
        // spacingLeft: 0
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
        backgroundColor: '#FAF4E1',
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
        title: {
            text: 'Age Group'
        },
        categories: ['10 and Under', '11 to 15', '16 to 20', '21 to 25', '26 to 30', '31 to 35', '36 to 40', '41 to 45', '46 to 50', '51 to 55', '56 to 60', '61 to 65', '66 and over'],
    },

    yAxis: {
        title: {
            text: 'Offender Percentage'
        },
        min: 0, 
    
        plotLines: [{
            value: 0,
            width: 1,
            color: '#ABAAA7'
        }]
    },

    tooltip: {
        // headerFormat: '<b>Age Group - {point.x}</b><br>',
        // pointFormat: '{series.name}: <b>{point.y}%</b>',
        // valueSuffix: '',
        // valueDecimals: 3
        formatter: function (){
            return '<b>Age Group: ' + this.x + '</b><br />\u25CF Total Population: <b>' + this.point.totPopulation + '</b><br />\u25CF Offender Population: <b>'+ this.point.offPopulation + '</b><br />\u25CF Offender % of population: <b>' + this.y + ' %</b>';
        }
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
        name: 'Offender % of population',
        color: '#232947',
        lineWidth: 3.5,
        marker: {
            symbol: 'circle',
            radius: 3
        },
        // data: [0.044,1.124,3.404,3.499,3.308,2.89,2.388,1.634,1.273,0.893,0.657,0.297,0.103]
        data: [
            {
                y: 0.044,
                totPopulation: '44,132,850',
                offPopulation: '19,241',
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 1.124,
                totPopulation: '20,824,737',
                offPopulation: '234,056',
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 3.404,
                totPopulation: '21,189,028',
                offPopulation: '721,308',
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 3.499,
                totPopulation: '22,139,791',
                offPopulation: '774,591',
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 3.308,
                totPopulation: '23,410,038',
                offPopulation: '774,517',
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 2.890,
                totPopulation: '21,977,739',
                offPopulation: '635,078',
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 2.388,
                totPopulation: '21,184,678',
                offPopulation: '505,818',
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 1.634,
                totPopulation: '19,555,942',
                offPopulation: '319,449',
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 1.273,
                totPopulation: '20,841,058',
                offPopulation: '265,329',
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 0.893,
                totPopulation: '21,227,129',
                offPopulation: '189,610',
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 0.657,
                totPopulation: '21,782,993',
                offPopulation: '143,079',
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 0.297,
                totPopulation: '19,717,017',
                offPopulation: '58,523',
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 0.103,
                totPopulation: '48,704,501',
                offPopulation: '50,299',
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }
        ]
    }]
});
