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
        // categories: ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2015', '2017'],
        type: 'datetime',
        endOnTick: true,
        showFirstLabel: true,
        showLastLabel: true,
        startOnTick: true,
        dateTimeLabelFormats: {
            year: '%Y'

        }
    },

    yAxis: {
        labels: {
            format: '{value:,.0f}'
        },
        title: {
            text: 'Number of public schools'
        },
        min: 20000, 
    
        plotLines: [{
            value: 0,
            width: 2,
            color: '#ABAAA7'
        }]
    },

    tooltip: {
        xDateFormat: '<b>%Y</b>',
        pointFormat: 'Number of schools with police: <b>{point.y}</b>',
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
        name: 'Number of schools with police',
        color: '#232947',
        pointStart: Date.UTC(2003, 0, 1),
        pointInterval: 365 * 24 * 3600 * 1000,

        lineWidth: 3.5,
        marker: {
            symbol: 'diamond',
            radius: 5,
            fillColor: '#D84226'
        },

        data: [
            [Date.UTC(2003), 26000],
            [Date.UTC(2005), 26900],
            [Date.UTC(2007), 29400],
            [Date.UTC(2009), 25700],
            [Date.UTC(2015), 35100],
            [Date.UTC(2017), 42100]
        ]
    }]
});
