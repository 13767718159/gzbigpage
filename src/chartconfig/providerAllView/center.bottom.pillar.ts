const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  color: ['#16D4D2'],
  xAxis: {
    axisTick: {
      show: false
    },
    axisLabel: {
      textStyle: {
        color: '#388DD3'
      }
    },
    axisLine: {
      lineStyle: {
        color: '#183888'
      }
    },
    data: ['公开招标', '邀请招标', '邀请招标', '邀请询价', '邀请谈判', '公开比选', '公开询价', '单一采购', '公开竞判', '电商采购']
  },
  yAxis: {
    axisTick: {
      lineStyle: {
        width: 2,
        color: '#398FD1'
      }
    },
    axisLabel: {
      textStyle: {
        color: '#398FD1'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#183888'
      }
    },
    axisLine: {
      //坐标轴轴线相关设置。数学上的x轴
      show: false
    }
  },
  series: [
    {
      type: 'bar',
      barWidth: '40%',
      data: [2.5, 2.8, 3.7, 0.7, 1.9, 4.7, 4.2, 2.5, 6.4, 3.5]
    }
  ]
}
export default option
