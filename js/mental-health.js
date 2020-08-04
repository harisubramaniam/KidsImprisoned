$(function () {

    // Prepare demo data
    var data = [
        {
            "state_name": "Alaska",
            "hc-key": "us-ak",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Alabama",
            "hc-key": "us-al",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Arkansas",
            "hc-key": "us-ar",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Arizona",
            "hc-key": "us-az",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "California",
            "hc-key": "us-ca",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Colorado",
            "hc-key": "us-co",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Connecticut",
            "hc-key": "us-ct",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Washington D.C.",
            "hc-key": "us-dc",
            "value": 1,
            "data-point": "Not Required"
        },
        {
            "state_name": "Delaware",
            "hc-key": "us-de",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Florida",
            "hc-key": "us-fl",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Georgia",
            "hc-key": "us-ga",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Hawaii",
            "hc-key": "us-hi",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Iowa",
            "hc-key": "us-ia",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Idaho",
            "hc-key": "us-id",
            "value": 1,
            "data-point": "Not Required"
        },
        {
            "state_name": "Illinois",
            "hc-key": "us-il",
            "value": 1,
            "data-point": "Not Required"
        },
        {
            "state_name": "Indiana",
            "hc-key": "us-in",
            "value": 1,
            "data-point": "Not Required"
        },
        {
            "state_name": "Kansas",
            "hc-key": "us-ks",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Kentucky",
            "hc-key": "us-ky",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Louisiana",
            "hc-key": "us-la",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Massachusetts",
            "hc-key": "us-ma",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Maryland",
            "hc-key": "us-md",
            "value": 0,
            "data-point": "Did not respond"
        },
        {
            "state_name": "Maine",
            "hc-key": "us-me",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Michigan",
            "hc-key": "us-mi",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Minnesota",
            "hc-key": "us-mn",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Missouri",
            "hc-key": "us-mo",
            "value": 0,
            "data-point": "Did not resopnd"
        },
        {
            "state_name": "Mississippi",
            "hc-key": "us-ms",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Montana",
            "hc-key": "us-mt",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "North Carolina",
            "hc-key": "us-nc",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "North Dakota",
            "hc-key": "us-nd",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Nebraska",
            "hc-key": "us-ne",
            "value": 1,
            "data-point": "Not Required"
        },
        {
            "state_name": "New Hampshire",
            "hc-key": "us-nh",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "New Jersey",
            "hc-key": "us-nj",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "New Mexico",
            "hc-key": "us-nm",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Nevada",
            "hc-key": "us-nv",
            "value": 1,
            "data-point": "Not Required"
        },
        {
            "state_name": "New York",
            "hc-key": "us-ny",
            "value": 0,
            "data-point": "Did not respond"
        },
        {
            "state_name": "Ohio",
            "hc-key": "us-oh",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Oklahoma",
            "hc-key": "us-ok",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Oregon",
            "hc-key": "us-or",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Pennsylvania",
            "hc-key": "us-pa",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Rhode Island",
            "hc-key": "us-ri",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "South Carolina",
            "hc-key": "us-sc",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "South Dakota",
            "hc-key": "us-sd",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Tennessee",
            "hc-key": "us-tn",
            "value": 1,
            "data-point": "Not Required"
        },
        {
            "state_name": "Texas",
            "hc-key": "us-tx",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Utah",
            "hc-key": "us-ut",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Virginia",
            "hc-key": "us-va",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Vermont",
            "hc-key": "us-vt",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Washington",
            "hc-key": "us-wa",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Wisconsin",
            "hc-key": "us-wi",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "West Virginia",
            "hc-key": "us-wv",
            "value": 2,
            "data-point": "Required"
        },
        {
            "state_name": "Wyoming",
            "hc-key": "us-wy",
            "value": 1,
            "data-point": "Not Required"
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
            },
            // , {
            //     from: 26,
            //     to: 50,
            //     color: 'rgba(161, 13, 3, .3)'
            // },
            {
                from: 2,
                to: 2,
                color: 'rgba(161, 13, 3, .4)'
            }]
            // , {
            //     from: 76,
            //     to: 100,
            //     color: 'rgba(161, 13, 3, .5)'
            // }, {
            //     from: 101,
            //     to: 200,
            //     color: 'rgba(161, 13, 3, .7)'
            // }, {
            //     from: 201,
            //     to: 300,
            //     color: 'rgba(161, 13, 3, .8)'
            // }]
        },

        tooltip: {
            enabled: true,
            useHTML: true,
            headerFormat: '',
            pointFormat: "<b>{point.state_name}</b><br />&#8226; Mental Health Screening: <b>{point.data-point}</b>"
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
