<template>
    <div class="pic">
      <img src="../assets/cc-icon.png" alt="">
    </div>
</template>

<script>
export default {
  methods: {
    showModel(){
      console.log(0)
    }
  }
}
</script>

<style lang="scss" scoped>

.pic{
  width:0;
  height:0;
  img{
    position: fixed;
    right:20px;
    bottom:50px;
    width:60px;
    height:60px;
  }
}

</style>
