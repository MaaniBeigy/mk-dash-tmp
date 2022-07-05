var dom = document.getElementById("container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // Use axis to trigger tooltip
      type: "shadow", // "shadow" as default; can also be "line" or "shadow"
    },
  },
  legend: {
    type: "scroll",
    orient: "vertical",
    x: "left",
    top: "middle",
    icon: "circle",
    padding: 0,
    itemGap: 5,
  },
  grid: {
    show: false,
    top: 30,
    bottom: 30,
    left: "5%",
    right: "5%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
    show: false,
  },
  yAxis: {
    type: "category",
    offset: 0,
    axisLabel: {
        margin: 95,
        color: "#363636",
        align: "left",
    },
    data: [
      "Wholefoods",
      "Kroger",
      "Sprouts",
      "Walmart",
      "HEB",
      "Publix",
      "Vons"
    ],
  },
  series: [
    {
      name: "5",
      type: "bar",
      stack: "total",
      label: {
        show: true,
        color: "#fff"
      },
      emphasis: {
        focus: "series"
      },
      data: [61, 58, 65, 42, 56, 48, 76],
      itemStyle: {
        color: "#45C578"
      }
    },
    {
      name: "4",
      type: "bar",
      stack: "total",
      label: {
        show: true,
        color: "#fff"
      },
      emphasis: {
        focus: "series"
      },
      data: [12, 13, 8, 21, 12, 5, 6],
      itemStyle: {
        color: "#61CDBB"
      }
    },
    {
      name: "3",
      type: "bar",
      stack: "total",
      label: {
        show: true,
        color: "#fff"
      },
      emphasis: {
        focus: "series"
      },
      data: [13, 17, 19, 8, 2, 18, 10],
      itemStyle: {
        color: "#F1E15B"
      }
    },
    {
      name: "2",
      type: "bar",
      stack: "total",
      label: {
        show: true,
        color: "#fff"
      },
      emphasis: {
        focus: "series"
      },
      data: [9, 9, 3, 4, 21, 15, 6],
      itemStyle: {
        color: "#E8A838"
      }
    },
    {
      name: "1",
      type: "bar",
      stack: "total",
      label: {
        show: true,
        color: "#fff"
      },
      emphasis: {
        focus: "series"
      },
      data: [5, 3, 5, 25, 9, 14, 2],
      itemStyle: {
        color: "#F47560"
      }
    },
  ],
};

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
