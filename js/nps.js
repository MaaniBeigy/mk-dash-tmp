var dom = document.getElementById("container");
var myChart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false
});
var app = {};

var option;
option = {
    grid: {
        show: false,
        top: 30,
        bottom: 30,
        left: "5%",
        right: "5%",
        containLabel: true,
    },
    title: {
        subtext: "NPS"
    },
    tooltip: {
        show: false,
    },
    yAxis: [
        {
            offset: 0,
            type: "category",
            data: [""],
            axisLabel: {
                margin: 0,
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
        show: true,
        type: "value",
        min: 1,
        max: 9,
        interval: 2,
        axisLabel: {
            show: true,
            color: "#545454",
        },
        splitLine: {
            show: false
        },
    },

    series: [
        {
            data: [
                {
                    value: 7.1,
                    itemStyle: {
                        opacity: 1,
                        color: "#05944F"
                    }
                },
            ],
            label: {
                show: true,
                color: "#545454",
                offset: [10, -30],
                position: "insideRight",
            },
            showBackground: true,
            backgroundStyle: {
                color: "rgba(238, 238, 238)",
                borderRadius: [0, 10, 10, 0],
            },
            type: "bar",
            barMaxWidth: "15%",
            itemStyle: {
                emphasis: {
                    barBorderRadius: [10, 10]
                },
                normal: {
                    barBorderRadius: [10, 10, 10, 10]
                }
            }
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
