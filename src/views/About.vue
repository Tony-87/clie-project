<template>
  <div class="about">
    <h1>This is an about page</h1>

    <hr />

    <div class="outer-box" @click="outerClick">
      <div class="inner-box" @click.stop="innerClick">
        <button @click="btnClick">button</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    outerClick () {
      console.log('outter Click')
    },
    innerClick () {
      console.log('inner Click')
    },
    btnClick () {
      console.log('btn Click')
    }
  }
}
</script>
<style lang="less">
.outer-box {
  border: solid 1px #f00;
  padding: 20px;
}
.inner-box {
  border: solid 1px #00f;
  padding: 20px;
}
</style>
