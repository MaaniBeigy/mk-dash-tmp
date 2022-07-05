var dom = document.getElementById("container");
var myChart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false,
});
var app = {};

var option;

option = {
    grid: {
        show: false,
        top: 5,
        bottom: 5,
        left: "5%",
        right: "5%",
        containLabel: true,
    },
    title: {
        show: false,
    },
    tooltip: {
        trigger: "item",
        valueFormatter: (value) => value + "%",
    },
    legend: {
        type: "scroll",
        orient: "vertical",
        x: "left",
        top: "middle",
        icon: 'circle',
        padding: 0,
        itemGap: 5
    },
    series: [
        {
            type: "pie",
            radius: ["40%", "70%"],
            clockwise: false,
            avoidLabelOverlap: false,
            left: "25%",
            itemStyle: {
                borderRadius: 2,
                borderColor: "#fff",
                borderWidth: 1,
            },
            label: {
                show: false,
                position: "center",
            },
            emphasis: {
                label: {
                    show: false,
                    fontSize: "40",
                    fontWeight: "bold",
                },
            },
            labelLine: {
                show: false,
            },
            data: [
                { value: 44, name: "Taste", itemStyle: {color: "#E8C1A0"}},
                { value: 23, name: "Variety of flavors", itemStyle: {color: "#61CDBB"}},
                { value: 15, name: "Texture", itemStyle: {color: "#E8A838"}},
                { value: 13, name: "Packaging", itemStyle: {color: "#F1E15B"}},
                { value: 5, name: "Price", itemStyle: {color: "#F47560"}}
            ],
        },
    ],
};

if (option && typeof option === "object") {
    myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
