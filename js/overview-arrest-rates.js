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
    $.getJSON("data/overview-arrest-rates.json", function(dataset1) {
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
                text : '2018 Juvenile Arrest Rates per 100,000',
                style: {
                    fontWeight: 'bold'
                },
                floating: false,
                verticalAlign: 'top',
                margin: 0
            },
            subtitle: {
                text: 'The U.S. has no centralized national juvenile justice system. Instead, states create and regulate local juvenile systems, resulting in vast variation across the country. The rate at which juveniles are arrested and detained varies greatly from state to state.',
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
                pointFormat: '<b>{point.state-name}</b><br />&#8226;&nbsp;Juvenile arrest rate:&nbsp;<b>{point.value}</b>'
            },
            colorAxis: {
                dataClasses: [{
                    from: 0,
                    to: 99,
                    color: '#FFFFFF'
                }, {
                    from: 100,
                    to: 199,
                    color: 'rgba(216, 66, 38, .1)'
                }, {
                    from: 200,
                    to: 299,
                    color: 'rgba(216, 66, 38, .3)'
                }, {
                    from: 300,
                    to: 399,
                    color: 'rgba(216, 66, 38, .4)'
                }, {
                    from: 400,
                    to: 499,
                    color: 'rgba(216, 66, 38, .5)'
                }, {
                    from: 500,
                    to: 599,
                    color: 'rgba(216, 66, 38, .7)'
                }, {
                    from: 600,
                    to: 699,
                    color: 'rgba(216, 66, 38, .9)'
                }]
            },
            series: [{
                data: dataset1,
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: 'hc-key',
                name: 'Arrest Rates',
                states: {
                    hover: {
                        color: 'rgba(216, 66, 38, .1)'
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

    // Arrest rates button clicked
    $('#arrest-rates').click(function() {
        $.getJSON("data/overview-arrest-rates.json", function(dataset1) {
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
                    text : '2018 Juvenile Arrest Rates per 100,000',
                    style: {
                        fontWeight: 'bold'
                    },
                    floating: false,
                    verticalAlign: 'top',
                    margin: 0
                },
                subtitle: {
                    text: 'The U.S. has no centralized national juvenile justice system. Instead, states create and regulate local juvenile systems, resulting in vast variation across the country. The rate at which juveniles are arrested and detained varies greatly from state to state.',
                    align: 'left',
                    x: 50,
                    floating: false,
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
                    pointFormat: '<b>{point.state-name}</b><br />&#8226;&nbsp;Juvenile arrest rate:&nbsp;<b>{point.value}</b>'
                },
                colorAxis: {
                    dataClasses: [{
                        from: 0,
                        to: 99,
                        color: '#FFFFFF'
                    }, {
                        from: 100,
                        to: 199,
                        color: 'rgba(216, 66, 38, .1)'
                    }, {
                        from: 200,
                        to: 299,
                        color: 'rgba(216, 66, 38, .3)'
                    }, {
                        from: 300,
                        to: 399,
                        color: 'rgba(216, 66, 38, .4)'
                    }, {
                        from: 400,
                        to: 499,
                        color: 'rgba(216, 66, 38, .5)'
                    }, {
                        from: 500,
                        to: 599,
                        color: 'rgba(216, 66, 38, .7)'
                    }, {
                        from: 600,
                        to: 699,
                        color: 'rgba(216, 66, 38, .9)'
                    }]
                },
                series: [{
                    data: dataset1,
                    mapData: Highcharts.maps['countries/us/us-all'],
                    joinBy: 'hc-key',
                    name: 'Arrest Rates',
                    states: {
                        hover: {
                            color: 'rgba(216, 66, 38, .1)'
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
    
    // Detention rates button clicked
    $('#detention-rates').click(function() {
        $.getJSON("data/overview-detention-rates.json", function(dataset2){
            Highcharts.mapChart('container', {
                legend: {
                    enabled: false
                },
                chart: {
                    backgroundColor: '#FAF4E1',
                    marginBottom: 0
                },
                title : {
                    text : '2017 Juvenile Detention Rates per 100,000',
                    style: {
                        fontWeight: 'bold'
                    },
                    floating: false,
                    verticalAlign: 'top',
                    margin: 0
                },
                subtitle: {
                    text: 'The U.S. has no centralized national juvenile justice system. Instead, states create and regulate local juvenile systems, resulting in vast variation across the country. The rate at which juveniles are arrested and detained varies greatly from state to state.',
                    align: 'left',
                    x: 50,
                    floating: false,
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
                    pointFormat: '<b>{point.state-name}</b><br />&#8226;&nbsp;Juvenile detention rate:&nbsp;<b>{point.value}</b>'
                },
                colorAxis: {
                    dataClasses: [{
                        from: 0,
                        to: 9,
                        color: '#FFFFFF'
                    }, {
                        from: 10,
                        to: 29,
                        color: 'rgba(216, 66, 38, .1)'
                    }, {
                        from: 30,
                        to: 49,
                        color: 'rgba(216, 66, 38, .3)'
                    }, {
                        from: 50,
                        to: 59,
                        color: 'rgba(216, 66, 38, .4)'
                    }, {
                        from: 60,
                        to: 79,
                        color: 'rgba(216, 66, 38, .5)'
                    }, {
                        from: 80,
                        to: 89,
                        color: 'rgba(216, 66, 38, .7)'
                    }, {
                        from: 90,
                        to: 109,
                        color: 'rgba(216, 66, 38, .9)'
                    }]
                },
                series: [{
                    data: dataset2,
                    mapData: Highcharts.maps['countries/us/us-all'],
                    joinBy: 'hc-key',
                    name: 'Arrest Rates',
                    states: {
                        hover: {
                            color: 'rgba(216, 66, 38, .1)'
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