<template>
  <div class="about">
    <h1>This is an about page</h1>
    <iframe  src="https://predfq.jd.com/pse/edit.html#?materialId=59239" width="800" height="600" ></iframe>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [1, 2, 3],
      imuData: {}
    }
  },
  mounted () {
    // https://pscpre.jd.com/psc/getDesignToolMaterial?sceneRenderId=59239
    fetch('/api/psc/getDesignToolMaterial?sceneRenderId=59239')
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
  },
  methods: {

  }
}
</script>

<style>
button {
  border: solid 1px #f00;
  font-size: 30px;
}
</style>
