var dom = document.getElementById("container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: "item",
  },
  toolbox: {
    show: true,
    feature: {
      dataView: { show: false },
      restore: { show: false},
      saveAsImage: {pixelRatio: 2, name: "Funnel"},
    },
  },
  legend: {
    show: false,
    data: ["View", "Claim", "Survey", "Purchase"],
  },
  series: [
    {
      name: "Actual",
      type: "funnel",
      left: "0%",
      width: "100%",
      maxSize: "95%",
      label: {
        position: "inside",
        color: "#fff",
        formatter: "{b}={c}",
      },
      itemStyle: {
        opacity: 1,
        borderColor: "#fff",
        borderWidth: 3,
      },
      emphasis: {
        label: {
          position: "inside",
        },
      },
      data: [
        { value: 21848, name: "View" },
        { value: 15293, name: "Claim" },
        { value: 14222, name: "Survey" },
        { value: 2627, name: "Purchase" },
      ],
    },
  ],
};

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
