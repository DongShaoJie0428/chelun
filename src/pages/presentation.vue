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
          <dd><img src="http://picture.eclicks.cn/g2/img/r/2018/12/29/21aa608f09f224fa.jpg" alt=""></dd>
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
    dl{
      width:30%;
      height:200px;
      background: #ccf;
      display: flex;
      margin-right:10px;
      dd{
        width:130px;
        height:200px;
        img{
          width:130px;
          height:200px;
          padding:5px;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
