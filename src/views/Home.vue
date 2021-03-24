<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="打包优化示例，引用的大文件单独打包"/>
  </div>
</template>

<script>
import JdrtcWebApp from '@/tools/jdrtc-websdk.js'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created () {
    // console.log(JdrtcWebApp)
  }
}
</script>
