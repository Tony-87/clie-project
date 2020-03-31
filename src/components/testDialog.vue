<template>
  <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: ['testVisible'],
  data() {
    return {

    }
  },
  computed: {
    dialogVisible: {
      get() {
        console.log(this.testVisible);

        return this.testVisible
      },
      set(val) {
        console.log('set val=', val);

        this.$emit('update:testVisible', val)
      }
    }
  },
  methods: {
    handleClose() {
      this.dialogVisible = false
    }
  }
}
</script>