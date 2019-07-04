export default {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: '#dddc6b'
      }
    }
  },
  legend: {
    top: '0%',
    data: ['人数'],
    // data: ['python'],
    textStyle: {
      color: 'rgba(255,255,255,.5)',
      fontSize: '12'
    }
  },
  grid: {
    left: '10',
    top: '30',
    right: '10',
    bottom: '10',
    containLabel: true
  },

  xAxis: [{
    type: 'category',
    boundaryGap: false,
    axisLabel: {
      textStyle: {
        color: "rgba(255,255,255,.6)",
        fontSize: 12
      }
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(255,255,255,.2)'
      }

    },

    data: ['06-27','06-28', '06-29','06-30','07-01','07-02','07-03']
    // data: data['echart_4']['x_name']

  }
  ],

  yAxis: [{
    type: 'value',
    axisTick: {show: false},
    axisLine: {
      lineStyle: {
        color: 'rgba(255,255,255,.1)'
      }
    },
    axisLabel: {
      textStyle: {
        color: "rgba(255,255,255,.6)",
        fontSize: 12
      }
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255,255,255,.1)'
      }
    }
  }],
  series: [
    {
      name: '数量',
      type: 'line',
      // 是否平滑显示
      smooth: true,
      // 是否在曲线上显示标记点
      showSymbol: false,
      // 曲线样式,颜色和宽度
      lineStyle: {
        color: '#0184d5',
        width: 2
      },
      areaStyle: {
        color: 'rgba(1, 132, 213, 0.4)',
        shadowColor: 'rgba(0, 0, 0, 0.1)'
      },
      itemStyle: {
        color: '#0184d5',
        borderColor: 'rgba(221, 220, 107, .1)',
        borderWidth: 12
      },
      data: [3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4, 3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4]
      // data: data['echart_4']['data']
    }/*,
    {
        name: 'java',
        type: 'line',
        smooth: true,
        showSymbol: false,
        lineStyle: {
            color: '#00d887',
            width: 2
        },
        areaStyle: {
            color: 'rgba(0, 216, 135, 0.4)',
            shadowColor: 'rgba(0, 0, 0, 0.1)'
        },
        itemStyle: {
            color: '#00d887',
            borderColor: 'rgba(221, 220, 107, .1)',
            borderWidth: 12
        },
        data: [5, 3, 5, 6, 1, 5, 3, 5, 6, 4, 6, 4, 8, 3, 5, 6, 1, 5, 3, 7, 2, 5, 1, 4]
    }*/
  ]
}
