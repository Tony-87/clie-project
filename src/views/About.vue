<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      {{listData}}
    </div>
    <div> currIndex=  {{currIndex}}
    </div>
    <div>swiperIndex = {{swiperIndex}}</div>
    <div>{{showData}}</div>
    <van-swipe style="height: 200px" vertical
      :initial-swipe="1"
      @change="changeSwiper">
      <van-swipe-item>{{listData[showData[0]]}}</van-swipe-item>
      <van-swipe-item>{{listData[showData[1]]}}</van-swipe-item>
      <van-swipe-item>{{listData[showData[2]]}}</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listData: [],
      currIndex: 3,
      swiperIndex: 1,
      showData: [2, 3, 4]
    }
  },
  created () {
    for (let i = 0; i < 30; i++) {
      this.listData.push(i)
    }
  },
  methods: {
    changeSwiper (val) { // val 当前显示的下标
      // 切换一下，就切一下数据，保证数据可用
      var preIndex = (val - 1 + 3) % 3
      var nextIndex = (val + 1) % 3
      let divide = val - this.swiperIndex
      if (divide === 1 || divide === -2) {
        console.log('向上')
        this.currIndex++
        this.showData[nextIndex] = this.currIndex + 1
      } else {
        console.log('向下')
        this.currIndex--
        this.showData[preIndex] = this.currIndex - 1
      }
      this.swiperIndex = val
    }
  }
}
</script>
<style lang="less">
.van-swipe-item {
  background-color: #ccc;
  font-size: 30px;
}
</style>
