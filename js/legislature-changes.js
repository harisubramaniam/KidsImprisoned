$(function () {
    // Setup common map params
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

    //Get default data
    $.getJSON("data/1970.json", function(dataset1) {
        // Initiate the map
        Highcharts.mapChart('container', {
            legend: {
                enabled: false
            },
            chart: {
                backgroundColor: '#FAF4E1',
                marginBottom: 0
            },
            title : {
                text : 'The Spread of Automatic Transfer Laws from Pre-1970\'s to 2000',
                style: {
                    fontWeight: 'bold'
                },
                x: 10,
                floating: false,
                verticalAlign: 'top',
                margin: 0
            },
            subtitle: {
                text: 'Automatic transfer laws, often called statutory exlusion, were adopted by majority of the states by 2000, sending youth to the adult system without a hearing.',
                align: 'left',
                floating: false,
                x: 50,
                margin: 5
            },
            mapNavigation: {
                enabled: false,
                buttonOptions: {
                    verticalAlign: 'top'
                }
            },
            tooltip: {
                enabled: true,
                useHTML: true,
                headerFormat: '',
                pointFormat: '<b>{point.state_name}</b><br />&#8226;&nbsp;Automatic transfer law - Pre-1970:&nbsp;<b>{point.data-point}</b>'
            },
            colorAxis: {
                dataClasses: [{
                    from: 0,
                    to: 0,
                    color: 'rgba(221, 221, 221, .5)'
                }, {
                    from: 1,
                    to: 1,
                    color: 'rgba(216, 66, 38, .8)'
                }]
            },
            series: [{
                data: dataset1,
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: 'hc-key',
                name: 'Pre-1975',
                states: {
                    hover: {
                        color: '#ABAAA7'
                    }
                },
                dataLabels: {
                    enabled: false
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

    // Pre-1970 button clicked
    $('#1970').click(function() {
        $.getJSON("data/1970.json", function(dataset1) {
            // Initiate the map
            Highcharts.mapChart('container', {
                legend: {
                    enabled: false
                },
                chart: {
                    backgroundColor: '#FAF4E1',
                    marginBottom: 0
                },
                title : {
                    text : 'The Spread of Automatic Transfer Laws from Pre-1970\'s to 2000',
                    style: {
                        fontWeight: 'bold'
                    },
                    x: 10,
                    floating: false,
                    verticalAlign: 'top',
                    margin: 0
                },
                subtitle: {
                    text: 'Automatic transfer laws, often called statutory exlusion, were adopted by majority of the states by 2000, sending youth to the adult system without a hearing.',
                    align: 'left',
                    floating: false,
                    x: 50,
                    margin: 5
                },
                mapNavigation: {
                    enabled: false,
                    buttonOptions: {
                        verticalAlign: 'top'
                    }
                },
                tooltip: {
                    enabled: true,
                    useHTML: true,
                    headerFormat: '',
                    pointFormat: '<b>{point.state_name}</b><br />&#8226;&nbsp;Automatic transfer law - Pre-1970:&nbsp;<b>{point.data-point}</b>'
                },
                colorAxis: {
                    dataClasses: [{
                        from: 0,
                        to: 0,
                        color: 'rgba(221, 221, 221, .5)'
                    }, {
                        from: 1,
                        to: 1,
                        color: 'rgba(216, 66, 38, .8)'
                    }]
                },
                series: [{
                    data: dataset1,
                    mapData: Highcharts.maps['countries/us/us-all'],
                    joinBy: 'hc-key',
                    name: 'Pre-1975',
                    states: {
                        hover: {
                            color: '#ABAAA7'
                        }
                    },
                    dataLabels: {
                        enabled: false
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
    });
    
    // 1985 button clicked
    $('#1985').click(function() {
        $.getJSON("data/1985.json", function(dataset2){
            // Initiate the map
            Highcharts.mapChart('container', {
                legend: {
                    enabled: false
                },
                chart: {
                    backgroundColor: '#FAF4E1',
                    marginBottom: 0
                },
                title : {
                    text : 'The Spread of Automatic Transfer Laws from Pre-1970\'s to 2000',
                    style: {
                        fontWeight: 'bold'
                    },
                    x: 10,
                    floating: false,
                    verticalAlign: 'top',
                    margin: 0
                },
                subtitle: {
                    text: 'Automatic transfer laws, often called statutory exlusion, were adopted by majority of the states by 2000, sending youth to the adult system without a hearing.',
                    align: 'left',
                    floating: false,
                    x: 50,
                    margin: 5
                },
                mapNavigation: {
                    enabled: false,
                    buttonOptions: {
                        verticalAlign: 'top'
                    }
                },
                tooltip: {
                    enabled: true,
                    useHTML: true,
                    headerFormat: '',
                    pointFormat: '<b>{point.state_name}</b><br />&#8226;&nbsp;Automatic transfer law - 1985:&nbsp;<b>{point.data-point}</b>'
                },
                colorAxis: {
                    dataClasses: [{
                        from: 0,
                        to: 0,
                        color: 'rgba(221, 221, 221, .5)'
                    }, {
                        from: 1,
                        to: 1,
                        color: 'rgba(216, 66, 38, .8)'
                    }]
                },
                series: [{
                    data: dataset2,
                    mapData: Highcharts.maps['countries/us/us-all'],
                    joinBy: 'hc-key',
                    name: '1985',
                    states: {
                        hover: {
                            color: '#ABAAA7'
                        }
                    },
                    dataLabels: {
                        enabled: false
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
    });

    // 2000 button clicked
    $('#2000').click(function() {
        $.getJSON("data/2000.json", function(dataset2){
            // Initiate the map
            Highcharts.mapChart('container', {
                legend: {
                    enabled: false
                },
                chart: {
                    backgroundColor: '#FAF4E1',
                    marginBottom: 0
                },
                title : {
                    text : 'The Spread of Automatic Transfer Laws from Pre-1970\'s to 2000',
                    style: {
                        fontWeight: 'bold'
                    },
                    x: 10,
                    floating: false,
                    verticalAlign: 'top',
                    margin: 0
                },
                subtitle: {
                    text: 'Automatic transfer laws, often called statutory exlusion, were adopted by majority of the states by 2000, sending youth to the adult system without a hearing.',
                    align: 'left',
                    floating: false,
                    x: 50,
                    margin: 5
                },
                mapNavigation: {
                    enabled: false,
                    buttonOptions: {
                        verticalAlign: 'top'
                    }
                },
                tooltip: {
                    enabled: true,
                    useHTML: true,
                    headerFormat: '',
                    pointFormat: '<b>{point.state_name}</b><br />&#8226;&nbsp;Automatic transfer law - 2000:&nbsp;<b>{point.data-point}</b>'
                },
                colorAxis: {
                    dataClasses: [{
                        from: 0,
                        to: 0,
                        color: 'rgba(221, 221, 221, .5)'
                    }, {
                        from: 1,
                        to: 1,
                        color: 'rgba(216, 66, 38, .8)'
                    }]
                },
                series: [{
                    data: dataset2,
                    mapData: Highcharts.maps['countries/us/us-all'],
                    joinBy: 'hc-key',
                    name: '2000',
                    states: {
                        hover: {
                            color: '#ABAAA7'
                        }
                    },
                    dataLabels: {
                        enabled: false
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
    });

});