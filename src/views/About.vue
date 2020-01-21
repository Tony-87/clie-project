<template>
  <div class="about">
    <h1>This is an about page</h1>

    <hr />
    <button @click="askDevicePermission">get imu</button>
    <br />
    <button @touchstart="askDevicePermission">touchstart get imu</button>
    <br />
    <button @touchmove="askDevicePermission">touchmove get imu</button>
    <br />
    <button @touchend="askDevicePermission">touchend get imu</button>
    <br />
    <h2>imu data</h2>
    <div>alpha: {{imuData.alpha}}</div>
    <div>beta: {{imuData.beta}}</div>
    <div>gamma: {{imuData.gamma}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3],
      imuData: {}
    }
  },
  mounted() {
    this.initIMUEvent()
  },
  methods: {
    askDevicePermission() {
      if (window.DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
          .then(response => {
            if (response == 'granted') {
              window.addEventListener('devicemotion', (e) => {

              })
            }
          })
          .catch(console.error)

      }
    },
    initIMUEvent() {
      console.log('window.DeviceMotionEvent', window.DeviceMotionEvent);

      window.addEventListener('deviceorientation', (e) => {
        console.log(e)
        this.imuData = e
      })
    }
  }
}
</script>

<style>
button {
  border: solid 1px #f00;
  font-size: 30px;
}
</style>