<template>
  <div class="vcheck" @click="changeVal">
      {{checked}}
  </div>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  methods: {
    changeVal () {
      console.log(this.checked)
      this.checked = !this.checked
      this.$emit('change', this.checked)
    }
  }
}
</script>

<style>
.vcheck{
    display: inline-block;
    border:1px solid red;
    /* width:20px; */
    /* height: 20px; */
}
</style>
