var dom = document.getElementById("container");
var myChart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false
});
var app = {};

var option;
// 290 * 178
option = {
    grid: {
        show: false,
        top: 30,
        bottom: 30,
        left: "5%",
        right: "5%",
        containLabel: true,
    },
    legend: {
        y: "bottom",
        data: [
            {
                name: "Acquisition",
                icon: 'circle',
                itemStyle: {
                    color: "#9836ff"
                }
            },
            {
                name: "Activations",
                icon: 'circle',
                itemStyle: {
                    color: "#21c598"
                },
            }

        ]

    },
    tooltip: {
        show: false,
        trigger: "axis",
        confine: true,
    },
    yAxis: [

        {
            offset: 0,
            show: false,
            type: "category",
            data: [""],
            axisLabel: {
                margin: 0,
                color: "#363636",
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
    ],
    xAxis: {
        type: "value",
        max: 100,
        axisLabel: {
            show: false,
            color: "#363636",
            formatter: "{value}%"
        },
        splitLine: {
            show: false
        },

    },
    series: [
        {
            name: 'Acquisition',
            type: 'bar',
            barMaxWidth: "20%",
            stack: 'total',
            label: {
                show: true,
                formatter: "{c}%",
                offset: [0, -40],
                color: "#000000"

            },
            emphasis: {
                focus: 'series'
            },
            data: [
                {
                    value: 79,
                    itemStyle: {
                        color: "#9836ff"
                    },
                }
            ],
            itemStyle: {
                emphasis: {
                    barBorderRadius: [10, 10]
                },
                normal: {
                    barBorderRadius: [10, 0, 0, 10]
                }
            }
        },
        {
            name: 'Activations',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                formatter: "{c}%",
                offset: [0, -40],
                color: "#000000"
            },
            emphasis: {
                focus: 'series'
            },
            data: [
                {
                    value: 21,
                    itemStyle: {
                        color: "#21c598"
                    },
                }
            ],
            itemStyle: {
                emphasis: {
                    barBorderRadius: [10, 10]
                },
                normal: {
                    barBorderRadius: [0, 10, 10, 0]
                }
            }
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
