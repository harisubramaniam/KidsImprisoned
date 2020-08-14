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
            fontFamily: 'Montserrat',
            fontWeight: 400
        },
        lang: {
            thousandsSep: ','
        }
    }
})
Highcharts.chart('container', {
    chart: {
        type: 'column',
        spacingLeft: 0
    },
    
    credits: {
        text: '',
        href: ''
    },
    
    exporting: {
        enabled: false
    },

    title: {
        text: null
    },
    
    subtitle: {
        text: null
    },
    
    xAxis: {
        categories: [
            'California',
            'Florida',
            'Texas',
            'Illinois',
            'North Carolina',
            'New York City',
            'Wisconsin',
            'Kentucky',
            'Lousiana',
            'Colorado',
            'Virginia'
        ],
        crosshair: true
    },
    
    yAxis: {
        min: 0,
        title: {
            text: 'Difference between Black and White suspension rates'
        }
    },
    
    tooltip: {
        formatter: function (){
            return '<b>' + this.x + '</b><br />\u25CF Disparity rate: <b>' + this.y + '</b><br />\u25CF Enrollment: <b>'+ this.point.totEnrollment + '</b>';
        }
    },
    
    plotOptions: {
        column: {
            events: {
                legendItemClick: function() {
                    return false;
                }
            },
            dataLabels: {
                enabled: true
            },
            pointPadding: 0.05,
            borderWidth: 0
        }
    },
    
    series: [{
        name: 'Disparity rates',
        color: '#D84226',
        data: [{
            y: 3.62,
            totEnrollment: '6,329,883'
        }, {
            y: 2.11,
            totEnrollment: '2,846,857'
        }, {
            y: 5.01,
            totEnrollment: '5,431,910'
        }, {
            y: 5.42,
            totEnrollment: '1,900,519'
        }, {
            y: 3.85,
            totEnrollment: '1,533,022'
        }, {
            y: 3.00,
            totEnrollment: '1,126,501'
        }, {
            y: 10.11,
            totEnrollment: '858,833'
        }, {
            y: 4.21,
            totEnrollment: '646,766'
        }, {
            y: 2.41,
            totEnrollment: '717,109'
        }, {
            y: 3.14,
            totEnrollment: '911,536'
        }, {
            y: 4.09,
            totEnrollment: '1,290,513'
        }]
    }]
});