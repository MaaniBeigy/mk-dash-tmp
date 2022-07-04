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
        padding: 2
    },
    series: [
        {
            type: "pie",
            radius: ["40%", "70%"],
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
                { value: 38, name: "25-35 yrs" },
                { value: 34, name: "35-45 yrs" },
                { value: 17, name: "45-55 yrs" },
                { value: 8, name: "55-65 yrs" },
                { value: 2, name: "<25 yrs" },
                { value: 1, name: ">65 yrs" },
            ],
        },
    ],
};

if (option && typeof option === "object") {
    myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
