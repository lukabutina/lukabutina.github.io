$(function() {

    var ctxfrontend = document.getElementById("frontend-canvas").getContext('2d');
    var ctxbackend = document.getElementById("backend-canvas").getContext('2d');
    var ctxtools = document.getElementById("tools-canvas").getContext('2d');

    Chart.defaults.global.defaultFontColor = '#000';
    Chart.defaults.global.showLines = false;
    Chart.defaults.global.legend.display = false;

    var frontendCanvas = new Chart(ctxfrontend, {
        type: 'bar',
        data: {
            labels: ["HTML5", "CSS3", "Javascript (ES6)", "AngularJS"],
            datasets: [{
                data: [90, 80, 90, 50],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
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

    var backendCanvas = new Chart(ctxbackend, {
        type: 'bar',
        data: {
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

    var toolsCanvas = new Chart(ctxtools, {
        type: 'bar',
        data: {
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
        $('.skill-container').addClass('hidden');
        $(".skill-container[data-attr='" + $(this).data("attr") + "']").removeClass('hidden');
        console.log($(this).data("attr"));
        $(this).addClass('active');
    });

});