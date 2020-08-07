$(function () {

    // Prepare demo data
    var data = [
        {
            "state_name": "Alaska",
            "hc-key": "us-ak",
            "value": 1,
            "data-point": "Yes"
        },
        {
            "state_name": "Alabama",
            "hc-key": "us-al",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Arkansas",
            "hc-key": "us-ar",
            "value": 1,
            "data-point": "Yes"
        },
        {
            "state_name": "Arizona",
            "hc-key": "us-az",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "California",
            "hc-key": "us-ca",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Colorado",
            "hc-key": "us-co",
            "value": 1,
            "data-point": "Yes"
        },
        {
            "state_name": "Connecticut",
            "hc-key": "us-ct",
            "value": 1,
            "data-point": "Yes"
        },
        {
            "state_name": "Delaware",
            "hc-key": "us-de",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Florida",
            "hc-key": "us-fl",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Georgia",
            "hc-key": "us-ga",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Hawaii",
            "hc-key": "us-hi",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Iowa",
            "hc-key": "us-ia",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Idaho",
            "hc-key": "us-id",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Illinois",
            "hc-key": "us-il",
            "value": 1,
            "data-point": "Yes"
        },
        {
            "state_name": "Indiana",
            "hc-key": "us-in",
            "value": 1,
            "data-point": "Yes"
        },
        {
            "state_name": "Kansas",
            "hc-key": "us-ks",
            "value": 1,
            "data-point": "Yes"
        },
        {
            "state_name": "Kentucky",
            "hc-key": "us-ky",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Louisiana",
            "hc-key": "us-la",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Massachusetts",
            "hc-key": "us-ma",
            "value": 1,
            "data-point": "Yes"
        },
        {
            "state_name": "Maryland",
            "hc-key": "us-md",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Maine",
            "hc-key": "us-me",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Michigan",
            "hc-key": "us-mi",
            "value": 1,
            "data-point": "Yes"
        },
        {
            "state_name": "Minnesota",
            "hc-key": "us-mn",
            "value": 1,
            "data-point": "Yes"
        },
        {
            "state_name": "Missouri",
            "hc-key": "us-mo",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Mississippi",
            "hc-key": "us-ms",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Montana",
            "hc-key": "us-mt",
            "value": 1,
            "data-point": "Yes"
        },
        {
            "state_name": "North Carolina",
            "hc-key": "us-nc",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "North Dakota",
            "hc-key": "us-nd",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Nebraska",
            "hc-key": "us-ne",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "New Hampshire",
            "hc-key": "us-nh",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "New Jersey",
            "hc-key": "us-nj",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "New Mexico",
            "hc-key": "us-nm",
            "value": 1,
            "data-point": "Yes"
        },
        {
            "state_name": "Nevada",
            "hc-key": "us-nv",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "New York",
            "hc-key": "us-ny",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Ohio",
            "hc-key": "us-oh",
            "value": 1,
            "data-point": "Yes"
        },
        {
            "state_name": "Oklahoma",
            "hc-key": "us-ok",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Oregon",
            "hc-key": "us-or",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Pennsylvania",
            "hc-key": "us-pa",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Rhode Island",
            "hc-key": "us-ri",
            "value": 1,
            "data-point": "Yes"
        },
        {
            "state_name": "South Carolina",
            "hc-key": "us-sc",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "South Dakota",
            "hc-key": "us-sd",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Tennessee",
            "hc-key": "us-tn",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Texas",
            "hc-key": "us-tx",
            "value": 1,
            "data-point": "Yes"
        },
        {
            "state_name": "Utah",
            "hc-key": "us-ut",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Virginia",
            "hc-key": "us-va",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Vermont",
            "hc-key": "us-vt",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Washington",
            "hc-key": "us-wa",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Wisconsin",
            "hc-key": "us-wi",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "West Virginia",
            "hc-key": "us-wv",
            "value": 0,
            "data-point": "No"
        },
        {
            "state_name": "Wyoming",
            "hc-key": "us-wy",
            "value": 0,
            "data-point": "No"
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
                color: 'rgba(216, 66, 38, .9)'
            }]
        },

        tooltip: {
            enabled: true,
            useHTML: true,
            headerFormat: '',
            pointFormat: "<b>{point.state_name}</b><br />&#8226; Juvenile blended: <b>{point.data-point}</b>"
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
                enabled: false,
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
