$(function () {

    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Montserrat',
                fontWeight: 400
            },
            // styledMode: true,
            type: 'line',
            spacingLeft: 0
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

    $('#container1').highcharts({

        title: {
            style: {
                fontFamily: 'Montserrat',
                fontWeight: '400',
                fontSize: '1.40rem'
                // fontWeight: 'normal'
            },
            text: 'All offenses<br>Arrests per 100,000 persons ages 10-17',
            x: -20 //center
        },

        subtitle: {
            style: {
                fontFamily: 'Montserrat',
                fontWeight: '300',
                fontSize: '0.90rem'
                // fontWeight: 'normal'
            },
            text: 'Click on a legend name to add or remove a race'
        },
  
        xAxis: {
            categories: ['2010','2011','2012','2013','2014','2015','2016','2017','2018'],
        },

        yAxis: {
            title: {
                text: 'Rate'
            },
            min: 0, 
        
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },

        tooltip: {
            valueSuffix: '',
            valueDecimals: 1
        },

        series: [
            {
                name: 'White',
                color: '#214573',
                marker: {
                    enabled: true,
                    radius: 2
                },
                data: [4242.9, 3787.3, 3362.7, 2706.4, 2548.9, 2302.6, 2112.7, 1981.6, 1792.7]
            }, 
            {
                name: 'Minority',
                visible: false,
                color: '#FF6666',
                marker: {
                    enabled: true,
                    radius: 2
                },
                data: [6954.9, 6335.7, 5903.1, 5028.5, 4782.6, 4252.0, 3999.2, 3792.3, 3365.3]
            },
            {
                name: 'Black',
                color: '#6bb6ff',
                marker: {
                    enabled: true,
                    radius: 2
                },
                data: [9137.1, 8375.6, 7817.1, 6798.1, 6537.5, 5752.7, 5447.9, 5149.6, 4618.3]
            }, 
            {
                name: 'American Indian',
                visible: false,
                color: '#C06C84',
                marker: {
                    enabled: true,
                    radius: 2
                },
                data: [3348.3, 3297.9, 3053.2, 2682.6, 2371.4, 2605.8, 2405.8, 2727.5, 2251.2]
            }, 
            {
                name: 'Asian',
                visible: false,
                color: '#FF8F00',
                marker: {
                    enabled: true,
                    radius: 2
                },
                data: [1293.4, 1113.7, 1154.5, 692.4, 622.2, 661.0, 610.3, 548.0, 457.6]
            }
        ]
    });

  });