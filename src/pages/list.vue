<template>
  <div class="list_box">
    <div id="myChart" :style="{width: '800px', height: '300px'}"></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'SUV TOP10',
          textStyle:{
            fontSize:24,
            fontWeight:500,
            color:"#666"
          }
        },
      tooltip: {
        trigger: 'axis'
      },
      // 这里需要与series内的每一组数据的name值保持一致
      // legend: {
      //   data:['吉利博越','冠道','本田XR-V','哈弗H6','途观','全新途胜','本田CR-V','缤智','奔弛GLA级','汉兰达']
      // },
      grid: {
        left: '5%',
        right: '4%',
        bottom: '3%',
        top:'20%',
        containLabel: true
      },
      toolbox: {
        feature: {
            saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan/18','Mar/18','May/18','Jul/18','Sep/18','Nov/18']
      },
      yAxis: [
        {
          type: 'value',
          splitArea: { show: true }
        }
      ],
      series: [{
          name:'吉利博越',
          type:'line',
          stack: '总量',
          data:[120, 132, 101, 134, 90, 230, 210]
        }, {
            name:'冠道',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        }, {
            name:'本田XR-V',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        }, {
            name:'哈弗H6',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        }, {
            name:'途观',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }, {
            name:'全新途胜',
            type:'line',
            stack: '总量',
            data:[820, 932, 900, 954, 1220, 1390, 1360]
        }, {
            name:'本田CR-V',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }, {
            name:'缤智',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }, {
            name:'奔弛GLA级',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }, {
            name:'汉兰达',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }]
      });
    }
  }
}
</script>

<style>
.list_box{
  width:70%;
  height:100%;
  margin:0 auto;
  background: #ccf;
}
#myChart{
  margin-top:30px;
}
</style>
