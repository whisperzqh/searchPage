<template>
  <div>
    <el-checkbox style="float: left; margin-left: 10px" v-model="checked1" label="分类1" border></el-checkbox>
    <el-checkbox style="float: left; margin-left: 10px" v-model="checked2" label="分类2" border></el-checkbox>
    <el-checkbox style="float: left; margin-left: 10px" v-model="checked3" label="分类3" border></el-checkbox>
    <el-checkbox style="float: left; margin-left: 10px" v-model="checked4" label="分类4" border></el-checkbox>
    <el-checkbox style="float: left; margin-left: 10px" v-model="checked5" label="分类5" border></el-checkbox>
    <el-checkbox style="float: left; margin-left: 10px" v-model="checked6" label="分类6" border></el-checkbox>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked1: true,
      checked2: false,
      checked3: false,
      checked4: true,
      checkboxGroup1: [],
      checkboxGroup2: []
    }
  }
}
</script>
