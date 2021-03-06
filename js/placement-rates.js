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
            href: 'javascript:window.open("https://www.ojjdp.gov/ojstatbb/special_topics/qa11801.asp?qaDate=2017", "_blank")',
            style: {
                fontSize: '12px'
            },
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

    $('#placement-rates').highcharts({
        title: {
            style: {
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                fontSize: '1.1rem'
            },
            text: 'Juvenile residential placement rates by race/ethnicity, 1997-2017',
            x: -10 //center
        },
        subtitle: {
            style: {
                fontFamily: 'Montserrat',
                fontWeight: '300',
                fontSize: '90%'
            },
            align: 'center',
            x: 10,
            text: 'The majority of youth sent to residential facilities are youth of color'
        },
        xAxis: {
            categories: ['1997','1999','2001','2003','2006','2007','2010','2011','2013','2015','2017'],
        },
        yAxis: {
            title: {
                text: ''
            },
            tickInterval: 200,
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
            data: [201,208,208,189,170,157,128,112,100,86,83]
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
            data: [661,630,553,488,464,436,354,306,266,233,201]
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
            data: [968,937,857,742,743,714,606,520,464,433,383]
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
            data: [490,542,556,468,476,416,369,361,334,261,235]
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
            data: [468,435,360,335,309,284,228,202,173,142,118]
        }]
    });
});
