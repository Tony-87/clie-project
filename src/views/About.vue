<template>
  <div class="about">
    <div class="detail-page">
      <mt-loadmore :top-method="loadTopPrev" :bottom-method="loadBottomNext" ref="loadmore">
        <ul class="data-list">
          <li v-for="item in 30" :key="item">{{ item }}</li>
        </ul>

        <h1>This is an about page</h1>

        <div id="nav">
          <router-link to="/">Home</router-link>|
          <router-link to="/about">About</router-link>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    loadTopPrev () {
      this.$refs.loadmore.onTopLoaded()
    },
    loadBottomNext () {
      this.$refs.loadmore.onBottomLoaded()
    }
  }
}
</script>

<style lang="less" scoped>
.detail-page {
  border: solid 1px #f00;
  position: relative;
  // height: 101vh;
  overflow: auto;
  .mint-loadmore {
    border: solid 1px #00f;
    box-sizing: border-box;
  }
  .data-list {
    // padding: 0;
    li {
      list-style: none;
      border: solid 1px #0ff;
      height: 40px;
      line-height: 40px;
      margin-bottom: 10px;
    }
  }
}
</style>
