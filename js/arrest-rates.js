$(function () {

    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Montserrat',
                fontWeight: 400
            },
            // backgroundColor: '#EFEEE8'
            type: 'line'
        },
        lang: {
            thousandsSep: ','
        },
        credits: {
            enabled: true,
            text: 'U.S. Department of Justice, OJJDP',
            href: 'javascript:window.open("https://www.ojjdp.gov/ojstatbb/special_topics/qa11502.asp?qaDate=2018", "_blank")',
            position: {
                x: 10,
                align: 'left',
                verticalAlign: 'bottom'
            }
        },
        exporting: {
            enabled: false
        }
    });

    $('#arrest-rates').highcharts({
        title: {
            style: {
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                fontSize: '1.30rem'
            },
            text: 'Juvenile arrest rates (per 100,000) by race, 1998-2018',
            x: -20 //center
        },
        subtitle: {
            useHTML: true,
            style: {
                fontFamily: 'Montserrat',
                fontWeight: '400',
                fontSize: '90%'
            },
            align: 'center',
            text: 'Minority youth are arrested at higher rates than white youth, data shows. <br>&#42;&#42;No data available to represent Hispanic youth.'
        },
        xAxis: {
            categories: ['1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018'],
        },
        yAxis: {
            title: {
                text: ''
            },
            // tickInterval: 100,
            min: 0, 
            plotLines: [{
                value: 0,
                width: 1,
                color: '#ABAAA7'
            }]
        },

        tooltip: {
            headerFormat: '<b>{point.x}</b><br>',
            valueSuffix: '',
            valueDecimals: 2
        },

        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            },
            series: {
                animation: {
                    duration: 2000
                },
                events: {
                    legendItemClick: function() {
                        return false;
                    }
                }
            }
        },

        series: [{
            name: 'White',
            color: '#2F313B',
            marker: {
                enabled: true,
                symbol: 'diamond',
                radius: 3,
                fillColor: '#D84226'
            },
            data: [6784.50,6213.20,5993.60,5665.10,5732,5521.30,5420.80,5197.80,5371.80,5270.30,5123.60,4644.20,4242.90,3787.30,3362.70,2706.40,2548.90,2302.60,2112.70,1981.60,1792.70]
        },
        {
            name: 'Minority',
            color: '#232947',
            marker: {
                enabled: true,
                symbol: 'triangle',
                radius: 3,
                fillColor: '#D84226'
        },
            data: [10344.60,9258.10,8754.20,8538.70,8342.30,8305.70,8224.10,8500,8603.10,8524.40,8307.60,7742.80,6954.90,6335.70,5903.10,5028.50,4782.60,4252,3999.20,3792.30,3365.30]
        }, 
        {
            name: 'Black',
            color: '#D84226',
            marker: {
                enabled: true,
                symbol: 'triangle-down',
                radius: 3,
                fillColor: '#D84226'
            },
            data: [12673.70,11293.10,10738.60,10573.30,10255.70,10287.40,10278,10745.50,10954.20,10920.50,10755.20,10100.80,9137.10,8375.60,7817.10,6798.10,6537.50,5752.70,5447.90,5149.60,4618.30]
        }, 
        {
            name: 'American Indian',
            color: '#C06C84',
            marker: {
                enabled: true,
                symbol: 'circle',
                radius: 3,
                fillColor: '#D84226'
            },
            data: [6562.60,6344.30,5687,5028.20,5266,4935.60,4630.20,4683.90,4397.10,4307.30,3826.80,3665.80,3348.30,3297.90,3053.20,2682.60,2371.40,2605.80,2405.80,2727.50,2251.20]
        }]
    });
});
