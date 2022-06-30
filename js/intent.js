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
        containLabel: true,
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
        max: 5,
        interval: 5,
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
                    value: 4.2,
                    itemStyle: {
                        opacity: 0
                    }
                },
            ],
            markLine: {
                data: [{
                    symbol: "none",
                    // symbolSize: 0,
                    type: "max",
                    lineStyle: {
                        normal: {
                            color: "#545454",
                            type: "solid",
                        }
                    },
                }],
            },
            label: {
                show: false,
                color: "#545454",
                offset: [0, -30],
                position: "insideRight",
            },
            showBackground: true,
            backgroundStyle: {
                color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 0, [
                    {
                        offset: 1,
                        color: "red"
                    },
                    {
                        offset: 0.65,
                        color: "orange"
                    },
                    {
                        offset: 0.45,
                        color: "yellow"
                    },
                    {
                        offset: 0,
                        color: "darkgreen"
                    }
                ]
                ),
                borderRadius: [10, 10, 10, 10]
            },
            type: "bar",
            barCategoryGap: "50%",
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
