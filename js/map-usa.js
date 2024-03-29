var dom = document.getElementById("container");
var myChart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false
});
var app = {};
var ROOT_PATH = "https://echarts.apache.org/examples";
var option;

myChart.showLoading();
$.when(
    $.get(ROOT_PATH + "/data/asset/geo/USA.json"),
    $.getScript("https://fastly.jsdelivr.net/npm/d3-array"),
    $.getScript("https://fastly.jsdelivr.net/npm/d3-geo")
).done(function (res) {
    const usaJson = res[0];
    const projection = d3.geoAlbersUsa();
    myChart.hideLoading();
    echarts.registerMap("USA", usaJson);
    option = {
        tooltip: {
            trigger: "item",
            showDelay: 0,
            transitionDuration: 0.2
        },
        visualMap: {
            left: "right",
            min: 0,
            max: 10,
            inRange: {
                color: [
                    "#fafefd",
                    "#a5f0dc",
                    "#83ebcf",
                    "#23d6a5",
                    "#39dfb2",
                    "#20c598",
                    "#1caf87",
                    "#199976",
                    "#158365",
                    "#0a3e30"
                ]
            },
            text: ["High", "Low"],
            calculable: true
        },
        toolbox: {
            show: true,
            //orient: "vertical",
            left: "left",
            top: "top",
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: "Claims (%)",
                type: "map",
                map: "USA",
                projection: {
                    project: function (point) {
                        return projection(point);
                    },
                    unproject: function (point) {
                        return projection.invert(point);
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: [
                    { name: "Alabama", value: 1.76 },
                    { name: "Alaska", value: 0.02 },
                    { name: "Arizona", value: 1.52 },
                    { name: "Arkansas", value: 1.09 },
                    { name: "California", value: 8.38 },
                    { name: "Colorado", value: 0.94 },
                    { name: "Connecticut", value: 1.23 },
                    { name: "Delaware", value: 0.17 },
                    { name: "District of Columbia", value: 0.35 },
                    { name: "Florida", value: 8.7 },
                    { name: "Georgia", value: 3.76 },
                    { name: "Hawaii", value: 0.26 },
                    { name: "Idaho", value: 0.32 },
                    { name: "Illinois", value: 3.24 },
                    { name: "Indiana", value: 2.47 },
                    { name: "Iowa", value: 0.7 },
                    { name: "Kansas", value: 0.76 },
                    { name: "Kentucky", value: 1.82 },
                    { name: "Louisiana", value: 1.59 },
                    { name: "Maine", value: 0.47 },
                    { name: "Maryland", value: 2.26 },
                    { name: "Massachusetts", value: 1.62 },
                    { name: "Michigan", value: 3.91 },
                    { name: "Minnesota", value: 1.23 },
                    { name: "Mississippi", value: 1 },
                    { name: "Missouri", value: 1.62 },
                    { name: "Montana", value: 0.05 },
                    { name: "Nebraska", value: 0.44 },
                    { name: "Nevada", value: 1 },
                    { name: "New Hampshire", value: 0.47 },
                    { name: "New Jersey", value: 2.37 },
                    { name: "New Mexico", value: 0.35 },
                    { name: "New York", value: 5.98 },
                    { name: "North Carolina", value: 4.68 },
                    { name: "North Dakota", value: 0.05 },
                    { name: "Ohio", value: 4.51 },
                    { name: "Oklahoma", value: 1.32 },
                    { name: "Oregon", value: 1.05 },
                    { name: "Pennsylvania", value: 4.77 },
                    { name: "Rhode Island", value: 0.32 },
                    { name: "South Carolina", value: 1.52 },
                    { name: "South Dakota", value: 0.17 },
                    { name: "Tennessee", value: 2.41 },
                    { name: "Texas", value: 9.05 },
                    { name: "Utah", value: 0.35 },
                    { name: "Vermont", value: 0.05 },
                    { name: "Virginia", value: 2.32 },
                    { name: "Washington", value: 2.94 },
                    { name: "West Virginia", value: 0.82 },
                    { name: "Wisconsin", value: 1.7 },
                    { name: "Wyoming", value: 0.14 }

                ]
            }
        ]
    };
    myChart.setOption(option);
});

if (option && typeof option === "object") {
    myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
