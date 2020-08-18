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
            href: 'javascript:window.open("https://www.ojjdp.gov/ojstatbb/special_topics/qa11803.asp?qaDate=2017", "_blank")',
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

    $('#commitment-rates').highcharts({
        title: {
            style: {
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                fontSize: '1.40rem'
            },
            text: 'Juvenile commitment rates by race/ethnicity, 1997-2017',
            // x: -20 //center
        },
        subtitle: {
            style: {
                fontFamily: 'Montserrat',
                fontWeight: '300',
                fontSize: '90%'
            },
            align: 'center',
            text: 'Minority youth are more likely to be committed to a facility as a result of a court ordered disposition compared to white youth'
        },
        xAxis: {
            categories: ['1997','1999','2001','2003','2006','2007','2010','2011','2013','2015','2017'],
        },
        yAxis: {
            title: {
                text: ''
            },
            // tickInterval: 100,
            min: 0, 
            plotLines: [{
                value: 0,
                width: 5,
                color: '#ABAAA7'
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
            color: '#2F313B',
            marker: {
                enabled: true,
                symbol: 'diamond',
                radius: 3,
                fillColor: '#D84226'
            },
            data: [143, 151, 154, 140, 124, 114, 92, 80, 69, 60, 55]
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
            data: [477, 456, 401, 341, 314, 297, 236, 204, 171, 149, 121]
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
            data: [696, 672, 631, 519, 502, 482, 407, 347, 294, 275, 226]
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
            data: [346, 415, 438, 354, 353, 317, 269, 268, 254, 185, 149]
        }, 
        {
            name: 'Hispanic',
            color: '#FF8F00',
            marker: {
                enabled: true,
                symbol: 'square',
                radius: 3,
                fillColor: '#D84226'
            },
            data: [338, 316, 250, 230, 207, 192, 147, 133, 111, 89, 71]
        }]
    });
});
