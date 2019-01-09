<template>
  <div>
    <canvas ref="canvas"></canvas>
    <canvas ref="canvasone"></canvas>
  </div>
</template>
<script>
import Bg from "../assets/bg.jpg"
export default {
  computed:{
    canvas(){
      return this.$refs.canvas
    },
    canvasOne(){
      return this.$refs.canvasone
    },
    context(){
      return this.$refs.canvas.getContext("2d")
      return this.$refs.canvasone.getContext("2d")
    }
  },
  mounted(){
    let img = new Image()
    let img1 = new Image()
    img.src = Bg;
    img1.src = "https://avatars1.githubusercontent.com/u/42017463?s=460&v=4"
    img.onload = () => {
      this.canvas.width = img.width
      this.canvas.height = img.height
      this.context.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height)
      this.context.drawImage(img1, 0, 0, img1.width, img1.height, 110, 760, img1.width/5.5, img1.height/5.5)

      this.context.font = '30px 宋体';
      this.context.fillText("匣与枯", 105,880);
      this.context.textAlign = 'center';
      this.context.textBaseline = 'top';
    }
  }
}
</script>
<style lang="scss">
canvas{
  width:100%;
}

</style>
