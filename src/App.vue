
<!-- 需求 -->
<!-- 1.进来直接 城市 + 地点 -->
<!-- 2.用户点击某一个 -->
<!-- 3.画圈 -->

<template>
  <div id="app">
    {{center}}
    <img src="./assets/logo.png">
    <!-- <router-view/> -->
<baidu-map class="map" :auto-viewport="true" :center="center" :zoom="zoom" @ready="handler">

  <bm-local-search v-if='mapSearch' @markersset='markersset' @infohtmlset='infohtmlset' @resultshtmlset='resultshtmlset' @searchcomplete='searchcomplete' :panel='false' :keyword="keyword" :auto-viewport="true" :location="location"></bm-local-search>

  <!-- 第一个圈 -->
   <bm-circle v-if='!mapSearch' :center="center" :radius="radius1" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" @lineupdate="updateCirclePath" strokeOpacity='strokeOpacity1' strokeStyle='dashed' :editing="true"></bm-circle>
   <!-- 第二个圈 -->
      <bm-circle v-if='!mapSearch' :center="center" :radius="radius2" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" @lineupdate="updateCirclePath" strokeOpacity='strokeOpacity2' :editing="true"></bm-circle>

    <bm-marker @click='mapClick' :position="center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
<!--       <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/> -->
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
      strokeOpacity2:1,
      location: '',
      keyword: '北京中关村皇冠假日酒店',
      mapSearch:true,
    }
  },
  methods:{
    markersset(event){
      console.log('markersset ...');
    },
    // 点击图标之后 获取了 坐标
    infohtmlset(event){
       console.log('infohtmlset ...',event);
      this.center =  event.point;
      this.mapSearch = false;
    },
    resultshtmlset(){
      console.log('resultshtmlset ...');
    },
    searchcomplete(){
      console.log('searchcomplete ...');
    },
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
    },
    updateCirclePath(){},
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
