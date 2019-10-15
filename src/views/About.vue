<template>
  <div class="about">
    <h1>This is an about page</h1>

    <hr />
    <h2>vue-cropper裁剪插件</h2>
    <div>
      <span>截取比例：</span>&nbsp;
      <button @click="changeCropRate(0)">4:3</button>&nbsp;
      <button @click="changeCropRate(1)">1:1</button>&nbsp;
      <button @click="changeCropRate(2)">3:4</button>&nbsp;
      <button @click="changeCropRate(3)">2:3</button>&nbsp;
      <button @click="changeCropRate(4)">5:8</button>&nbsp;
    </div>
    <br />
    <div>
      <button @click="option.fixed = false">fixed false</button>
      <button @click="getImgAxis">getImgAxis</button>
      <button @click="getCropAxis">getCropAxis</button>
      <button @click="cropInfo">cropW&H</button>
      <button @click="setCropWidth">set crop Width</button>
    </div>
    <br />
    <div class="cropper-box">
      <vueCropper
        :key="cropperKey"
        ref="cropper"
        :img="option.img"
        :outputSize="1"
        :outputType="'jpeg'"
        :centerBox="true"
        :infoTrue="true"
        :info="true"
        :original="false"
        :autoCrop="true"
        :autoCropWidth="400"
        :autoCropHeight="300"
        :fixed="option.fixed"
        :enlarge="1"
        :full="true"
        :fixedNumber="option.fixedNumber"
        :mode="'contain'"
        @cropMoving="cropMoving"
        @imgMoving="imgMoving"
      ></vueCropper>
    </div>
  </div>
</template>

<script>
import { VueCropper } from 'vue-cropper'
export default {
  components: {
    VueCropper
  },
  data () {
    return {
      fixedNumberList: [[4, 3], [1, 1], [3, 4], [2, 3], [5, 8]],
      cropperKey: 1,
      option: {
        img: 'http://img11.360buyimg.com/nb/jfs/t1/49730/11/12860/1304019/5d9d8fe8Eac69c56d/49d1e9b9edc0fb67.jpg',
        size: 1,
        outputType: 'jpg',
        centerBox: true,
        infoTrue: true,
        fixed: true,
        fixedNumber: [4, 3]
      }
    }
  },
  methods: {
    getImgAxis () {
      let axis = this.$refs.cropper.getImgAxis()
      console.log(axis)
    },
    getCropAxis () {
      let axis = this.$refs.cropper.getCropAxis()
      console.log(axis)
    },
    cropInfo () {
      let w = this.$refs.cropper.cropW
      let h = this.$refs.cropper.cropH
      console.log(w, h)
    },
    setCropWidth () {
      this.$refs.cropper.cropW = 100
    },
    changeCropRate (rateIndex) {
      // 修改比例后，要设置一次宽高, 同时要保证设置后的宽高不会超出范围，一定要图片内。如果超出，按小的来改变。
      // 判断在不在图片内，获取到两组axis计算。

      // this.$refs.cropper.clearCrop()
      this.option.fixedNumber = this.fixedNumberList[rateIndex]
      // 计算新的宽高
      let imgAxis = this.$refs.cropper.getImgAxis()
      let cropAxis = this.$refs.cropper.getCropAxis()
      let newHeight = this.$refs.cropper.cropW * this.option.fixedNumber[1] / this.option.fixedNumber[0]
      if (cropAxis.y1 + newHeight > imgAxis.y2) {
        let newWidth = this.$refs.cropper.cropH * this.option.fixedNumber[0] / this.option.fixedNumber[1]
        this.$refs.cropper.cropW = newWidth
      } else {
        this.$refs.cropper.cropH = newHeight
      }

      // this.$refs.cropper.cropH = newHeight
    },
    cropMoving (o) {
      console.log(o)
    },
    imgMoving (o) {
      console.log(o)
    }
  }
}
</script>

<style lang="less">
.cropper-box {
  width: 800px;
  height: 450px;
  border: solid 1px #f00;
  margin: 0 auto;
}
</style>
