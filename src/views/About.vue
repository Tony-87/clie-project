<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2  :class="{red:isActive('abc')}">这是一个动态样式</h2>
    <h2  :class="{red:isActive('name')}">这是一个动态样式</h2>

    <button @click="setTxt">set</button>
    {{isActive()}}
    <!-- <input v-model="txt" type="text"> -->
    <!-- <p>{{txt}}</p> -->
  </div>
</template>

<script>
export default {

  data () {
    return {
      txt: 'b',
      color: 'color'
    }
  },
  computed: {
    isActive2 () {
      return this.txt === 'a'
    }
  },
  methods: {
    setTxt () {
      this.txt = 'a'
      this.color = 'a'
    },
    isActive (val) {
      console.log('exe ===', val)

      return this.txt === 'a'
    }
  }
}
</script>
<style lang="less" scoped>
.box{
  position: relative;
  border:solid 1px red;
  height: 500px;
}
.red{
  color:red;
}
</style>
