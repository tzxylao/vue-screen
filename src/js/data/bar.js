export default {
  getBar1(){
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 柱形图阴影样式
          type: 'shadow'
        }
      },
      // 柱形图与外容器间距
      grid: {
        left: '0%',
        top: '10px',
        right: '0%',
        bottom: '4%',
        // x,y轴是否显示
        containLabel: true
      },
      legend: {},
      xAxis: {
        type: 'category',
        data: ['06-27','06-28', '06-29','06-30','07-01','07-02','07-03'],
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            // 横坐标线宽
            width: 1,
            type: "solid"
          }
        },
        axisTick: {
          // 是否显示X轴刻度
          show: false
        },
        axisLabel: {
          // x轴数据标签显示样式
          interval: 0,
          show: true,
          splitNumber: 15,
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: '12'
          }
        }
      },
      // Declare Y axis, which is a value axis.
      yAxis: {
        type: 'value',
        axisLabel: {
          show: true,
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: '12'
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,.1	)",
            width: 1,
            type: "solid"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      },
      series: [
        {
          type: 'bar',
          data: [200, 300, 300, 900, 1500, 1200, 600],
          barWidth: '35%', //柱子宽度
          itemStyle: {
            color: '#2f89cf',
            // 数值为0时不绘制该柱形
            opacity: 1,
            // 柱形图圆角
            barBorderRadius: 5
          }
        }
      ]
    }
  }

}

function randomize() {
  return [0, 0, 0].map(v => {
    return Math.round(300 + Math.random() * 700) / 10
  })
}
