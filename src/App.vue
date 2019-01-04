<template>
  <!-- <button @click="login">点击登陆</button> -->
  <router-view></router-view>
</template>

<script>
import JSBridge from './utils/JSBridge.js';
export default {
  name: 'app',
  data () {
    return {}
  },
  methods: {
    login(){
      JSBridge.invoke('app', 'login', {
        loginCallBackName: (res)=>{
          console.log('res...', res);
        }
      });
    }
  }
}
</script>

<style lang="scss">
@import './scss/common.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
