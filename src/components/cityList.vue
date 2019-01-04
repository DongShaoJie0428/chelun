<template>
  <div class="city">
    <li @click="cityClick">
      <span>当前驾照签发城市</span>
      <b>{{city.join(" ")}}</b>
    </li>
    <li @click="costClick">
      <span>可补换的签发城市</span>
      <b>请选择补换地</b>
    </li>

    <van-popup v-model="Cityshow" :overlay="true" position="bottom">
      <van-picker :columns="Citycolumns" show-toolbar ref="cityPicker" @change="cityChange" @cancel="onCancelCity" title="签发城市"  @confirm="onConfirmCity"/>
    </van-popup>
  </div>
</template>

<script>
import { mapState,mapActions,mapMutations } from "vuex"
import { cityList,costList } from "@/api/index"
export default {
  data() {
    return {
      Cityshow:false,
      Citycolumns: []
    }
  },
  created(){
  //  console.log(getCityList)
   this.getCityList().then(res=>{
      this.Citycolumns = [
        {
          values: this.cityList.map(item=>item.name)
        },
        {
          values: this.cityList[0].list.map(item=>item.name)
        }
      ]
    })
  },
  computed:{
    ...mapState({
      cityList: state => state.cityPicker.cityList,
      city: state => state.cityPicker.city
    })
  },
  methods: {
    ...mapActions({
      getCityList:"cityPicker/getCityList",
      getCostList: 'cityPicker/getCostList'
    }),
    ...mapMutations({
      updateState:"cityPicker/updateState"
    }),
    onConfirmCity(values){
      this.updateState({city:values})
      this.onCancelCity()
    },
    onCancelCity(){
      this.Cityshow = false
    },
    // 当省份改变的时候跟新城市数据
    cityChange(picker,values) {
      // console.log(values)
      // 获取当前省份的下标
      let index = this.cityList.findIndex(item=>item.name == values[0]);
      // 调用api更新城市数据
      this.$refs.cityPicker.setColumnValues(1,this.cityList[index].list.map(item=>item.name))
    },
    cityClick(){
      this.Cityshow = true
    },
    costClick() {
      if (!this.city.length){
        alert('请选择签发城市');
      }else{
        this.getCostList();
      }
    }
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
li:nth-child(1) b,li:nth-child(2) b{
  float: right;
  padding-right:20px;
  color:#ccc;
  font-weight: 100;
}
</style>