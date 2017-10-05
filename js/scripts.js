$(function() {

    var ctxfrontend = document.getElementById("frontend-canvas").getContext('2d');

    Chart.defaults.global.defaultFontColor = '#000';
    Chart.defaults.global.showLines = false;
    Chart.defaults.global.legend.display = false;

    var data_frontend = {
        labels: ["HTML5", "CSS3", "Javascript (ES6)", "AngularJS", "Responsive"],
        datasets: [{
            data: [90, 80, 90, 50, 90],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 155, 255, 1)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 155, 255, 1)'
            ],
            borderWidth: 1
        }]
    };

    var data_backend = {
        labels: ["PHP", "Node.js", "MySQL", "MongoDB", "Apache", "Nginx"],
        datasets: [{
            data: [90, 50, 90, 40, 70, 60],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 155, 255, 1)',
                'rgba(155, 5, 155, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 75, 255, 1)',
                'rgba(155, 5, 155, 1)'
            ],
            borderWidth: 1
        }]
    };

    var data_tools = {
        labels: ["GIT", "Gulp", "Grunt", "SASS", "Composer"],
        datasets: [{
            data: [90, 60, 80, 90, 40],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 155, 255, 1)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 155, 255, 1)',
            ],
            borderWidth: 1
        }]
    };

    var chart = new Chart(ctxfrontend, {
        type: 'bar',
        data: {
            labels: ["HTML5", "CSS3", "Javascript (ES6)", "AngularJS", "Responsive"],
            datasets: [{
                data: [90, 80, 90, 50, 90],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 155, 255, 1)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 155, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        max:100,
                        display: false
                    }
                }]
            },
            legend: {
                display: false,

            }
        }
    });

    $('#skill-picker li').on('click', function() {
        $('#skill-picker li').removeClass('active');

        var clicked = $(this).data("attr");
        $(this).addClass('active');
        if(clicked == "frontend") {
            chart.data = data_frontend;
        }
        else if(clicked == "backend") {
            chart.data = data_backend;
        }
        else if(clicked == "tools") {
            chart.data = data_tools;
        }
        chart.update();
    });

    $('.hamburger').on('click', function() {
        $('nav.mobile-menu').toggleClass('active');
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if(scroll > 1) {
            $('header').addClass('scrolled');
        }
        else {
            $('header').removeClass('scrolled');
        }
    });
});