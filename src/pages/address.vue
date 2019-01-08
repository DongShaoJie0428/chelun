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
    <b @click="share">点击分享</b>

    <div>
      <!-- accept设置为*号会在客户端上出现卡顿，最好是用逗号连接 -->
      <input type="file" accept="image/png,image/jpg,image/jpeg" @change="uploadFile">上传图片
    </div>

    <canvas id="canvas" style="width:100%"></canvas>

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
import { goShare,uploadBase64  } from "@/api/index"
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
    },
    share(){
      // 微信朋友圈分享内容
      window['CHELUN_SHARE_DATA_WXTIMELINE'] = {
        title:"马上要放学啦！",
        link:"https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317332&token=&lang=zh_CN",
        imgUrl:"http://img3.duitang.com/uploads/item/201607/29/20160729112141_Mv83A.jpeg"
      },
      // 微信朋友分享
      window['CHELUN_SHARE_DATA_WXMESSAGE'] = {
        title:"笨死啦！",
        desc:"你个大笨蛋",
        link:"https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317332&token=&lang=zh_CN",
        imgUrl:"http://img4.imgtn.bdimg.com/it/u=4211026559,2609260323&fm=26&gp=0.jpg"
      }
      goShare()
    },
    uploadFile(e){
      console.log(e.target.files)
      let file = e.target.files[0]
      // 判断图片是否过大
      if (file.size > 30*1024) {
        // 转成base64
        // base64 包括两个 url-loader  file-loader
        // url-loader可以将图片转为base64字符串，能更快的加载图片，一旦图片过大，
        // 就需要使用file-loader的加载本地图片，故url-loader可以设置图片超过多少字节时，使用file-loader加载图片。
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = res=>{
          console.log(res.target.result,"...res")
          let img = new Image();
          img.src = res.target.result;
          img.onload = async () => {
            // 创建canvas进行压缩
            let canvas = document.getElementById("canvas");
            let context = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;

            // 第一种方法是压缩画布的大小
            context.drawImage(img,0,0,img.width,img.height,0,0,img.width/2,img.height/2)
          
            let base64 = canvas.toDataURL()
            let res = await uploadBase64(base64)
            console.log(res,"res...base64")

            // 第二种压缩 压缩图片质量
            let base65 = canvas.toDataURL("image/png",0.1);
            let res2 = await uploadBase64(base65);
            console.log("res2",res)
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
b{
  position: absolute;
  left:0;
  top:300px;
  font-size: 14px;

}
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
