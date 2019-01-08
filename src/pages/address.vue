<template>
  <div class="address_box">
    <Header />
    <div class="address_top">
      <p>收货地址</p>
    </div>
    <div class="address_list">
      <ul>
        <li>联系省市</li>
        <li>详细地址</li>
        <li>
          <span>联系电话</span>
          <input type="text" placeholder="请输入联系电话">
        </li>
        <li>
          <span>联系人</span>
          <input type="text" placeholder="请输入联系人">
        </li>
      </ul>
    </div>
    <div class="address_bottom">
      <p>确认</p>
    </div>
    <div class="address_money" @click="money">
      <img src="../assets/ee-icon.png" alt="">
    </div>
    <div class="mask" v-if="show">
      <div class="mask_pic">
        <img src="../assets/coupon.png" alt="">
        <div class="btn">
          <button @click="refuse">狠心拒绝</button>
          <button @click="refuse">点击领取</button>
        </div>
      </div>
    </div>
    <Quest />
  </div>
</template>

<script>
import Header from "@/components/header"
import Quest from "@/components/quest"
import { mapState,mapActions,mapMutations } from "vuex"
export default {
  components:{
    Header,
    Quest
  },
  data(){
    return {
      show:false
    }
  },
  computed:{
    ...mapState({
      cityList:state => state.cityPicker.cityList
    })
  },
  mounted(){
    console.log(this.$store)
  },
  methods:{
    ...mapActions({
      getCityList:"cityPicker/getCityList",
    }),
    money(){
      this.show = !this.show
    },
    refuse(){
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
.address_box{
  position: relative;
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
}
.address_top{
  width:100%;
  height:30px;
  background: #ccc;
  p{
    text-align: center;
    line-height: 30px;
    font-size: 14px;
  }
}
.address_list{
  width:100%;
  flex:1;
  ul{
    width:100%;
    height:200px;
    li{
      border-bottom:solid 1px #ccc;
      height:44px;
      line-height: 44px;
      padding-left:5px;
      box-sizing: border-box;
      font-size: 14px;
      input{
        width:200px;
        height:40px; 
        line-height: 40px;
        float: right;
        padding-left:80px;
        box-sizing: border-box;
      }
    }
  }
}
.address_bottom{
  width:100%;
  height:44px;
  background: #666;
  line-height: 44px;
  text-align: center;
  color:#fff;
  font-size: 14px;
}
.address_money{
  width:0;
  height:0;
  img{
    position: fixed;
    right:20px;
    bottom:130px;
    width:60px;
    height:60px;
  }
}
.mask{
  position: absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0,.3);
  font-size: 14px;
  .mask_pic{
    width:300px;
    height:300px;
    background: #fff;
    margin:100px auto;
    img{
      width:300px;
      height:250px;
      padding: 10px;
      box-sizing: border-box;
    }
    .btn{
      width:100%;
      height:50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      button{
        border-top: solid 1px #ccc;
        width:50%;
        height:44px;
        display: block;
      }
    }
  }
}

</style>
