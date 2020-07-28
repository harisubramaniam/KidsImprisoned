$(function () {

    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Montserrat'
                // fontWeight: 400
            },
            // styledMode: true,
            // spacingLeft: 0
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
                width: 1,
                color: '#808080'
            }]
        },

        tooltip: {
            headerFormat: '<b>{point.x}</b><br>',
            valueSuffix: '',
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
            name: 'Number of schools',
            color: '#5383D1',
            lineWidth: 3.5,
            marker: {
                symbol: 'circle',
                radius: 3
            },
            data: [26000, 26900, 29400, 25700, 35100, 42100]
        }]
    });

  });