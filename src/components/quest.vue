<template>
    <div class="pic">
      <img src="../assets/cc-icon.png" alt="" @click="showModel">
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
  width:60px;
  height:60px;
  img{
    position: fixed;
    right:20px;
    bottom:50px;
    width:60px;
    height:60px;
  }
}

</style>
