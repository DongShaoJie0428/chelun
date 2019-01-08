<template>
  <div class="presentation_box">
    <div class="presentation">
      <div class="presentation_top">
        <p>2017</p>
        <p>2018</p>
        <b>年份</b>
      </div>
      <div class="presentation_content">
        <dl>
          <dd><img src="http://picture.eclicks.cn/g2/img/r/2018/12/29/21aa608f09f224fa.jpg" alt=""></dd>
          <dt>
            <p>2018中国驾驶教练员生存状态大数据报告</p>
            <b>2018/12/29</b>
            <i>立即查看</i>
          </dt>
        </dl>
        <dl>
          <dd><img src="http://picture.eclicks.cn/g2/img/r/2018/09/27/4f665a9bc1355c9b.png" alt=""></dd>
          <dt>
            <p>2018新能源消费趋势洞察</p>
            <b>2018/09/27</b>
            <i>立即查看</i>
          </dt>
        </dl>
        <dl>
          <dd><img src="http://picture.eclicks.cn/g1/img/r/2018/08/24/dba21613de9b1cf3.png" alt=""></dd>
          <dt>
            <p>中国汽车复购用户研究报告</p>
            <b>2018/12/29</b>
            <i>立即查看</i>
          </dt>
        </dl>
        <dl>
          <dd><img src="http://picture.eclicks.cn/g1/img/r/2017/12/06/d047706990817c28.png" alt=""></dd>
          <dt>
            <p>车轮大数据2017行业总结报告</p>
            <b>2018/12/29</b>
            <i>立即查看</i>
          </dt>
        </dl>
        <dl>
          <dd><img src="http://picture.eclicks.cn/g2/img/r/2018/09/27/4f665a9bc1355c9b.png" alt=""></dd>
          <dt>
            <p>2018中国驾驶教练员生存状态大数据报告</p>
            <b>2018/12/29</b>
            <i>立即查看</i>
          </dt>
        </dl>
        <dl>
          <dd><img src="http://picture.eclicks.cn/g1/img/r/2018/08/24/dba21613de9b1cf3.png" alt=""></dd>
          <dt>
            <p>2018中国驾驶教练员生存状态大数据报告</p>
            <b>2018/12/29</b>
            <i>立即查看</i>
          </dt>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.presentation_box{
  width:90%;
  height:100%;
  margin:0 auto;
}
.presentation{
  width:100%;
  height:100%;
  .presentation_top{
    width:100%;
    height:80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right:20px;
    p{
      padding:0 15px;
      color:#42b0fa;
    }
  }
  .presentation_content{
    width:100%;
    height:100%;
    display: flex;
    flex-wrap: wrap;
    dl{
      width:430px;
      height:280px;
      display: flex;
      margin-left:20px;
      margin-bottom:10px;
      dd{
        width:130px;
        height:200px;
        img{
          width:200px;
          height:280px;
          padding:10px;
          box-sizing: border-box;
        }
      }
      dt{
        padding-left:70px;
        padding-top:10px;
        b{
          font-weight: 100;
          color:#666;
          font-size: 12px;
          margin-top:20px;
          display: block;
          margin-bottom:160px;
        }
        i{
          display: inline-block;
          padding:2px 8px;
          background: #3aaffd;
          color:#fff;
          font-style: normal;
        }
      }
    }
  }
}
</style>
