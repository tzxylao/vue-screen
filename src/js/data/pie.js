export default {
  color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
  tooltip: {},
  legend: {
    data:["较差","中等","良好","优秀","极好"],
    // data: data['echart_6']['x_name'],
    textStyle: {
      color: 'rgba(255,255,255,.5)'
      // fontSize: '12'
    }
  },
  series: [
    {
      type: 'pie',
      radius: '55%',
      center: ['50%', '70%'],
      data:[
          {name:'较差',value:335},
          {name:'中等',value:720},
          {value:135,name:"良好"},
          {value:500,name:"优秀"},
          {value:235,name:"极好"}
      ],
      // data: data['echart_6']['data'],
      roseType: 'radius'
    }
  ]
}
