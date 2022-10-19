<template>
  <div class="home">
    
    <div id="box" class="box" ></div>
    <div id="box2" class="box" ></div>
    <div id="box3" class="box" ></div> 
  </div>
</template>

<script>
// @ is an alias to /src
// import VRView from '@jdfe/jdar-panorama' 

export default {
  name: 'home',
  components: {
  },
  data(){
    return{
      sceneInfo: {
        id: 2001657504727237,
        sid: "yumv466il83vcu9u",
        name: "26-2048-ri",
        assetName: "26-2048-ri",
        preview:
          "https://img10.360buyimg.com/fit/jfs/t1/150425/29/27382/296032/62cb83e2Ee3ab9d85/fcd1791c36392638.jpg",
        image: {
          back: "https://img10.360buyimg.com/fit/jfs/t1/60177/35/19448/420220/62cb83daE29773062/b91d38a999b15cc2.jpg",
          down: "https://img10.360buyimg.com/fit/jfs/t1/205000/16/23724/510171/62cb83dcEcd218b3e/2675a6d1e2ac9676.jpg",
          front:
            "https://img10.360buyimg.com/fit/jfs/t1/188540/39/26942/392579/62cb83ddE7905c12f/7748e5b04d71ae18.jpg",
          left: "https://img10.360buyimg.com/fit/jfs/t1/11036/33/18467/182139/62cb83dbE077eebdb/b2ec7da80275f97a.jpg",
          right:
            "https://img10.360buyimg.com/fit/jfs/t1/180174/26/26662/296032/62cb83d8E0dbfbeef/f511e6492ca2ac71.jpg",
          up: "https://img10.360buyimg.com/fit/jfs/t1/67760/35/19248/33340/62cb83d9E0b31eaf7/c1c494c568e8d989.jpg",
        },
        width: 2048,
        height: 2048,
        panorama_type: "cube",
        image_preview: {
          left: "https://storage.360buyimg.com/pano-assets/757c4b0b-f607-4628-b1b8-f15a3faf61b0/bnZB0crMEQIZiz1Wd2bqPYdV.jpeg",
          back: "https://storage.360buyimg.com/pano-assets/757c4b0b-f607-4628-b1b8-f15a3faf61b0/QibL8A-5isGtuxCS832ASJEq.jpeg",
          right:
            "https://storage.360buyimg.com/pano-assets/757c4b0b-f607-4628-b1b8-f15a3faf61b0/PvmXYy1ytI5wEEEqmuEP-5GW.jpeg",
          up: "https://storage.360buyimg.com/pano-assets/757c4b0b-f607-4628-b1b8-f15a3faf61b0/0-Gw-Lil0_3nH7viEGTmjHQx.jpeg",
          front:
            "https://storage.360buyimg.com/pano-assets/757c4b0b-f607-4628-b1b8-f15a3faf61b0/1tyCFsF-QqOlTXLyrtLlWnIY.jpeg",
          down: "https://storage.360buyimg.com/pano-assets/757c4b0b-f607-4628-b1b8-f15a3faf61b0/gZhUO-8k3ziU5T9INz8vP2YH.jpeg",
        },
        load_type: 1,
        hotspots: [
          {
            id: 85673,
            radius: 0.04,
            position: {
              x: 28.21251786487686,
              y: 88.71269506400151,
              z: -389.0168525529524,
            },
            type: "spriteText",
            action_type: "showGoods",
            label: "ååä¸",
            img_url: "",
            anchor_type: "click",
            style: null,
            parameter: {
              title: "ååä¸",
              name: "ååä¸",
              sku: "100027934332",
              color: 1,
              audioComment: "",
              audioCommentText: "",
              recommendSkus: [],
              sellingPoints: [],
              extraIntroes: [],
              audioCommentType: 1,
              mainImg:
                "https://img10.360buyimg.com/imgzone/jfs/t1/146265/7/28726/126152/62fc8ba1Eb281dad3/3bff61e0dc1df0ac.jpg",
              hide: false,
            },
          },
        ],
        embedspots: [],
        audioTxt: "",
        audio: "",
        space: "ä¸»å§",
        style: "ç¾å¼",
        areaSize: "32",
        zoom: 1,
        camera_position: {
          x: -0.03444321795007105,
          y: -0.017107000188002423,
          z: 0.09230934558218681,
        },
        camera_angle: {
          lon: 339.5380377887621,
          lat: 9.850037044572234,
        },
        camera_img:
          "https://img10.360buyimg.com/fit/jfs/t1/72600/39/22153/5045269/6324131cE14d001f1/0483f64e1ecfbcb0.png",
      },
    }
  },
  mounted(){
    // this.loadPano("box");
    // this.loadPano("box2");
    // this.loadPano("box3");
  },
  methods:{
    loadPano(containerId) {
      let option = this.sceneDataToOption(this.sceneInfo);
      new VRView.Player(containerId, option);
    },  sceneDataToOption(scene) {
      let option = {
        panorama_type: scene.panorama_type,
        image: scene.image,
        // load_type: scene.load_type,
        // image_preview: scene.image,

        width: scene.width,
        height: scene.height,

        hot_spots: scene.hotspots,
        embed_spots: scene.embedspots,

        is_autopan_off: false, //开启自动旋转(开场动画)
        is_auto_rotation: true, //自动旋转检测window.config.isAutoRotation
        cruise_time: 60,
        delay_time: 2000,
        is_play_planet: true,

        fov: 100,
        fixed_lat: scene.camera_angle ? scene.camera_angle.lat : 0,
        fixed_lon: scene.camera_angle ? scene.camera_angle.lon : 1,
      };
      if (scene.image_preview) {
        option.load_type = scene.load_type;
        option.image_preview = scene.image_preview;
      }
      console.log(option);
      return option;
    },
  }
}
</script>
<style>
  body{
    margin:0;
  }
  .box{
    width: 100vw;
    height: 50vh;
    border:solid 1px red;
    box-sizing: border-box;
    position: relative;
  }
  .jd-container{
    top:0;
    left:0;
}

.pano-commodity{
    border:solid 1px red;
    background-color: #FFF;
}
</style>