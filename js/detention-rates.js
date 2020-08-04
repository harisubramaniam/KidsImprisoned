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
            text: 'U.S. Deparmentt of Justice, OJJDP',
            href: 'https://www.ojjdp.gov/ojstatbb/special_topics/qa11802.asp?qaDate=2017',
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

    $('#detention-rates').highcharts({
        title: {
            style: {
                fontFamily: 'Montserrat',
                fontWeight: '400',
                fontSize: '1.40rem'
                // fontWeight: 'normal'
            },
            text: 'Juvenile detention rates by race/ethnicity, 1997-2017',
            // x: -20 //center
        },
        subtitle: {
            useHTML: true,
            style: {
                fontFamily: 'Montserrat',
                fontWeight: '300',
                fontSize: '75%'
                // fontWeight: 'normal'
            },
            align: 'center',
            text: 'Minority youth are more likely to be detained while waiting for their cases to be processed. <br>&#42;&#42;Minority group includes black, Hispanic, American Indian/Alaskan Native, Asian/Pacific Islander youth, <br>and those identified as other race.'
            // x: -10
        },
        xAxis: {
            categories: ['1997','1999','2001','2003','2006','2007','2010','2011','2013','2015','2017'],
        },
        yAxis: {
            title: {
                text: ''
            },
            tickInterval: 50,
            min: 0, 
            plotLines: [{
                value: 0,
                width: 5,
                color: '#808080'
            }]
        },

        tooltip: {
            headerFormat: '<b>{point.x}</b><br>',
            valueSuffix: '',
            valueDecimals: 0
        },

        plotOptions: {
            series: {
                animation: {
                    duration: 2000
                }
            }
        },

        series: [{
            name: 'White',
            color: '#214573',
            marker: {
                enabled: true,
                radius: 2
            },
            data: [54,54,47,43,40,33,31,29,25,26]
        },
        {
            name: 'Minority',
            color: '#FF6666',
            marker: {
                enabled: true,
                radius: 2
        },
            data: [177,169,149,140,139,131,108,99,92,81,77]
        }, 
        {
            name: 'Black',
            color: '#6bb6ff',
            marker: {
                enabled: true,
                radius: 2
            },
            data: [264,258,223,210,221,215,179,170,166,153,151]
        }, 
        {
            name: 'American Indian',
            color: '#C06C84',
            marker: {
                enabled: true,
                radius: 2
            },
            data: [125,113,112,110,116,93,88,89,75,74,83]
        }, 
        {
            name: 'Hispanic',
            color: '#FF8F00',
            marker: {
                enabled: true,
                radius: 2
            },
            data: [122,116,109,102,97,90,78,68,60,50,44]
        }]
    });
});