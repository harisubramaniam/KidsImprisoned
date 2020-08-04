$(function () {

    // Prepare demo data
    var data = [
        {
            "state_name": "Alaska",
            "hc-key": "us-ak",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Alabama",
            "hc-key": "us-al",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Arkansas",
            "hc-key": "us-ar",
            "value": 3,
            "data-point": "10 with exceptions"
        }, {
            "state_name": "Arizona",
            "hc-key": "us-az",
            "value": 2,
            "data-point": "10 no exceptions"
        }, {
            "state_name": "California",
            "hc-key": "us-ca",
            "value": 6,
            "data-point": "12 with exceptions"
        }, {
            "state_name": "Colorado",
            "hc-key": "us-co",
            "value": 3,
            "data-point": "10 with exceptions"
        }, {
            "state_name": "Connecticut",
            "hc-key": "us-ct",
            "value": 7,
            "data-point": "7"
        }, {
            "state_name": "Washington D.C.",
            "hc-key": "us-dc",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Delaware",
            "hc-key": "us-de",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Florida",
            "hc-key": "us-fl",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Georgia",
            "hc-key": "us-ga",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Hawaii",
            "hc-key": "us-hi",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Iowa",
            "hc-key": "us-ia",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Idaho",
            "hc-key": "us-id",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Illinois",
            "hc-key": "us-il",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Indiana",
            "hc-key": "us-in",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Kansas",
            "hc-key": "us-ks",
            "value": 2,
            "data-point": "10 no exceptions"
        }, {
            "state_name": "Kentucky",
            "hc-key": "us-ky",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Louisiana",
            "hc-key": "us-la",
            "value": 2,
            "data-point": "10 no exceptions"
        }, {
            "state_name": "Massachusetts",
            "hc-key": "us-ma",
            "value": 5,
            "data-point": "12 with no exceptions"
        }, {
            "state_name": "Maryland",
            "hc-key": "us-md",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Maine",
            "hc-key": "us-me",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Michigan",
            "hc-key": "us-mi",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Minnesota",
            "hc-key": "us-mn",
            "value": 2,
            "data-point": "10 no exceptions"
        }, {
            "state_name": "Missouri",
            "hc-key": "us-mo",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Mississippi",
            "hc-key": "us-ms",
            "value": 2,
            "data-point": "10 no exceptions"
        }, {
            "state_name": "Montana",
            "hc-key": "us-mt",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "North Carolina",
            "hc-key": "us-nc",
            "value": 8,
            "data-point": "6"
        }, {
            "state_name": "North Dakota",
            "hc-key": "us-nd",
            "value": 2,
            "data-point": "10 no exceptions"
        }, {
            "state_name": "Nebraska",
            "hc-key": "us-ne",
            "value": 4,
            "data-point": "11 with no exceptions"
        }, {
            "state_name": "New Hampshire",
            "hc-key": "us-nh",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "New Jersey",
            "hc-key": "us-nj",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "New Mexico",
            "hc-key": "us-nm",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Nevada",
            "hc-key": "us-nv",
            "value": 3,
            "data-point": "10 with exceptions"
        }, {
            "state_name": "New York",
            "hc-key": "us-ny",
            "value": 7,
            "data-point": "7"
        }, {
            "state_name": "Ohio",
            "hc-key": "us-oh",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Oklahoma",
            "hc-key": "us-ok",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Oregon",
            "hc-key": "us-or",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Pennsylvania",
            "hc-key": "us-pa",
            "value": 2,
            "data-point": "10 no exceptions"
        }, {
            "state_name": "Rhode Island",
            "hc-key": "us-ri",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "South Carolina",
            "hc-key": "us-sc",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "South Dakota",
            "hc-key": "us-sd",
            "value": 3,
            "data-point": "10 with exceptions"
        }, {
            "state_name": "Tennessee",
            "hc-key": "us-tn",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Texas",
            "hc-key": "us-tx",
            "value": 2,
            "data-point": "10 no exceptions"
        }, {
            "state_name": "Utah",
            "hc-key": "us-ut",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Virginia",
            "hc-key": "us-va",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Vermont",
            "hc-key": "us-vt",
            "value": 3,
            "data-point": "10 with exceptions"
        }, {
            "state_name": "Washington",
            "hc-key": "us-wa",
            "value": 9,
            "data-point": "8"
        }, {
            "state_name": "Wisconsin",
            "hc-key": "us-wi",
            "value": 2,
            "data-point": "10 no exceptions"
        }, {
            "state_name": "West Virginia",
            "hc-key": "us-wv",
            "value": 1,
            "data-point": "No minimum age"
        }, {
            "state_name": "Wyoming",
            "hc-key": "us-wy",
            "value": 1,
            "data-point": "No minimum age"
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
                to: 0,
                color: '#FFFFFF'
            }, {
                from: 1,
                to: 1,
                color: 'rgba(161, 13, 3, .1)'
            }, {
                from: 2,
                to: 2,
                color: 'rgba(161, 13, 3, .2)'
            }, {
                from: 3,
                to: 3,
                color: 'rgba(161, 13, 3, .3)'
            }, {
                from: 4,
                to: 4,
                color: 'rgba(161, 13, 3, .4)'
            }, {
                from: 5,
                to: 5,
                color: 'rgba(161, 13, 3, .5)'
            }, {
                from: 6,
                to: 6,
                color: 'rgba(161, 13, 3, .6)'
            }, {
                from: 7,
                to: 7,
                color: 'rgba(161, 13, 3, .7)'
            }, {
                from: 8,
                to: 8,
                color: 'rgba(161, 13, 3, .8)'
            }, {
                from: 9,
                to: 9,
                color: 'rgba(161, 13, 3, .9)'
            }]
        },

        tooltip: {
            enabled: true,
            useHTML: true,
            headerFormat: '',
            pointFormat: "<b>{point.state_name}</b><br />&#8226; Lower age of criminal responsibility: <b>{point.data-point}</b>"
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: 'hc-key',
            name: 'Mental Health Screening',
            states: {
                hover: {
                    color: '#171717'
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
