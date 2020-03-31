<template>
  <div class="about">
    <h1>This is an about page</h1>

    <el-button @click="openDialog">打开弹窗</el-button>

    <testDialog :test-visible.sync="testDialogVisible"></testDialog>
  </div>
</template>
<script>
import testDialog from '../components/testDialog'
export default {
  components: {
    testDialog
  },
  data() {
    return {
      testDialogVisible: false
    }
  },
  methods: {
    openDialog() {
      this.testDialogVisible = true
    }
  }
}
</script>