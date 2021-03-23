<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div v-for="(item,index) in dataList" :key="index">
      <div>
        <span>{{item.name}} </span>
        <span>{{item.select}} </span>
        <vcheck v-model="item.select"></vcheck>
      </div>
    </div>
  </div>
</template>

<script>
import vcheck from '@/components/vcheck.vue'
export default {
  components: {
    vcheck
  },

  data () {
    return {
      dataList: [
        { name: 'abc', select: false },
        { name: 'bo', select: false },
        { name: 'quan', select: false },
        { name: 'fang', select: false }
      ]
    }
  }
}
</script>
