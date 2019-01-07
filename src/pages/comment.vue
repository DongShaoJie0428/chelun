<template>
  <div class="common_box">
    <div class="common">
      <h5 class='comment_nav mar'>
        <p>
          <span>2016</span>
          <span>2017</span>
          <span>2018</span>
        </p>
        <p>年份</p>
      </h5>
      <h5 class='comment_nav'>
        <p>
          <span>数据理论</span>
          <span>涨姿势</span>
          <span>市场动态</span>
          <span>原创</span>
        </p>
        <p>分类</p>
      </h5>
    </div>
    <div class="common_box_list">
      <dl>
        <dd><img src="http://picture.eclicks.cn/g2/l/2018/12/29/8b64b3c45968151c_482_315.png" alt=""></dd>
        <dt>
          <h3>2018中国驾驶教练员生存状态大数据报告</h3>
          <div class="tags">
            <span>市场动态</span>
            <span>原创</span>
          </div>
          <p>教练员的真实生存状态和工作现状</p>
          <p style="font-size:12px;margin-top:30px;padding-left:20px">2018/12/29</p>
        </dt>
      </dl>
      <dl>
        <dd><img src="http://picture.eclicks.cn/g2/l/2018/10/19/4620dced279f6e97_433_302.png" alt=""></dd>
        <dt>
          <h3>如何用数字化手段对汽车行业的销售运营进行改造和升级</h3>
          <div class="tags">
            <span>原创</span>
            <span>市场动态</span>
          </div>
          <p>多种数字化手段在汽车行业销售运营中的应用</p>
          <p style="font-size:12px;margin-top:30px;padding-left:20px">2018/12/29</p>
        </dt>
      </dl>

      <dl>
        <dd><img src="http://picture.eclicks.cn/g2/l/2018/09/27/48b9dd8a100461b0_482_315.jpg" alt=""></dd>
        <dt>
          <h3>2018新能源消费趋势洞察</h3>
          <div class="tags">
            <span>市场动态</span>
            <span>原创</span>
          </div>
          <p>2018年新能源车主及潜在消费者偏好洞察</p>
          <p style="font-size:12px;margin-top:30px;padding-left:20px">2018/12/29</p>
        </dt>
      </dl>
      <dl>
        <dd><img src="http://picture.eclicks.cn/g1/l/2018/07/31/c58dcb0ad39a7efc_482_315.jpg" alt=""></dd>
        <dt>
          <h3>2018年二手车市场分析</h3>
          <div class="tags">
            <span>原创</span>
            <span>市场动态</span>
          </div>
          <p>对高速增长阶段的二手车市场进行分析</p>
          <p style="font-size:12px;margin-top:30px;padding-left:20px">2018/12/29</p>
        </dt>
      </dl>
    </div>
    <div class="common_right">
      <p>最热</p>
      <ul>
        <li>新车市场的新阵地：三四线汽车消费者画像（上）</li>
        <li>大数据在热销车型预测领域的初探</li>
        <li>90后女性车主的崛起带来了汽车个性化的春天</li>
        <li>流言终结！宝马车主都是暴发户么？</li>
        <li>人以类聚，车以群分</li>
        <li>中低端SUV之战进入下半场</li>
        <li>华南被日系车占领那些年</li>
        <li>大数据细说换车背后的无形推手</li>
        <li>捕获保时捷车主的大数据攻略</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.comment_nav {
    width: 100%;
    height: 28px;
    line-height: 32px;
    display: flex;
    justify-content: flex-end;
    padding: 0 15px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 400;
}

.comment_nav p:nth-of-type(1) {
    margin-right: 15px;
    color: #42b0fa;
}

.comment_nav p:nth-of-type(1) span {
    margin-left: 10px;
}

.mar {
    margin-top: 10px;
}
.common_box{
  width:90%;
  margin:0 auto;
}
.common_box_list{
  position: relative;
  margin-top:10px;
  width:70%;
  height:100%;
  display: flex;
  flex-direction: column;
  dl{
    width:100%;
    height:170px;
    margin-top:20px;
    display: flex;
    dd{
      width:250px;
      height:170px;
      img{
        width:100%;
        height:100%;
        border-radius: 15px;
        margin-left:30px;
        margin-right:30px;
      }
    }
    dt{
      width:300px;
      margin-left:50px;
      h3{
        font-weight: 900;
      }
      .tags{
        width:100%;
        height:30px;
        margin-top:20px;
        margin-bottom:20px;
        span:nth-child(2),span:nth-child(1){
          display: inline-block;
          padding:2px 3px;
          border:solid 1px #f66;
          color:#f66;
        }
        span:nth-child(1){
          border:solid 1px #f90;
          color:#f90;
        }
      }
      p{
        color:#666;
      }
    }
  }
}
.common_right{
  position: absolute;
  right:60px;
  top:780px;
  width:20%;
  height:500px;
  background: #fbfbfb;
  p{
    width:100%;
    border-left: solid 3px #3aaffd;
    color:#999;
    display: inline-block;
    padding-left:10px;
    margin-top:10px;
  }
  ul{
    margin-top:20px;
    height:300px;
    margin-left:15px;
    width:100%;
    li{
      height:30px;
      line-height: 30px;
      list-style: square;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
