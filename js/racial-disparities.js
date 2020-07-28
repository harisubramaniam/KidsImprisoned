$(function () {

    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Montserrat',
                fontWeight: 400
            },
            // backgroundColor: '#EFEEE8'
            type: 'line'
        },
        lang: {
            thousandsSep: ','
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        }
    });

    $('#container1').highcharts({
        title: {
            style: {
                fontFamily: 'Montserrat',
                fontWeight: '400',
                fontSize: '1.40rem'
                // fontWeight: 'normal'
            },
            text: 'Juvenile arrest rate (per 100,000) by race, 1980-2018',
            x: -20 //center
        },
        subtitle: {
            style: {
                fontFamily: 'Montserrat',
                fontWeight: '300',
                fontSize: '0.90rem'
                // fontWeight: 'normal'
            },
            text: 'Click on a legend name to add or remove a race'
        },
        xAxis: {
            categories: ['1980','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18'],
        },
        yAxis: {
            title: {
                text: ''
            },
            min: 0, 
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },

        tooltip: {
            valueSuffix: '',
            valueDecimals: 1
        },

        series: [
        
            {
            name: 'White',
            color: '#214573',
            marker: {
                enabled: true,
                radius: 2
            },
            data: [6051.4, 5818.5, 5995.2, 5563.0, 5657.5, 6022.9, 6255.5, 6268.5, 6615.4, 6599.1, 6567.2, 6724.1, 6438.8, 6563.9, 7183.3, 7247.4, 7649.3, 7426.7, 6784.5, 6213.2, 5993.6, 5665.1, 5732.0, 5521.3, 5420.8, 5197.8, 5371.8, 5270.3, 5123.6, 4644.2, 4242.9, 3787.3, 3362.7, 2706.4, 2548.9, 2302.6, 2112.7, 1981.6, 1792.7  
            ]}, 
            {
            name: 'Minority',
            color: '#FF6666',
            marker: {
                enabled: true,
                radius: 2
            },
            data: [9084.2, 9985.5, 10398.9, 9348.2, 9090.8, 9411.0, 9762.9, 10098.1, 11054.8, 11430.9, 10882.4, 11346.7, 11488.4, 11916.7, 12651.7, 12660.6, 12295.4, 11797.8, 10344.6, 9258.1, 8754.2, 8538.7, 8342.3, 8305.7, 8224.1, 8500.0, 8603.1, 8524.4, 8307.6, 7742.8, 6954.9, 6335.7, 5903.1, 5028.5, 4782.6, 4252.0, 3999.2, 3792.3, 3365.3  
            ]}, 
            {
            name: 'Black',
            color: '#6bb6ff',
            marker: {
                enabled: true,
                radius: 2
            },
            data: [9912.9, 11152.4, 11731.8, 10653.5, 10453.3, 10835.2, 11388.0, 11784.8, 12966.0, 13765.1, 12949.5, 13578.9, 13826.6, 14376.1, 15279.6, 15354.7, 14838.5, 14270.7, 12673.7, 11293.1, 10738.6, 10573.3, 10255.7, 10287.4, 10278.0, 10745.5, 10954.2, 10920.5, 10755.2, 10100.8, 9137.1, 8375.6, 7817.1, 6798.1, 6537.5, 5752.7, 5447.9, 5149.6, 4618.3  
            ]}, 
            {
            name: 'American Indian',
            color: '#C06C84',
            marker: {
                enabled: true,
                radius: 2
            },
            data: [6798.6, 5524.2, 5825.9, 5068.2, 5059.9, 5818.8, 5632.1, 6129.5, 6395.1, 6623.0, 6577.0, 6507.0, 6407.6, 7048.6, 7638.8, 8119.4, 8424.1, 8318.4, 6562.6, 6344.3, 5687.0, 5028.2, 5266.0, 4935.6, 4630.2, 4683.9, 4397.1, 4307.3, 3826.8, 3665.8, 3348.3, 3297.9, 3053.2, 2682.6, 2371.4, 2605.8, 2405.8, 2727.5, 2251.2  
            ]}, 
            {
            name: 'Asian',
            color: '#FF8F00',
            marker: {
                enabled: true,
                radius: 2
            },
            data: [2820.1, 2718.0, 2707.1, 2362.0, 2259.5, 2571.0, 2485.5, 2798.5, 3223.8, 2104.4, 2977.5, 3102.5, 3056.1, 3164.8, 3455.0, 3284.2, 3514.8, 3302.0, 2637.4, 2395.8, 2196.9, 1974.8, 2129.8, 1994.3, 1809.4, 1596.5, 1660.1, 1650.6, 1612.9, 1459.9, 1293.4, 1113.7, 1154.5, 692.4, 622.2, 661.0, 610.3, 548.0, 457.6  
            ]}
        ]
    });

});



$(function () {

    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Montserrat',
                fontWeight: 400
            }
            // backgroundColor: '#EFEEE8'
        },
        lang: {
            thousandsSep: ','
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        }
    });

    $('#container2').highcharts({

        title: {
            style: {
                fontFamily: 'Montserrat',
                fontWeight: '400',
                fontSize: '1.40rem'
                // fontWeight: 'normal'
            },
            text: 'Ratio of rates* for juvenile arrest rates, 1980-2018',
            x: -20 //center
        },
        subtitle: {
            style: {
                fontFamily: 'Montserrat',
                fontWeight: '300',
                fontSize: '0.90rem'
                // fontWeight: 'normal'
            },
            text: 'Click on a legend name to add or remove a race'
        },
        xAxis: {
            categories: ['1980','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18'],
        },
        yAxis: {
            title: {
                text: ''
            },
        min:0,
        labels: {
            format: '{value:.1f}'
        },
        plotLines: [{
            color: 'black', 
            dashStyle: 'Dash', 
            value: 1.0, // Value of where the line will appear
            width: 2, 
            label: { 
                text: '1=Statistical parity', 
                align: 'right',
                x: -50,
                fontWeight: 'bold'
            }
        }]
      },
      tooltip: {
        valueSuffix: '',
        valueDecimals: 1
      },

    series: [
        {
          name: 'Minority',
      
          color: '#FF6666',
      
          marker: {
            enabled: true,
            radius: 2
          },
         data: [1.5, 1.7, 1.7, 1.7, 1.6, 1.6, 1.6, 1.6, 1.7, 1.7, 1.7, 1.7, 1.8, 1.8, 1.8, 1.7, 1.6, 1.6, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.6, 1.6, 1.6, 1.6, 1.7, 1.6, 1.7, 1.8, 1.9, 1.9, 1.8, 1.9, 1.9, 1.9  
        ]}, 
        {
          name: 'Black',      
          color: '#6bb6ff',      
          marker: {
            enabled: true,
            radius: 2
          },
         data: [1.6, 1.9, 2.0, 1.9, 1.8, 1.8, 1.8, 1.9, 2.0, 2.1, 2.0, 2.0, 2.1, 2.2, 2.1, 2.1, 1.9, 1.9, 1.9, 1.8, 1.8, 1.9, 1.8, 1.9, 1.9, 2.1, 2.0, 2.1, 2.1, 2.2, 2.2, 2.2, 2.3, 2.5, 2.6, 2.5, 2.6, 2.6, 2.6  
        ]}, 
        {
          name: 'American Indian',      
          color: '#C06C84',      
          marker: {
            enabled: true,
            radius: 2
          },
         data: [1.1, 0.9, 1.0, 0.9, 0.9, 1.0, 0.9, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.1, 1.1, 1.1, 1.1, 1.1, 1.0, 1.0, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.8, 0.8, 0.7, 0.8, 0.8, 0.9, 0.9, 1.0, 0.9, 1.1, 1.1, 1.4, 1.3  
        ]}, 
        {
          name: 'Asian',      
          color: '#FF8F00',      
          marker: {
            enabled: true,
            radius: 2
          },
         data: [0.5, 0.5, 0.5, 0.4, 0.4, 0.4, 0.4, 0.4, 0.5, 0.3, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.4, 0.4, 0.4, 0.4, 0.3, 0.4, 0.4, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.2, 0.3, 0.3, 0.3, 0.3  
        ]}
      ]
    });

  });