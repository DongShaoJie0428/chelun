<template>
    <li>
      <span>服务类型</span>
      <span style="float:right;padding-right:20px" @click="showModel">{{form.type}}</span>
      <van-popup v-model="show" :overlay="true" position="bottom">
      <van-picker :columns="columns" show-toolbar @cancel="onCancel" title="服务类型"  @confirm="onConfirm"/>
      </van-popup>
    </li>
    
</template>

<script>
export default {
  data() {
    return {
      form:{
        type:"换驾照 >"
      },
      columns: ["补驾照","换驾照"],
      show:false
    }
  },
  methods:{
    showModel() {
      this.show = true
    },
    onCancel() {
      this.show = false
    },
    onConfirm(value) {
      this.form.type = value
      this.onCancel()
    },
  }
}
</script>

<style lang="scss" scoped>

  li{
    width:100%;
    height:44px;
    border-bottom:solid 1px #ccc;
    line-height: 44px;
    padding-left:10px;
  }

</style>
