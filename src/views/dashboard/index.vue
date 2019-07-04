<template>
  <div class="mainbox">
    <div class="head">
      <h1>守护达数据大屏监控</h1>
      <div class="weather"><!--<img src="picture/weather.png"><span>多云转小雨</span>--><span>{{showTime}}</span></div>
    </div>

    <ul class="clearfix">
      <li>
        <div class="boxall" style="height: 3.2rem">
          <div class="alltitle">新增订单统计</div>
          <chart
            style="width:100%;"
            class="allnav"
            :options="bar"
            :init-options="initOptions"
            ref="bar"
            theme="ovilia-green"
            autoresize
          />
          <div class="boxfoot"></div>
        </div>
        <div class="boxall" style="height: 3.2rem">
          <div class="alltitle">新增护工统计</div>
          <chart
            style="width:100%;"
            class="allnav"
            :options="line"
            :init-options="initOptions"
            ref="line1"
            autoresize
          />
          <div class="boxfoot"></div>
        </div>
        <div class="boxall" style="height: 3.2rem">
          <div class="alltitle">护工信用分布</div>
          <chart
            style="width:100%;"
            class="allnav"
            :options="pie"
            :init-options="initOptions"
            ref="pie"
            autoresize
          />
          <div class="boxfoot"></div>
        </div>
      </li>
      <li style="width: 70%;">
        <div class="bar">
          <div class="barbox">
            <ul class="clearfix">
              <li class="pulll_left counter" v-for="item in data.summary">{{item.count}}</li>
            </ul>
          </div>
          <div class="barbox2">
            <ul class="clearfix">
              <li class="pulll_left" v-for="item in data.summary">{{item.title}}</li>
            </ul>
          </div>
        </div>

        <div class="map">
          <div class="map1" style="left: 3.7rem;"><img src="../../assets/images/lbx.png"></div>
          <div class="map2" style="left: 4.2rem;"><img src="../../assets/images/jt.png"></div>
          <div class="map3" style="left: 4.4rem;"><img src="../../assets/images/map.png"></div>
          <chart
            class="map4"
            style="top: 0px;left: 0%;width: 100%"
            :options="map"
            :init-options="initOptions"
            ref="map"
            autoresize
          />
        </div>
      </li>
    </ul>




  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import qs from 'qs'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/map'

// built-in theme
import 'echarts/theme/dark'
// Map of China
import chinaMap from '@/assets/json/china.json'

// 加载option数据
import map from '../../js/data/map'
import bar from '../../js/data/bar'
import line from '../../js/data/line'
import pie from '../../js/data/pie'

// registering map data
ECharts.registerMap('china', chinaMap)
let t = {};
export default {
  name: 'Dashboard',
  components:{
    chart: ECharts
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data(){
    let options = qs.parse(location.search, { ignoreQueryPrefix: true })
    return {
      showTime:'',
      bar:bar.getBar1(),
      map,
      line,
      pie,
      initOptions: {
        renderer: options.renderer || 'canvas'
      },
      data:{
        summary:[
          {
            title:'护工机构',
            count:100
          },
          {
            title:'医院数量',
            count:30
          },
          {
            title:'护工数量',
            count:5000
          },
          {
            title:'订单数量',
            count:10000
          }
        ]
      }
    }
  },
  mounted(){
    const that = this
    var html = document.getElementsByTagName("html");
    html[0].style.fontSize = document.body.clientWidth/20 + 'px';
    window.onresize = () => {
      var html = document.getElementsByTagName("html");
      html[0].style.fontSize = document.body.clientWidth/20 + 'px';
    }

    this.timeStart();
  },
  methods:{
    timeStart(){
        clearTimeout(t);//清除定时器
        t = setInterval(()=>{
          let dt = new Date();
          var y = dt.getFullYear();
          var mt = dt.getMonth() + 1;
          var day = dt.getDate();
          var h = dt.getHours();//获取时
          var m = dt.getMinutes();//获取分
          var s = dt.getSeconds();//获取秒
          if(s < 10){
            s = '0'+s;
          }
          if(m < 10){
            m = '0'+m;
          }
          if(h < 10){
            h = '0'+h;
          }
          this.showTime = y + "年" + mt + "月" + day + "日 " + h + "时" + m + "分" + s + "秒";
        },1000)
      }
  }
}

</script>

<style lang="scss" scoped>
  @import "../../assets/css/comon0.css";
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

