/**
 * Created by dev10 on 11/20/2015.
 */

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart_mensual);
google.setOnLoadCallback(drawChart);
google.setOnLoadCallback(drawChart_Cartera);

function drawChart_mensual() {

    var data = google.visualization.arrayToDataTable([
        ['DIA', 'VALOR ($)', { role: 'style' } ]
        ,['1',123]
        ,['2',123]
        ,['3',123]
    ]);

    var options_mensual = {
        title: 'PEDIDOS: ULTIMOS 30 DIAS',
        colors: ['green']
        //hAxis: { title: 'DIA', titleTextStyle: { color: 'red' } }
    };

    var formatter = new google.visualization.NumberFormat({ prefix: '$', negativeColor: 'red', fractionDigits: 0, negativeParens: true });
    formatter.format(data, 1);

    var chart_mensual = new google.visualization.ColumnChart(document.getElementById('chart_mensual'));
    chart_mensual.draw(data, options_mensual);
}

function drawChart() {
    var data_anual = google.visualization.arrayToDataTable([
        ['MES', 'VALOR ($)']
        ,['0',123]
        ,['1',123]
        ,['2',123]
    ]);


    var options_anual = {
        title: 'PEDIDOS: ULTIMOS 12 MESES',
        lineWidth: 3,
        colors:['green']
    };

    var formatter = new google.visualization.NumberFormat({ prefix: '$', negativeColor: 'red', fractionDigits: 0, negativeParens: true });
    formatter.format(data_anual, 1);

    var chart = new google.visualization.LineChart(document.getElementById('chart_anual'));
    chart.draw(data_anual, options_anual);
}

function drawChart_Cartera() {
    var data_anual = google.visualization.arrayToDataTable([
        ['EDAD', 'VALOR ($)'],
        ,['1',123]
        ,['2',123]
        ,['3',123]
    ]);

    var options_anual = {
        title: 'CARTERA',
        lineWidth: 3,
        colors: ['red']
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_anual_cartera'));
    chart.draw(data_anual, options_anual);
}