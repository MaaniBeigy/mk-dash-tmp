var dom = document.getElementById("container");
var myChart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false,
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
    tooltip: {
        trigger: "axis",
        confine: true,
        valueFormatter: (value) => value + "%",
        axisPointer: {
            type: "shadow",
            color: "rgba(150,150,150, 0.3)",
        },
    },
    yAxis: [
        {
            offset: 65,
            type: "category",
            data: ["Non-binary", "Male", "Female"],
            axisLabel: {
                margin: 20,
                color: "#363636",
                align: "left",
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        {
            offset: 35,
            type: "category",
            data: ["6%", "23%", "71%"],
            axisLabel: {
                margin: 18,
                padding: 5,
                color: "#363636",
                align: "right",
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    xAxis: {
        type: "value",
        max: 100,
        axisLabel: {
            show: false,
            color: "#363636",
            formatter: "{value}%",
        },
        splitLine: {
            show: false,
        },
    },
    series: [
        {
            data: [
                {
                    value: 6,
                    itemStyle: {
                        color: "#db41b2",
                    },
                },
                {
                    value: 23,
                    itemStyle: {
                        color: "#0e47c0",
                    },
                },
                {
                    value: 71,
                    itemStyle: {
                        color: "#ffa1aa",
                    },
                },
            ],
            showBackground: true,
            backgroundStyle: {
                color: "rgba(238, 238, 238)",
                borderRadius: [0, 10, 10, 0],
            },
            type: "bar",
            barCategoryGap: "50%",
            itemStyle: {
                emphasis: {
                    barBorderRadius: [10, 10],
                },
                normal: {
                    barBorderRadius: [10, 10, 10, 10],
                },
            },
        },
    ],
};

if (option && typeof option === "object") {
    myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
