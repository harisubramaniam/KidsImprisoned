$(function (){

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
    Highcharts.mapChart('container', {

        chart: {
            map: 'countries/us/us-all',
            marginTop: 0,
            marginBottom: 0,
            spacingTop: 0
        },

        legend: {
            enabled: false
        },

        title: {
            enabled: false,
            text: ''
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'top'
            }
        },

        tooltip: {
            headerFormat: '',
            pointFormat: '<b>{point.facility_name}</b><br>{point.city}, {point.st} {point.zip}'
        },

        plotOptions: {
            series: {
                enableMouseTracking: true
            }
        },

        series: [{
            // Use the us-all map with no data as a basemap
            name: 'Basemap',
            // borderColor: '#232947',
            showInLegend: false,
            enableMouseTracking: false
        }, {
            name: 'Separators',
            type: 'mapline',
            // nullColor: '#D84226',
            data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
            showInLegend: false,
            enableMouseTracking: false
        }, {
            // Specify points using lat/lon
            type: 'mappoint',
            name: 'Sequel locations',
            // color: Highcharts.getOptions().colors[1],
            marker: {
                symbol: 'triangle',
                radius: 5
            },
            color: 'rgba(216, 66, 38, 1)',
            showInLegend: true,
            data: [{
                "facility_name": "Aaron School Elementary and Middle School",
                "city": "New York",
                "st": "NY",
                "zip": 10017,
                "lat": 40.751539,
                "lon": -73.970048
            }, {
                "facility_name": "Aaron School High School",
                "city": "New York",
                "st": "NY",
                "zip": 10016,
                "lat": 40.744725,
                "lon": -73.983833
            }, {
                "facility_name": "Alachua Academy",
                "city": "Gainesville",
                "st": "FL",
                "zip": 32609,
                "lat": 29.680253,
                "lon": -82.271927
            }, {
                "facility_name": "Auldern Academy",
                "city": "Siler City",
                "st": "NC",
                "zip": 27344,
                "lat": 35.676049,
                "lon": -79.331899
            }, {
                "facility_name": "Bernalillo Academy",
                "city": "Albuquerque",
                "st": "NM",
                "zip": 87106,
                "lat": 35.053798,
                "lon": -106.626055
            }, {
                "facility_name": "Capital Academy",
                "city": "Camden",
                "st": "NJ",
                "zip": 8104,
                "lat": 39.922468,
                "lon": -75.103768
            }, {
                "facility_name": "Casa Grande Academy (Opening Soon)",
                "city": "Casa Grande",
                "st": "AZ",
                "zip": 85122,
                "lat": 32.878356,
                "lon": -111.73918
            }, {
                "facility_name": "Charles Britt Academy",
                "city": "St. Petersburg",
                "st": "FL",
                "zip": 33712,
                "lat": 27.745216,
                "lon": -82.674168
            }, {
                "facility_name": "Clarinda Academy",
                "city": "Clarinda",
                "st": "IA",
                "zip": 51632,
                "lat": 40.757724,
                "lon": -95.037303
            }, {
                "facility_name": "Columbus Youth Academy",
                "city": "Tampa",
                "st": "FL",
                "zip": 33619,
                "lat": 27.966801,
                "lon": -82.341782
            }, {
                "facility_name": "Duval Academy",
                "city": "Jacksonville",
                "st": "FL",
                "zip": 32244,
                "lat": 30.210895,
                "lon": -81.773395
            }, {
                "facility_name": "Falcon Ridge Ranch",
                "city": "Virgin ",
                "st": "UT",
                "zip": 84779,
                "lat": 37.203347,
                "lon": -113.173786
            }, {
                "facility_name": "Forest Ridge Youth Services",
                "city": "Estherville",
                "st": "IA",
                "zip": 51334,
                "lat": 43.341862,
                "lon": -94.716068
            }, {
                "facility_name": "Lakeside Academy",
                "city": "Kalamazoo",
                "st": "MI",
                "zip": 49008,
                "lat": 42.252069,
                "lon": -85.614143
            }, {
                "facility_name": "Lakeside Academy - Kansas",
                "city": "Goddard",
                "st": "KS",
                "zip": 67052,
                "lat": 37.61964,
                "lon": -97.623022
            }, {
                "facility_name": "Lava Heights Academy",
                "city": "Toquerville",
                "st": "UT",
                "zip": 84774,
                "lat": 37.269254,
                "lon": -113.276929
            }, {
                "facility_name": "Marion Youth Academy",
                "city": "Ocala",
                "st": "FL",
                "zip": 34482,
                "lat": 29.301644,
                "lon": -82.195241
            }, {
                "facility_name": "Mingus Mountain Academy",
                "city": "Prescott Valley",
                "st": "AZ",
                "zip": 86312,
                "lat": 34.643652,
                "lon": -112.18824
            }, {
                "facility_name": "Mountain Home Academy",
                "city": "Mountain Home",
                "st": "ID",
                "zip": 83647,
                "lat": 43.146866,
                "lon": -115.662743
            }, {
                "facility_name": "Normative Services Academy",
                "city": "Sheridan",
                "st": "WY",
                "zip": 82801,
                "lat": 44.778937,
                "lon": -107.017608
            }, {
                "facility_name": "Norris Academy",
                "city": "Andersonville",
                "st": "TN",
                "zip": 37705,
                "lat": 36.19869,
                "lon": -84.03714
            }, {
                "facility_name": "Northern Illinois Academy",
                "city": "Aurora",
                "st": "IL",
                "zip": 60502,
                "lat": 41.801448,
                "lon": -88.289008
            }, {
                "facility_name": "Palm Beach Youth Academy",
                "city": "West Palm Beach",
                "st": "FL",
                "zip": 33411,
                "lat": 26.687183,
                "lon": -80.197762
            }, {
                "facility_name": "Pine Cone Therapies",
                "city": "Southlake",
                "st": "TX",
                "zip": 76092,
                "lat": 32.929145,
                "lon": -97.183669
            }, {
                "facility_name": "Pine Cone Therapies",
                "city": "Keller",
                "st": "",
                "zip": 76248,
                "lat": 32.912665,
                "lon": -97.184106
            }, {
                "facility_name": "Pine Cone Therapies",
                "city": "Missouri City",
                "st": "TX",
                "zip": 77459,
                "lat": 29.568689,
                "lon": -95.564443
            }, {
                "facility_name": "Pine Cone Therapies",
                "city": "Missouri City",
                "st": "TX",
                "zip": 77459,
                "lat": 29.569882,
                "lon": -95.574046
            }, {
                "facility_name": "Pompano Youth Treatment Center",
                "city": "Pompano Beach",
                "st": "FL",
                "zip": 33069,
                "lat": 26.26801,
                "lon": -80.15185
            }, {
                "facility_name": "Rebecca School",
                "city": "New York",
                "st": "NY",
                "zip": 10016,
                "lat": 40.744755,
                "lon": -73.983906
            }, {
                "facility_name": "Sequel Alliance Family Services",
                "city": "Reno ",
                "st": "NV",
                "zip": 89509,
                "lat": 39.491524,
                "lon": -119.809285
            }, {
                "facility_name": "Sequel Pomegranate Health Systems",
                "city": "Columbus",
                "st": "OH",
                "zip": 43223,
                "lat": 39.946899,
                "lon": -83.018278
            }, {
                "facility_name": "Sequel TSI of Courtland",
                "city": "Courtland",
                "st": "AL",
                "zip": 35618,
                "lat": 34.670318,
                "lon": -87.311934
            }, {
                "facility_name": "Sequel TSI of Montgomery",
                "city": "Montgomery",
                "st": "AL",
                "zip": 36104,
                "lat": 32.370725,
                "lon": -86.3116
            }, {
                "facility_name": "Sequel TSI of Owens Cross Roads",
                "city": "Owns Cross Roads",
                "st": "AL",
                "zip": 35763,
                "lat": 34.579963,
                "lon": -86.440498
            }, {
                "facility_name": "Sequel TSI of Tuskegee",
                "city": "Tuskegee",
                "st": "AL",
                "zip": 36083,
                "lat": 32.39072,
                "lon": -85.661563
            }, {
                "facility_name": "Sequel Transition Academy",
                "city": "Sioux Falls",
                "st": "SD",
                "zip": 57107,
                "lat": 43.559951,
                "lon": -96.899698
            }, {
                "facility_name": "Sequel Youth & Family Services",
                "city": "Huntsville",
                "st": "AL",
                "zip": 35801,
                "lat": 34.696964,
                "lon": -86.578465
            }, {
                "facility_name": "Sequel Youth & Family Services",
                "city": "Addison",
                "st": "TX",
                "zip": 75001,
                "lat": 32.969243,
                "lon": -96.823749
            }, {
                "facility_name": "SequelCare of Arizona",
                "city": "Prescott",
                "st": "AZ",
                "zip": 86305,
                "lat": 34.598882,
                "lon": -112.467162
            }, {
                "facility_name": "SequelCare of Florida",
                "city": "Pinellas Park",
                "st": "FL",
                "zip": 33781,
                "lat": 27.842513,
                "lon": -82.681148
            }, {
                "facility_name": "SequelCare of Florida",
                "city": "Port St. Lucie",
                "st": "FL",
                "zip": 34986,
                "lat": 27.31734,
                "lon": -80.402668
            }, {
                "facility_name": "SequelCare of Florida",
                "city": "Port Richey",
                "st": "FL",
                "zip": 34668,
                "lat": 28.296085,
                "lon": -82.706798
            }, {
                "facility_name": "SequelCare of Florida",
                "city": "West Palm Beach",
                "st": "FL",
                "zip": 33407,
                "lat": 26.758411,
                "lon": -80.060955
            }, {
                "facility_name": "SequelCare of Florida",
                "city": "Vero Beach",
                "st": "FL",
                "zip": 32966,
                "lat": 27.637591,
                "lon": -80.495366
            }, {
                "facility_name": "SequelCare of Maine",
                "city": "Searsport",
                "st": "ME",
                "zip": 4974,
                "lat": 44.434484,
                "lon": -68.950658
            }, {
                "facility_name": "SequelCare of Maine",
                "city": "Yarmouth",
                "st": "ME",
                "zip": 4096,
                "lat": 43.804655,
                "lon": -70.172776
            }, {
                "facility_name": "SequelCare of Maine",
                "city": "Bangor",
                "st": "ME",
                "zip": 4401,
                "lat": 44.810833,
                "lon": -68.797987
            }, {
                "facility_name": "SequelCare of Oklahoma",
                "city": "Antlers",
                "st": "OK",
                "zip": 74523,
                "lat": 34.230309,
                "lon": -95.620237
            }, {
                "facility_name": "SequelCare of Oklahoma",
                "city": "Hugo",
                "st": "OK",
                "zip": 74743,
                "lat": 34.011776,
                "lon": -95.521772
            }, {
                "facility_name": "SequelCare of Oklahoma",
                "city": "Poteau",
                "st": "OK",
                "zip": 74953,
                "lat": 35.056818,
                "lon": -94.622538
            }, {
                "facility_name": "SequelCare of Oklahoma",
                "city": "Broken Bow",
                "st": "OK",
                "zip": 74728,
                "lat": 34.027227,
                "lon": -94.738326
            }, {
                "facility_name": "SequelCare of Oklahoma",
                "city": "Durant",
                "st": "OK",
                "zip": 74701,
                "lat": 33.994214,
                "lon": -96.388648
            }, {
                "facility_name": "SequelCare of Oklahoma",
                "city": "Tulsa",
                "st": "OK",
                "zip": 74136,
                "lat": 36.071638,
                "lon": -95.958996
            }, {
                "facility_name": "St. John‚Äôs Youth Academy",
                "city": "St. Augustine",
                "st": "FL",
                "zip": 32085,
                "lat": 29.942089,
                "lon": -81.339424
            }, {
                "facility_name": "Starr Albion Prep",
                "city": "Albion",
                "st": "MI",
                "zip": 49224,
                "lat": 42.269957,
                "lon": -84.785791
            }, {
                "facility_name": "Woodward Academy",
                "city": "Woodward",
                "st": "IA",
                "zip": 50276,
                "lat": 41.872293,
                "lon": -93.923973
            }, {
                "facility_name": "Woodward Community Based Services",
                "city": "Urbandale",
                "st": "IA",
                "zip": 50322,
                "lat": 41.636466,
                "lon": -93.703761
            } ,{
                // lat: 35.05407,
                // lon: -106.62583,
                // dataLabels: {
                //     align: 'left',
                //     x: 5,
                //     verticalAlign: 'middle'
            }]
        }]
    });
});
