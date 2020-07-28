$(function () {
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
                text: 'Percent'
            }
        },
        
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
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
            name: 'Disparity',
            color: '#A10D03',
            data: [3.03, 1.80, 2.57, 2.75, 2.15, 1.76, 4.86, 3.08, 1.50, 2.28, 2.44]

        }]
    });
});