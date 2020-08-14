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
            thousandsSep: ',',
            noData: 'Not available'
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
            'White',
            'Black',
            'Hispanic',
            'Asian',
            'Pacific Islander',
            'American Indian/Alaska Native',
            'Two or more races'
        ],
        crosshair: true
    },
    
    yAxis: {
        min: 0,
        title: {
            text: 'Percent of teachers'
        }
    },
    
    tooltip: {
        headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}:&nbsp;</td>' +
            '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
        footerFormat: '</table>',
        // shared: true,
        useHTML: true
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
        name: '1999-2000',
        color: '#232947',
        data: [84, 8, 6, 'NA', 'NA', 1, 'NA']
    }, {
        name: '2017-18',
        color: '#D84226',
        data: [79, 7, 9, 2, '#', 1, 2]
    }]
});
