<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div ref="echarts1" class="echarts-test"></div>
    <div ref="echarts2" class="echarts-test"></div>
    <div ref="echarts3" class="echarts-test"></div>
    <div ref="echarts4" class="echarts-test"></div>
    <div ref="echarts5" class="echarts-test"></div>
    <div ref="echarts6" class="echarts-test"></div>
    <div ref="echarts7" class="echarts-test"></div>
    <div ref="echarts8" class="echarts-test"></div>
    <div ref="echarts9" class="echarts-test"></div>
    <div ref="echarts10" class="echarts-test"></div>
    <div ref="echarts11" class="echarts-test"></div>
    <div ref="echarts12" class="echarts-test"></div>
    <div ref="echarts13" class="echarts-test"></div>
    <div ref="echarts14" class="echarts-test"></div>
    <div ref="echarts15" class="echarts-test"></div>
    <div ref="echarts16" class="echarts-test"></div>
    <div ref="echarts17" class="echarts-test"></div>
    <div ref="echarts18" class="echarts-test"></div>
    <div ref="echarts19" class="echarts-test"></div>
    <div ref="echarts20" class="echarts-test"></div>
    <div ref="echarts21" class="echarts-test"></div>
    <div ref="echarts22" class="echarts-test"></div>
    <div ref="echarts23" class="echarts-test"></div>
    <div ref="echarts24" class="echarts-test"></div>
    <div ref="echarts25" class="echarts-test"></div>
    <div ref="echarts26" class="echarts-test"></div>
    <div ref="echarts27" class="echarts-test"></div>
    <div ref="echarts28" class="echarts-test"></div>
    <div ref="echarts29" class="echarts-test"></div>
    <div ref="echarts30" class="echarts-test"></div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      myChart1: undefined,
      myChart2: undefined,
      myChart3: undefined,
      myChart4: undefined,
    };
  },
  mounted() {
    this.initGraph1();
    this.initGraph2();
    this.initGraph3();
    this.initGraph4();
  },
  methods: {
    initGraph1() {
      // 基础折线图
      this.myChart1 = this.$echarts.init(this.$refs.echarts1);
      const option = {
        xAxis: {
          boundaryGap: true, // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。默认为true。
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true, // 是否平滑
            areaStyle: {}, // 区域填充样式。设置后显示成区域面积图。
          },
        ],
      };
      this.myChart1.setOption(option);
    },
    initGraph2() {
      // 折线图堆叠
      this.myChart2 = this.$echarts.init(this.$refs.echarts2);
      const option = {
        title: {
          text: "Stacked Line",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          // 图例组件
          data: ["Line 1", "Line 2", "Line 3", "Line 4", "Line 5"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true, // grid 区域是否包含坐标轴的刻度标签，为true时常用于『防止标签溢出』的场景
        },
        toolbox: {
          // 工具栏
          feature: {
            dataZoom: {
              // 数据区域缩放。目前只支持直角坐标系的缩放。
              yAxisIndex: "none"
            },
            dataView: {
              // 数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
            },
            saveAsImage: {
              // 保存为图片按钮
              title: "test",
              iconStyle: {
                color: "#000",
              },
            },
            magicType: {
              // 动态类型切换按钮
              type: ["line", "bar", "stack"],
            },
            restore: {
              // 配置项还原。
            },
          },
        },
        // xAxis: {
        //   type: "category",
        //   boundaryGap: false,
        //   data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        // },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
        ],
        // yAxis: {
        //   type: "value",
        // },
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: '{value} °C'
            }
          },
        ],
        series: [
          {
            name: "Line 1",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(128, 255, 165)",
                },
                {
                  offset: 1,
                  color: "rgb(1, 191, 236)",
                },
              ]),
            },
            markPoint: {
              // 标记点
              data: [{ name: '周最低', type: "min" }]
            },
            markLine: {
              // 标记线
              data: [
                { type: 'average', name: 'Avg' },
                [
                  {
                    symbol: 'none',
                    x: '90%',
                    yAxis: 'max'
                  },
                  {
                    symbol: 'circle',
                    label: {
                      position: 'start',
                      formatter: 'Max'
                    },
                    type: 'max',
                    name: '最高点'
                  }
                ]
              ]
            },
            emphasis: {
              focus: "series",
            },
            data: [140, 232, 101, 264, 90, 340, 250],
          },
          {
            name: "Line 2",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                // 前4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始.
                // 第5个参数则是一个数组, 用于配置颜色的渐变过程. 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置, color表示颜色
                {
                  offset: 0,
                  color: "rgb(0, 221, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(77, 119, 255)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [120, 282, 111, 234, 220, 340, 310],
          },
          {
            name: "Line 3",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(55, 162, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(116, 21, 219)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 132, 201, 334, 190, 130, 220],
          },
          {
            name: "Line 4",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 0, 135)",
                },
                {
                  offset: 1,
                  color: "rgb(135, 0, 157)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [220, 402, 231, 134, 190, 230, 120],
          },
          {
            name: "Line 5",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            label: {
              show: true,
              position: "top",
            },
            areaStyle: {
              opacity: 0.8,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                // 前4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始.
                // 第5个参数则是一个数组, 用于配置颜色的渐变过程. 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置, color表示颜色
                {
                  offset: 0,
                  color: "rgb(255, 191, 0)",
                },
                {
                  offset: 1,
                  color: "rgb(224, 62, 76)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [220, 302, 181, 234, 210, 290, 150],
          }
        ],
      };
      this.myChart2.setOption(option);
    },
    initGraph3() {
      this.myChart3 = this.$echarts.init(this.$refs.echarts3);
      const option = {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '30%']
        },
        visualMap: {
          // visualMap 是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
          type: 'piecewise',
          show: false,
          dimension: 0,
          seriesIndex: 0,
          pieces: [
            // 自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式。例如：
            // 指定min或者max表示范围，不指定max或者min，则表示无穷
            // 或者，更精确得，可以使用 lt（小于，less than），gt（大于，greater than），
            // lte（小于等于 less than or equals），gte（大于等于，greater than or equals）来表达边界：
            {
              gt: 1,
              lt: 3,
              color: 'rgba(0, 0, 180, 0.4)',
            },
            {
              gt: 5,
              lt: 7,
              color: 'rgba(0, 0, 180, 0.4)'
            }
          ]
        },
        series: [
          {
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
              color: '#5470C6',
              width: 5
            },
            markLine: {
              symbol: ['none', 'none'],
              label: { show: false },
              data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
            },
            areaStyle: {},
            data: [
              ['2019-10-10', 200],
              ['2019-10-11', 560],
              ['2019-10-12', 750],
              ['2019-10-13', 580],
              ['2019-10-14', 250],
              ['2019-10-15', 300],
              ['2019-10-16', 450],
              ['2019-10-17', 300],
              ['2019-10-18', 100]
            ]
          }
        ]
      };
      this.myChart3.setOption(option);
    },
    initGraph4() {
      this.myChart4 = this.$echarts.init(this.$refs.echarts4);
      const data = [["2000-06-05", 116], ["2000-06-06", 129], ["2000-06-07", 135], ["2000-06-08", 86], ["2000-06-09", 73], ["2000-06-10", 85], ["2000-06-11", 73], ["2000-06-12", 68], ["2000-06-13", 92], ["2000-06-14", 130], ["2000-06-15", 245], ["2000-06-16", 139], ["2000-06-17", 115], ["2000-06-18", 111], ["2000-06-19", 309], ["2000-06-20", 206], ["2000-06-21", 137], ["2000-06-22", 128], ["2000-06-23", 85], ["2000-06-24", 94], ["2000-06-25", 71], ["2000-06-26", 106], ["2000-06-27", 84], ["2000-06-28", 93], ["2000-06-29", 85], ["2000-06-30", 73], ["2000-07-01", 83], ["2000-07-02", 125], ["2000-07-03", 107], ["2000-07-04", 82], ["2000-07-05", 44], ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66], ["2000-07-10", 91], ["2000-07-11", 92], ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131], ["2000-07-15", 111], ["2000-07-16", 64], ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77], ["2000-07-20", 83], ["2000-07-21", 111], ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]];
      console.log("data", data.length); // 50，是下面pieces分区的依据
      const dateList = data.map(function (item) {
        return item[0];
      });
      const valueList = data.map(function (item) {
        return item[1];
      });
      // const arr = valueList.sort(function (a, b) {
      //   return a-b;
      // }); // [44, 55, 57, 60, 64, 66, 68, 69, 71, 72, 73, 73, 73, 77, 82, 83, 83, 84, 85, 85, 85, 86, 88, 91, 92, 92, 93, 94, 106, 106, 107, 107, 107, 111, 111, 111, 113, 115, 116, 125, 128, 129, 130, 131, 135, 137, 139, 206, 245, 309]
      // console.log("arr", arr);
      const min = 44;  // 44

      const max = 309;  // 309
      const option = {
        // Make gradient line here
        visualMap: [
          {
            show: false,
            dimension: 0,
            pieces: [
              {
                lte: 8,
                color: 'blue'
              },
              {
                gt: 8,
                lte: 12,
                color: 'red'
              },
              {
                gt: 12,
                lte: 13,
                color: 'blue'
              },
              {
                gt: 13,
                lte: 16,
                color: 'red'
              },
              {
                gt: 16,
                color: 'blue'
              }
            ]
          },
          {
            show: false,
            seriesIndex: 1,
            dimension: 1, // 维度 data的每个列是一个维度
            pieces: [
              {
                lte: 50,
                color: 'blue'
              },
              {
                gt: 50,
                lte: 70,
                color: 'red'
              },
              {
                gt: 70,
                lte: 100,
                color: 'blue'
              },
              {
                gt: 100,
                lte: 200,
                color: 'red'
              },
              {
                gt: 200,
                lte: 300,
                color: 'red'
              },
              {
                gt: 300,
                color: 'blue'
              }
            ]
          }
        ],
        title: [
          {
            left: 'center',
            text: 'Gradient along the y axis'
          },
          {
            top: '55%',
            left: 'center',
            text: 'Gradient along the x axis'
          }
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        xAxis: [
          {
            data: dateList
          },
          {
            data: dateList,
            gridIndex: 1
          }
        ],
        yAxis: [
          {},
          {
            gridIndex: 1,
            axisPointer: {
              snap: true, // 坐标轴指示器是否自动吸附到点上。默认自动判断。
            }
          }
        ],
        grid: [
          {
            bottom: '60%'
          },
          {
            top: '60%'
          }
        ],
        series: [
          {
            type: 'line',
            showSymbol: false,
            data: valueList
          },
          {
            type: 'line',
            showSymbol: false,
            data: valueList,
            xAxisIndex: 1,
            yAxisIndex: 1
          }
        ]
      };
      this.myChart4.setOption(option);
    },
  },
};
</script>

<style lang="less">
.echarts-test {
  width: 100%;
  height: 400px;
}
</style>
