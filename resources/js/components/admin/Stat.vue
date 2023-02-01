<template>
    <div>
        <h1 class="mt-3">Статистика</h1>

        <canvas id="myChart1" style="width:100%;max-width:700px"></canvas>
        <canvas id="myChart2" style="width:100%;max-width:700px"></canvas>
        <canvas id="myChart3" style="width:100%;max-width:700px"></canvas>
        <canvas id="myChart4" style="width:100%;max-width:700px"></canvas>
        <canvas id="myChart5" style="width:100%;max-width:700px"></canvas>
    </div>
</template>

<script>
export default {
    mounted() {
        var xValues1 = ["1", "2", "3", "4", "5"];
        var yValues1 = [112, 2766, 590, 7541, 5623];

        var xValues2 = ["1", "2", "3", "4", "5"];
        var yValues2 = [112, 2766, 590, 7541, 5623];

        var xValues3 = ["1", "2", "3", "4", "5"];
        var yValues3 = [112, 2766, 590, 7541, 5623];

        var xValues4 = ["1", "2", "3", "4", "5"];
        var yValues4 = [112, 2766, 590, 7541, 5623];

        var xValues5 = ["1", "2", "3", "4", "5"];
        var yValues5 = [112, 2766, 590, 7541, 5623];

        var barColors = ["red", "green","blue","orange","brown"];

        new Chart("myChart1", {
            type: "bar",
            data: {
                labels: xValues1,
                datasets: [{
                backgroundColor: barColors,
                data: yValues1
                }]
            },
            options: {
                legend: {display: false},
                title: {
                    display: true,
                    text: "Вкус блюд"
                }
            }
        });

        new Chart("myChart2", {
            type: "bar",
            data: {
                labels: xValues2,
                datasets: [{
                backgroundColor: barColors,
                data: yValues2
                }]
            },
            options: {
                legend: {display: false},
                title: {
                    display: true,
                    text: "Разнообразие меню"
                }
            }
        });

        new Chart("myChart3", {
            type: "bar",
            data: {
                labels: xValues3,
                datasets: [{
                backgroundColor: barColors,
                data: yValues3
                }]
            },
            options: {
                legend: {display: false},
                title: {
                    display: true,
                    text: "Чистота посуды"
                }
            }
        });

        new Chart("myChart4", {
            type: "bar",
            data: {
                labels: xValues4,
                datasets: [{
                backgroundColor: barColors,
                data: yValues4
                }]
            },
            options: {
                legend: {display: false},
                title: {
                    display: true,
                    text: "Качество обслуживания в столовой"
                }
            }
        });

        new Chart("myChart5", {
            type: "bar",
            data: {
                labels: xValues5,
                datasets: [{
                backgroundColor: barColors,
                data: yValues5
                }]
            },
            options: {
                legend: {display: false},
                title: {
                    display: true,
                    text: "Скорость обслуживания"
                }
            }
        });
    }
}
</script>