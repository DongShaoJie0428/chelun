<template>
  <div class="wrap">
    <header class="header">
      <div class="header_con">
          <img src="https://www.chelun.com/static/dist/img/logo.png" alt="">
          <ul>
            <li>产品</li>
            <li>关于我们</li>
            <li>大数据</li>
            <li>新闻</li>
            <li>招聘</li>
            <li>商城</li>
            <li>登陆/注册</li>
          </ul>
          <img class="more" src="../assets/genduo.png" alt="">
      </div>
    </header>
    <section class="section">
      <div class="section_box">
        <ol class="section_tab">
          <router-link to="/comment"><li class="active">分析评论</li></router-link>
          <router-link to="/list"><li>趋势榜单</li></router-link>
          <router-link to="/presentation"><li>研究报告</li></router-link>
        </ol>
      </div>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
 
}
</script>

<style lang="scss" >
*{
  padding:0;
  margin:0;
  list-style: none;
  box-sizing: border-box;
}
.wrap{
  width:100%;
  height:100%;
  font-size: 14px;
}
.header{
  width:100%;
  height:600px;
  background: url("http://picture.eclicks.cn/g1/l/2018/04/17/2e324eb8e740788b_2633_960.png") no-repeat;
  background-size: 100% 100%;
  .header_con{
    width:100%;
    height:100px;
    border-bottom: solid 1px #ccc;
    display: flex;
    justify-content: space-between;
    padding:0 100px;
    img{
      width:150px;
      height:40px;
      margin-top:35px;
    }
    ul{
      height:100px;
      display: flex;
        line-height: 100px;
      li{
        padding:0 15px;
        font-size: 20px;
        text-align: center;
      }
    }
    .more{
      display: none;
    }
  }
}

.section{
  width:100%;
  height:100%;
  .section_box{
    width:100%;
    border-bottom: solid 1px #ccc;
    .section_tab{
      width:60%;
      height:80px;
      display:flex;
      align-items: center;
      justify-content: space-around;
      font-size: 20px;
      font-weight: 600;
      a{
        color:#666;
      }
      li{
        height:100%;
        line-height: 80px;
      }
    }
  }
}
.active{
  color:black;
  border-bottom: solid 2px #3aaffd;
  display: block;
}

@media screen and (max-width:1000px) {
  .header{
    width:100%;
    height:600px;
    background: url("http://picture.eclicks.cn/g1/l/2018/04/17/2e324eb8e740788b_2633_960.png") no-repeat;
  background-size: 100% 100%;
    .header_con{
      position: relative;
      width:100%;
      height:100px;
      background: #fff;
      img{
        width:150px;
        height:40px;
      }
      ul{
        display: none;
      }
      .more{
        display: block;
        width:50px;
        height:50px;
      }
    }
  }
}
</style>
