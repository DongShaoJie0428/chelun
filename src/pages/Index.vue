<template>
  <div class="index_box">
    <Header />
    <div class="pic">
      <img src="../assets/1.jpg" alt="">
    </div>
    <div class="person">
      <Upload/>
    </div>
    <div style="width:100%;height:15px;background:#eee;"></div>
    <div class="server">
      <ol>
        <Server />
        <CityList />
        <li>
          <span>服务费</span>
          <i style="float: right; padding-right:20px; color:red; font-style: normal;">￥399</i>
        </li>
      </ol>
    </div>
    <div style="width:100%;height:15px;background:#eee;"></div>
    <div class="youhui">
      <span>优惠</span>
      <span>登陆后查看优惠券 &gt;</span>
    </div>
    <div class="quest">
      <a href="#">常见问题?</a>
      <Quest />
      <!-- <img src="../assets/cc-icon.png" alt=""> -->
    </div>
    <div class="bottom">
      <p>
        <span>实付:</span>
        <i>￥399</i>
      </p>
      <router-link to="/address"><p style="background:#999999;color:#fff;padding:12px 10px;" @click="changPay">立即支付</p></router-link>
    </div>
  </div>
</template>

<script>
import Upload from '@/components/Upload';
import Server from '@/components/server';
import CityList from '@/components/cityList';
import Quest from "@/components/quest"
import Header from "@/components/header"
import { gotoPay } from "@/api/index"

export default {
  data() {
    return{
      show:false
    }
  },
  components: {
    Upload,
    Server,
    CityList,
    Quest,
    Header
  },
  // 因为beforeCreate还没有初始化完毕，所以直接调用then()
  // beforeCreate(){
  //   cityList().then(res=>{
  //     console.log(res)
  //   })
  // },

  methods: {
    changPay() {
      // console.log(0)
      gotoPay()
    }
  }
  // mounted() {
  //   isVip().then(res=>{
  //     console.log("isVip...",res)
  //   })
  // }
}
</script>
<style lang="scss" scoped>
.van-picker{
  width:100%;
  
}
*{
  padding:0;
  margin:0;
  list-style: none;
  box-sizing: border-box;
  font-size:14px;
}
.index_box{
  width:100%;
  height:100%;
}
.pic{
  width:100%;
  height:130px;
  img{
    width:100%;
    height:130px;
  }
}
.person{
  width:100%;
  height:120px;
  margin-top:20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  dl{
    width:25%;
    height:120px;
    dd{
      width:100%;
      img{
        width:65px;
        height:50px;
        display: block;
        margin: 0 auto;
      }
    }
    dt{
      display: block;
      margin:0 auto;
      text-align: center;
      padding-top:10px;
      font-size: 14px;
      width:55px;
    }
  }
}
.server{
  width:100%;
  height:180px;
  ol{
    width:100%;
    height:100%;
    li{
      width:100%;
      height:44px;
      border-bottom:solid 1px #ccc;
      line-height: 44px;
      padding-left:10px;
    }
    li:nth-child(2) b,li:nth-child(3) b{
      float: right;
      padding-right:20px;
      color:#ccc;
      font-weight: 100;
    }
    li:nth-child(4){
      border-bottom:none;
    }
  }
}
.youhui{
  width:100%;
  height:50px;
  padding:0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.quest{
  width:100%;
  height:80px;
  background: #eee;
  position: relative;
  a{
    display: block;
    width:100%;
    height:44px;
    text-align: center;
    line-height: 44px;
    color:#64A7D4;
  }
}
.bottom{
  width:100%;
  height:44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left:20px;
  p{
    i{
      color:red;
      font-style: normal;
    }
  }
}
</style>

