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
    $.getJSON("data/juvenile.json", function(dataset1) {
        // Initiate the map
        Highcharts.mapChart('container', {
            legend: {
                enabled: false
            },
            chart: {
                backgroundColor: '#EFEEE8',
                marginBottom: 0
            },
            title : {
                text : 'Different Types of Transfer Across the Country in 2016',
                style: {
                    fontWeight: 'bold'
                },
                floating: false,
                x: 10,
                verticalAlign: 'top',
                margin: 0
            },
            subtitle: {
                text: 'The three main types of transfer options—judicial, prosecutorial and automatic—vary by state. This map is accurate as of 2016, some states have changed their laws since then.',
                align: 'center',
                floating: false,
                x: 5,
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
                pointFormat: '<b>{point.state_name}</b><br />&#8226;&nbsp;Juvenile court judge:&nbsp;<b>{point.data-point}</b>'
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
                name: 'Juvenile court judge',
                states: {
                    hover: {
                        color: 'rgba(216, 66, 38, .3)'
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

    // Juvenile court judge button clicked
    $('#juvenile').click(function() {
        $.getJSON("data/juvenile.json", function(dataset1) {
            // Initiate the map
            Highcharts.mapChart('container', {
                legend: {
                    enabled: false
                },
                chart: {
                    backgroundColor: '#EFEEE8',
                    marginBottom: 0
                },
                title : {
                    text : 'Different Types of Transfer Across the Country in 2016',
                    style: {
                        fontWeight: 'bold'
                    },
                    x: 10,
                    floating: false,
                    verticalAlign: 'top',
                    margin: 0
                },
                subtitle: {
                    text: 'The three main types of transfer options—judicial, prosecutorial and automatic—vary by state. This map is accurate as of 2016, some states have changed their laws since then.',
                    align: 'center',
                    floating: false,
                    x: 5,
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
                    pointFormat: '<b>{point.state_name}</b><br />&#8226;&nbsp;Juvenile court judge:&nbsp;<b>{point.data-point}</b>'
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
                    name: 'Juvenile court judge',
                    states: {
                        hover: {
                            color: 'rgba(216, 66, 38, .3)'
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
    
    // Prosecutor button clicked
    $('#prosecutor').click(function() {
        $.getJSON("data/prosecutor.json", function(dataset2){
            // Initiate the map
            Highcharts.mapChart('container', {
                legend: {
                    enabled: false
                },
                chart: {
                    backgroundColor: '#EFEEE8',
                    marginBottom: 0
                },
                title : {
                    text : 'Different Types of Transfer Across the Country in 2016',
                    style: {
                        fontWeight: 'bold'
                    },
                    x: 10,
                    floating: false,
                    verticalAlign: 'top',
                    margin: 0
                },
                subtitle: {
                    text: 'The three main types of transfer options—judicial, prosecutorial and automatic—vary by state. This map is accurate as of 2016, some states have changed their laws since then.',
                    align: 'center',
                    floating: false,
                    x: 5,
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
                    pointFormat: '<b>{point.state_name}</b><br />&#8226;&nbsp;Prosecutor:&nbsp;<b>{point.data-point}</b>'
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
                    name: 'Prosecutor',
                    states: {
                        hover: {
                            color: 'rgba(216, 66, 38, .3)'
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

    // Legislature button clicked
    $('#legislature').click(function() {
        $.getJSON("data/legislature.json", function(dataset2){
            // Initiate the map
            Highcharts.mapChart('container', {
                legend: {
                    enabled: false
                },
                chart: {
                    backgroundColor: '#EFEEE8',
                    marginBottom: 0
                },
                title : {
                    text : 'Different Types of Transfer Across the Country in 2016',
                    style: {
                        fontWeight: 'bold'
                    },
                    x: 10,
                    floating: false,
                    verticalAlign: 'top',
                    margin: 0
                },
                subtitle: {
                    text: 'The three main types of transfer options—judicial, prosecutorial and automatic—vary by state. This map is accurate as of 2016, some states have changed their laws since then.',
                    align: 'center',
                    floating: false,
                    x: 5,
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
                    pointFormat: '<b>{point.state_name}</b><br />&#8226;&nbsp;Automatic Legislation:&nbsp;<b>{point.data-point}</b>'
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
                    name: 'Prosecutor',
                    states: {
                        hover: {
                            color: 'rgba(216, 66, 38, .3)'
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