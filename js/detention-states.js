$(function () {

    // Prepare demo data
    var data = [
        {
            "state_name": "Alaska",
            "hc-key": "us-ak",
            "value": 95
        },
        {
            "state_name": "Alabama",
            "hc-key": "us-al",
            "value": 62
        },
        {
            "state_name": "Arkansas",
            "hc-key": "us-ar",
            "value": 65
        },
        {
            "state_name": "Arizona",
            "hc-key": "us-az",
            "value": 39
        },
        {
            "state_name": "California",
            "hc-key": "us-ca",
            "value": 65
        },
        {
            "state_name": "Colorado",
            "hc-key": "us-co",
            "value": 62
        },
        {
            "state_name": "Connecticut",
            "hc-key": "us-ct",
            "value": 13
        },
        {
            "state_name": "Washington D.C.",
            "hc-key": "us-dc",
            "value": 145
        },
        {
            "state_name": "Delaware",
            "hc-key": "us-de",
            "value": 48
        },
        {
            "state_name": "Florida",
            "hc-key": "us-fl",
            "value": 48
        },
        {
            "state_name": "Georgia",
            "hc-key": "us-ga",
            "value": 54
        },
        {
            "state_name": "Hawaii",
            "hc-key": "us-hi",
            "value": 28
        },
        {
            "state_name": "Iowa",
            "hc-key": "us-ia",
            "value": 59
        },
        {
            "state_name": "Idaho",
            "hc-key": "us-id",
            "value": 43
        },
        {
            "state_name": "Illinois",
            "hc-key": "us-il",
            "value": 41
        },
        {
            "state_name": "Indiana",
            "hc-key": "us-in",
            "value": 74
        },
        {
            "state_name": "Kansas",
            "hc-key": "us-ks",
            "value": 66
        },
        {
            "state_name": "Kentucky",
            "hc-key": "us-ky",
            "value": 35
        },
        {
            "state_name": "Louisiana",
            "hc-key": "us-la",
            "value": 62
        },
        {
            "state_name": "Massachusetts",
            "hc-key": "us-ma",
            "value": 21
        },
        {
            "state_name": "Maryland",
            "hc-key": "us-md",
            "value": 56
        },
        {
            "state_name": "Maine",
            "hc-key": "us-me",
            "value": 25
        },
        {
            "state_name": "Michigan",
            "hc-key": "us-mi",
            "value": 35
        },
        {
            "state_name": "Minnesota",
            "hc-key": "us-mn",
            "value": 38
        },
        {
            "state_name": "Missouri",
            "hc-key": "us-mo",
            "value": 32
        },
        {
            "state_name": "Mississippi",
            "hc-key": "us-ms",
            "value": 48
        },
        {
            "state_name": "Montana",
            "hc-key": "us-mt",
            "value": 91
        },
        {
            "state_name": "North Carolina",
            "hc-key": "us-nc",
            "value": 16
        },
        {
            "state_name": "North Dakota",
            "hc-key": "us-nd",
            "value": 33
        },
        {
            "state_name": "Nebraska",
            "hc-key": "us-ne",
            "value": 71
        },
        {
            "state_name": "New Hampshire",
            "hc-key": "us-nh",
            "value": 10
        },
        {
            "state_name": "New Jersey",
            "hc-key": "us-nj",
            "value": 26
        },
        {
            "state_name": "New Mexico",
            "hc-key": "us-nm",
            "value": 63
        },
        {
            "state_name": "Nevada",
            "hc-key": "us-nv",
            "value": 79
        },
        {
            "state_name": "New York",
            "hc-key": "us-ny",
            "value": 13
        },
        {
            "state_name": "Ohio",
            "hc-key": "us-oh",
            "value": 74
        },
        {
            "state_name": "Oklahoma",
            "hc-key": "us-ok",
            "value": 54
        },
        {
            "state_name": "Oregon",
            "hc-key": "us-or",
            "value": 40
        },
        {
            "state_name": "Pennsylvania",
            "hc-key": "us-pa",
            "value": 40
        },
        {
            "state_name": "Rhode Island",
            "hc-key": "us-ri",
            "value": 34
        },
        {
            "state_name": "South Carolina",
            "hc-key": "us-sc",
            "value": 29
        },
        {
            "state_name": "South Dakota",
            "hc-key": "us-sd",
            "value": 84
        },
        {
            "state_name": "Tennessee",
            "hc-key": "us-tn",
            "value": 44
        },
        {
            "state_name": "Texas",
            "hc-key": "us-tx",
            "value": 54
        },
        {
            "state_name": "Utah",
            "hc-key": "us-ut",
            "value": 15
        },
        {
            "state_name": "Virginia",
            "hc-key": "us-va",
            "value": 66
        },
        {
            "state_name": "Vermont",
            "hc-key": "us-vt",
            "value": 11
        },
        {
            "state_name": "Washington",
            "hc-key": "us-wa",
            "value": 31
        },
        {
            "state_name": "Wisconsin",
            "hc-key": "us-wi",
            "value": 31
        },
        {
            "state_name": "West Virginia",
            "hc-key": "us-wv",
            "value": 71
        },
        {
            "state_name": "Wyoming",
            "hc-key": "us-wy",
            "value": 69
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
            spacingTop: 0,
            marginTop: 0
            // marginBottom: 0
        },

        title : {
            text : null,
            margin: 0
            // enabled: true,
            // floating: true
            // verticalAlign: 'top',
            // margin: 0
        },

        subtitle: {
            text: null,
            margin: 0
        },

        mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: 'top'
            }
        },

        colorAxis: {
            dataClasses: [{
                from: 0,
                to: 10,
                color: 'rgba(216, 66, 38, .1)'
            }, {
                from: 11,
                to: 21,
                color: 'rgba(216, 66, 38, .1)'
            }, {
                from: 22,
                to: 33,
                color: 'rgba(216, 66, 38, .3)'
            }, {
                from: 34,
                to: 45,
                color: 'rgba(216, 66, 38, .4)'
            }, {
                from: 46,
                to: 60,
                color: 'rgba(216, 66, 38, .5)'
            }, {
                from: 61,
                to: 80,
                color: 'rgba(216, 66, 38, .7)'
            }, {
                from: 81,
                to: 150,
                color: 'rgba(216, 66, 38, .9)'
            }]
        },

        tooltip: {
            enabled: true,
            useHTML: true,
            headerFormat: '',
            pointFormat: "<b>{point.state_name}</b><br />&#8226; Detained (Placement rate per 100,000 youth): <b>{point.value}</b>"
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: 'hc-key',
            name: 'Mental Health Screening',
            states: {
                hover: {
                    color: '#ABAAA7'
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
