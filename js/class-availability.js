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
                'Geometry',
                'Algebra 2',
                'Physics'
            ],
            crosshair: true
        },
        
        yAxis: {
            min: 0,
            title: {
                text: 'Percentage of facilities offering'
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
            name: 'Justice facilities',
            color: '#171717',
            data: [48, 28, 8]

        }, {
            name: 'Public high schools',
            color: '#A10D03',
            data: [84, 78, 60]
        }]
    });
});