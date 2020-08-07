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
                'January',
                'February',
                'March',
                'April'
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
            // formatter: function() {
            //     return this.series.chart.enableTooltip ? 'Tooltip visible' : false;
            // }
        },
        
        plotOptions: {
            column: {
                events: {
                    legendItemClick: function() {
                        return false;
                    }
                },
                dataLabels: {
                    useHTML: true,
                    enabled: true
                },
                pointPadding: 0.05,
                borderWidth: 0
            }
        },
        
        series: [{
            name: 'Number of youth admitted',
            color: '#D84226',
            data: [210, 207, 148, 100]
        }]
    });
});