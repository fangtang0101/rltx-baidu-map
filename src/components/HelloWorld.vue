<template>
  <div id="app">
    <!-- <router-view/> -->
<baidu-map class="map" :auto-viewport="true" :center="center" :zoom="zoom" @ready="handler">

  <!-- 第一个圈 -->
   <bm-circle :center="center" :radius="radius1" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" @lineupdate="updateCirclePath" strokeOpacity='strokeOpacity1' strokeStyle='dashed' :editing="true"></bm-circle>
   <!-- 第二个圈 -->
      <bm-circle :center="center" :radius="radius2" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" @lineupdate="updateCirclePath" strokeOpacity='strokeOpacity2' :editing="true"></bm-circle>

    <bm-marker @click='mapClick' :position="{lng: 116.404, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
    </bm-marker>
</baidu-map>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      center:{lng:0,lat:0},
      zoom:3,
      radius1:500,
      radius2:600,
      strokeOpacity1:1,
      strokeOpacity2:1

    }
  },
  methods:{
    // 点击获取 位置
    mapClick(event){
      console.log('map click ...',event,'坐标是',event.point);
    },
    handler({BMap,map}){
      console.log(BMap, map)
      // this.center.lng = 116.404
      // this.center.lat = 39.915
      this.center = '北京中关村皇冠假日酒店'
      this.zoom = 15
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.map {
  width: 100%;
  height: 300px;
}
</style>
