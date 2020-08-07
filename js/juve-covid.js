$(function () {

    // Prepare demo data
    var data = [
        {
            "state_name": "Alaska",
            "hc-key": "us-ak",
            "value": 1
        },
        {
            "state_name": "Alabama",
            "hc-key": "us-al",
            "value": 18
        },
        {
            "state_name": "Arkansas",
            "hc-key": "us-ar",
            "value": 3
        },
        {
            "state_name": "Arizona",
            "hc-key": "us-az",
            "value": 143
        },
        {
            "state_name": "California",
            "hc-key": "us-ca",
            "value": 123
        },
        {
            "state_name": "Colorado",
            "hc-key": "us-co",
            "value": 11
        },
        {
            "state_name": "Connecticut",
            "hc-key": "us-ct",
            "value": 9
        },
        {
            "state_name": "Washington D.C.",
            "hc-key": "us-dc",
            "value": 10
        },
        {
            "state_name": "Delaware",
            "hc-key": "us-de",
            "value": 0
        },
        {
            "state_name": "Florida",
            "hc-key": "us-fl",
            "value": 311
        },
        {
            "state_name": "Georgia",
            "hc-key": "us-ga",
            "value": 71
        },
        {
            "state_name": "Hawaii",
            "hc-key": "us-hi",
            "value": 0
        },
        {
            "state_name": "Iowa",
            "hc-key": "us-ia",
            "value": 12
        },
        {
            "state_name": "Idaho",
            "hc-key": "us-id",
            "value": 0
        },
        {
            "state_name": "Illinois",
            "hc-key": "us-il",
            "value": 44
        },
        {
            "state_name": "Indiana",
            "hc-key": "us-in",
            "value": 26
        },
        {
            "state_name": "Kansas",
            "hc-key": "us-ks",
            "value": 0
        },
        {
            "state_name": "Kentucky",
            "hc-key": "us-ky",
            "value": 0
        },
        {
            "state_name": "Louisiana",
            "hc-key": "us-la",
            "value": 33
        },
        {
            "state_name": "Massachusetts",
            "hc-key": "us-ma",
            "value": 19
        },
        {
            "state_name": "Maryland",
            "hc-key": "us-md",
            "value": 42
        },
        {
            "state_name": "Maine",
            "hc-key": "us-me",
            "value": 1
        },
        {
            "state_name": "Michigan",
            "hc-key": "us-mi",
            "value": 29
        },
        {
            "state_name": "Minnesota",
            "hc-key": "us-mn",
            "value": 0
        },
        {
            "state_name": "Missouri",
            "hc-key": "us-mo",
            "value": 54
        },
        {
            "state_name": "Mississippi",
            "hc-key": "us-ms",
            "value": 6
        },
        {
            "state_name": "Montana",
            "hc-key": "us-mt",
            "value": 0
        },
        {
            "state_name": "North Carolina",
            "hc-key": "us-nc",
            "value": 1
        },
        {
            "state_name": "North Dakota",
            "hc-key": "us-nd",
            "value": 0
        },
        {
            "state_name": "Nebraska",
            "hc-key": "us-ne",
            "value": 3
        },
        {
            "state_name": "New Hampshire",
            "hc-key": "us-nh",
            "value": 0
        },
        {
            "state_name": "New Jersey",
            "hc-key": "us-nj",
            "value": 29
        },
        {
            "state_name": "New Mexico",
            "hc-key": "us-nm",
            "value": 4
        },
        {
            "state_name": "Nevada",
            "hc-key": "us-nv",
            "value": 0
        },
        {
            "state_name": "New York",
            "hc-key": "us-ny",
            "value": 4
        },
        {
            "state_name": "Ohio",
            "hc-key": "us-oh",
            "value": 73
        },
        {
            "state_name": "Oklahoma",
            "hc-key": "us-ok",
            "value": 0
        },
        {
            "state_name": "Oregon",
            "hc-key": "us-or",
            "value": 3
        },
        {
            "state_name": "Pennsylvania",
            "hc-key": "us-pa",
            "value": 7
        },
        {
            "state_name": "Rhode Island",
            "hc-key": "us-ri",
            "value": 3
        },
        {
            "state_name": "South Carolina",
            "hc-key": "us-sc",
            "value": 20
        },
        {
            "state_name": "South Dakota",
            "hc-key": "us-sd",
            "value": 0
        },
        {
            "state_name": "Tennessee",
            "hc-key": "us-tn",
            "value": 117
        },
        {
            "state_name": "Texas",
            "hc-key": "us-tx",
            "value": 261
        },
        {
            "state_name": "Utah",
            "hc-key": "us-ut",
            "value": 8
        },
        {
            "state_name": "Virginia",
            "hc-key": "us-va",
            "value": 37
        },
        {
            "state_name": "Vermont",
            "hc-key": "us-vt",
            "value": 0
        },
        {
            "state_name": "Washington",
            "hc-key": "us-wa",
            "value": 0
        },
        {
            "state_name": "Wisconsin",
            "hc-key": "us-wi",
            "value": 0
        },
        {
            "state_name": "West Virginia",
            "hc-key": "us-wv",
            "value": 0
        },
        {
            "state_name": "Wyoming",
            "hc-key": "us-wy",
            "value": 1
        }
    ];

    // Setup map params
    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Montserrat'
            }
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        lang: {
            thousandsSep: ','
        }
    });

    // Initiate the chart
    // $('#container').highcharts('Map', {
    Highcharts.mapChart('container', {
        legend: {
            enabled: false
        },

        chart: {
            backgroundColor: '#EFEEE8',
            marginTop: 0,
            marginBottom: 0
        },

        title : {
            enabled: false,
            text : '',
            floating: true,
            verticalAlign: 'top',
            margin: 0
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'top'
            }
        },

        colorAxis: {
            dataClasses: [{
                from: 0,
                to: 0,
                color: '#FFFFFF'
            }, {
                from: 1,
                to: 5,
                color: 'rgba(216, 66, 38, .1)'
            }, {
                from: 6,
                to: 25,
                color: 'rgba(216, 66, 38, .2)'
            }, {
                from: 26,
                to: 50,
                color: 'rgba(216, 66, 38, .3)'
            }, {
                from: 51,
                to: 75,
                color: 'rgba(216, 66, 38, .4)'
            }, {
                from: 76,
                to: 100,
                color: 'rgba(216, 66, 38, .5)'
            }, {
                from: 101,
                to: 200,
                color: 'rgba(216, 66, 38, .7)'
            }, {
                from: 201,
                to: 315,
                color: 'rgba(216, 66, 38, .9)'
            }]
        },

        tooltip: {
            enabled: true,
            useHTML: true,
            headerFormat: '',
            pointFormat: "<b>{point.state_name}</b><br />&#8226; Youth diagnosed with COVID: <b>{point.value}</b>"
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: 'hc-key',
            name: 'Youth diagnosed with COVID',
            states: {
                hover: {
                    color: 'rgba(216, 66, 38, .1)'
                }
            },
            dataLabels: {
                allowOverlap: true,
                enabled: true,
                formatter: function(){
                    if(this.key === "District of Columbia")
                        return this.key;
                }
            }
        }, {
            name: 'Separators',
            type: 'mapline',
            data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
            color: 'silver',
            showInLegend: false,
            enableMouseTracking: false
        }]
    });
});
