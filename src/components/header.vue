<template>
  <div class="top">
    <ul>
      <li v-for="(list,index) in topList" :key="index" @click="changeTab(index)" :class="[defaultIndex === index ? 'active' : '']">{{list.topTitle}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      defaultIndex:0,
      topList: [
        {
          topTitle:"订单提交"
        }, {
          topTitle:"填写收货地址"
        }, {
          topTitle:"正在办理"
        }, {
          topTitle:"办理完成"
        }
      ]
    }
  },
  methods: {
    changeTab(index) {
      this.defaultIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.active{
  color:#fff;
  background:url("../assets/4.jpg") no-repeat;
  background-size: 100% 100%;
}
.top{
  width:100%;
  height:44px;
  color:#3BAFFC;
  ul{
    width:100%;
    height:44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li{
      height:44px;
      text-align: center;
      line-height: 44px;
      padding:0 5px;
      font-size: 14px;
    }
  }
}
</style>
