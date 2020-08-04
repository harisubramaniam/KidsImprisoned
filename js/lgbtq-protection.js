$(function () {

    // Prepare demo data
    var data = [
        {
            "state_name": "Alaska",
            "hc-key": "us-ak",
            "value": 2,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation<br>&#8226;&nbsp;Policy protecting gender identity"
        },
        {
            "state_name": "Alabama",
            "hc-key": "us-al",
            "value": 0,
            "data-point": "&#8226;&nbsp;No protection"
        },
        {
            "state_name": "Arkansas",
            "hc-key": "us-ar",
            "value": 0,
            "data-point": "&#8226;&nbsp;No protections"
        },
        {
            "state_name": "Arizona",
            "hc-key": "us-az",
            "value": 3,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation<br>&#8226;&nbsp;Policy protecting gender identity<br>&#8226;&nbsp;Regulation protecting sexual orientation"
        },
        {
            "state_name": "California",
            "hc-key": "us-ca",
            "value": 6,
            "data-point": "&#8226;&nbsp;Statute protecting sexual orientation<br>&#8226;&nbsp;Statute protecting gender identity<br>&#8226;&nbsp;Policy protecting sexual orientation<br>&#8226;&nbsp;Policy protecting gender identity<br>&#8226;&nbsp;Regulation protecting sexual orientation<br>&#8226;&nbsp;Regulation protecting gender identity"
        },
        {
            "state_name": "Colorado",
            "hc-key": "us-co",
            "value": 2,
            "data-point": "&#8226;&nbsp;Nondiscrimination policy protecting LGBTQ youth<br>&#8226;&nbsp;Regulation protecting sexual orientation"
        },
        {
            "state_name": "Connecticut",
            "hc-key": "us-ct",
            "value": 1,
            "data-point": "&#8226;&nbsp;Nondiscrimination policy protecting LGBTQ youth"
        },
        // {
        //     "state_name": "Washington D.C.",
        //     "hc-key": "us-dc",
        //     "value": 8,
        //     "data-point": ""
        // },
        {
            "state_name": "Delaware",
            "hc-key": "us-de",
            "value": 2,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation<br>&#8226;&nbsp;Policy protecting gender identity"
        },
        {
            "state_name": "Florida",
            "hc-key": "us-fl",
            "value": 2,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation<br>&#8226;&nbsp;Regulation protecting sexual orientation"
        },
        {
            "state_name": "Georgia",
            "hc-key": "us-ga",
            "value": 1,
            "data-point": "&#8226;&nbsp;Nondiscrimination policy for LGBTQ youth"
        },
        {
            "state_name": "Hawaii",
            "hc-key": "us-hi",
            "value": 1,
            "data-point": "&#8226;&nbsp;Nondiscrimination policy protecting LGBTQ youth"
        },
        {
            "state_name": "Iowa",
            "hc-key": "us-ia",
            "value": 2,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation<br>&#8226;&nbsp;Policy protecting gender identity"
        },
        {
            "state_name": "Idaho",
            "hc-key": "us-id",
            "value": 2,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation<br>&#8226;&nbsp;Nondiscrimination policy protecting LGBTQ youth"
        },
        {
            "state_name": "Illinois",
            "hc-key": "us-il",
            "value": 1,
            "data-point": "&#8226;&nbsp;Nondiscrimination policy protecting LGBTQ youth"
        },
        {
            "state_name": "Indiana",
            "hc-key": "us-in",
            "value": 1,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation"
        },
        {
            "state_name": "Kansas",
            "hc-key": "us-ks",
            "value": 1,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation"
        },
        {
            "state_name": "Kentucky",
            "hc-key": "us-ky",
            "value": 1,
            "data-point": "&#8226;&nbsp;Nondiscrimination policy protecting LGBTQ youth"
        },
        {
            "state_name": "Louisiana",
            "hc-key": "us-la",
            "value": 3,
            "data-point": "&#8226;&nbsp;Nondiscrimination policy protecting LGBTQ youth<br>&#8226;&nbsp;Regulation protecting sexual orientation<br>&#8226;&nbsp;Regulation protecting gender identity"
        },
        {
            "state_name": "Massachusetts",
            "hc-key": "us-ma",
            "value": 1,
            "data-point": "&#8226;&nbsp;Nondiscrimination policy protecting LGBTQ youth"
        },
        {
            "state_name": "Maryland",
            "hc-key": "us-md",
            "value": 3,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation<br>&#8226;&nbsp;Policy protecting gender identity<br>&#8226;&nbsp;Regulation protecting sexual orientation"
        },
        {
            "state_name": "Maine",
            "hc-key": "us-me",
            "value": 2,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation<br>&#8226;&nbsp;Regulation protecting sexual orientation"
        },
        {
            "state_name": "Michigan",
            "hc-key": "us-mi",
            "value": 2,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation<br>&#8226;&nbsp;Policy protecting gender identity"
        },
        {
            "state_name": "Minnesota",
            "hc-key": "us-mn",
            "value": 2,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation<br>&#8226;&nbsp;Regulation protecting sexual orientation"
        },
        {
            "state_name": "Missouri",
            "hc-key": "us-mo",
            "value": 0,
            "data-point": "&#8226;&nbsp;No protection"
        },
        {
            "state_name": "Mississippi",
            "hc-key": "us-ms",
            "value": 0,
            "data-point": "&#8226;&nbsp;No protection"
        },
        {
            "state_name": "Montana",
            "hc-key": "us-mt",
            "value": 2,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation<br>&#8226;&nbsp;Regulation protecting sexual orientation"
        },
        {
            "state_name": "North Carolina",
            "hc-key": "us-nc",
            "value": 0,
            "data-point": "&#8226;&nbsp;No protection"
        },
        {
            "state_name": "North Dakota",
            "hc-key": "us-nd",
            "value": 2,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation<br>&#8226;&nbsp;Policy protecting gender identity"
        },
        {
            "state_name": "Nebraska",
            "hc-key": "us-ne",
            "value": 0,
            "data-point": "&#8226;&nbsp;No protection"
        },
        {
            "state_name": "New Hampshire",
            "hc-key": "us-nh",
            "value": 1,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation"
        },
        {
            "state_name": "New Jersey",
            "hc-key": "us-nj",
            "value": 1,
            "data-point": "&#8226;&nbsp;Nondiscrimination policy protecting LGBTQ youth"
        },
        {
            "state_name": "New Mexico",
            "hc-key": "us-nm",
            "value": 1,
            "data-point": "&#8226;&nbsp;Regulation protecting \"sexual preference\""
        },
        {
            "state_name": "Nevada",
            "hc-key": "us-nv",
            "value": 2,
            "data-point": "&#8226;&nbsp;Statute protecting sexual orientation<br>&#8226;&nbsp;Statute protecting gender identity"
        },
        {
            "state_name": "New York",
            "hc-key": "us-ny",
            "value": 5,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation<br>&#8226;&nbsp;Policy protecting gender identity<br>&#8226;&nbsp;Nondiscrimination policy protecting LGBTQ youth<br>&#8226;&nbsp;Regulation protecting sexual orientation<br>&#8226;&nbsp;Regulation protecting gender identity"
        },
        {
            "state_name": "Ohio",
            "hc-key": "us-oh",
            "value": 1,
            "data-point": "&#8226;&nbsp;Nondiscrimination policy protecting LGBTQ youth"
        },
        {
            "state_name": "Oklahoma",
            "hc-key": "us-ok",
            "value": 0,
            "data-point": "&#8226;&nbsp;No protection"
        },
        {
            "state_name": "Oregon",
            "hc-key": "us-or",
            "value": 3,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation<br>&#8226;&nbsp;Policy protecting gender identity<br>&#8226;&nbsp;Nondiscrimination policy protecting LGBTQ youth"
        },
        {
            "state_name": "Pennsylvania",
            "hc-key": "us-pa",
            "value": 3,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation<br>&#8226;&nbsp;Policy protecting gender identity<br>&#8226;&nbsp;Regulation protecting sexual orientation"
        },
        {
            "state_name": "Rhode Island",
            "hc-key": "us-ri",
            "value": 7,
            "data-point": "&#8226;&nbsp;Statute protecting sexual orientation<br>&#8226;&nbsp;Statute protecting gender identity<br>&#8226;&nbsp;Policy protecting sexual orientation<br>&#8226;&nbsp;Policy protecting gender identity<br>&#8226;&nbsp;Nondiscrimination policy protecting LGBTQ youth<br>&#8226;&nbsp;Regulation protecting sexual orientation<br>&#8226;&nbsp;Regulation protecting gender identity"
        },
        {
            "state_name": "South Carolina",
            "hc-key": "us-sc",
            "value": 0,
            "data-point": "&#8226;&nbsp;No protection"
        },
        {
            "state_name": "South Dakota",
            "hc-key": "us-sd",
            "value": 0,
            "data-point": "&#8226;&nbsp;No protection"
        },
        {
            "state_name": "Tennessee",
            "hc-key": "us-tn",
            "value": 1,
            "data-point": "&#8226;&nbsp;Nondiscrimination policy protecting LGBTQ youth"
        },
        {
            "state_name": "Texas",
            "hc-key": "us-tx",
            "value": 4,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation<br>&#8226;&nbsp;Policy protecting gender identity<br>&#8226;&nbsp;Regulation protecting sexual orientation<br>&#8226;&nbsp;Regulation protecting gender identity"
        },
        {
            "state_name": "Utah",
            "hc-key": "us-ut",
            "value": 3,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation<br>&#8226;&nbsp;Policy protecting gender identity<br>&#8226;&nbsp;Nondiscrimination policy protecting LGBTQ youth"
        },
        {
            "state_name": "Virginia",
            "hc-key": "us-va",
            "value": 1,
            "data-point": "&#8226;&nbsp;Regulation protecting sexual orientation"
        },
        {
            "state_name": "Vermont",
            "hc-key": "us-vt",
            "value": 3,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation<br>&#8226;&nbsp;Policy protecting gender identity<br>&#8226;&nbsp;Nondiscrimination policy protecting LGBTQ youth"
        },
        {
            "state_name": "Washington",
            "hc-key": "us-wa",
            "value": 1,
            "data-point": "&#8226;&nbsp;Nondiscrimination policy protecting LGBTQ youth"
        },
        {
            "state_name": "Wisconsin",
            "hc-key": "us-wi",
            "value": 1,
            "data-point": "&#8226;&nbsp;Statute protecting sexual orientation"
        },
        {
            "state_name": "West Virginia",
            "hc-key": "us-wv",
            "value": 1,
            "data-point": "&#8226;&nbsp;Policy protecting sexual orientation"
        },
        {
            "state_name": "Wyoming",
            "hc-key": "us-wy",
            "value": 0,
            "data-point": "&#8226;&nbsp;No protection"
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
                to: 1,
                color: 'rgba(227, 190, 250, 1)'
            }, {
                from: 2,
                to: 2,
                color: 'rgba(215, 150, 255, 1)'
            }, {
                from: 3,
                to: 3,
                color: 'rgba(186, 74, 255, 1)'
            }, {
                from: 4,
                to: 4,
                color: 'rgba(148, 59, 204, 1)'
            }, {
                from: 5,
                to: 5,
                color: 'rgba(121, 48, 166, 1)'
            }, {
                from: 6,
                to: 6,
                color: 'rgba(80, 32, 110, 1)'
            }, {
                from: 7,
                to: 7,
                color: 'rgba(41, 16, 56, 1)'
            }]
        },

        tooltip: {
            enabled: true,
            useHTML: true,
            headerFormat: '',
            pointFormat: "<b>{point.state_name}</b><br />{point.data-point}</b>"
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: 'hc-key',
            name: 'Youth diagnosed with COVID',
            states: {
                hover: {
                    color: '#171717'
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
