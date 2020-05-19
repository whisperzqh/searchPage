<template>
    <div v-title data-title="博客分类">
      <br/>
      <el-container direction="vertical">
        <div v-for="o in pageSize" :key="o" style="margin-left: 240px;">
            <mycard></mycard>
        </div><br>
        <Page @changePage="changePage"></Page>
      </el-container>
    </div>
</template>

<script>
import mycard from '../SearchComponents/Card'
import Page from '../ViewComponents/Page'
export default {
  components: {
    Page,
    mycard
  },
  data () {
    return {
      items: [
        { con: '分类1', id: '1' },
        { con: '分类2', id: '2' },
        { con: '分类3', id: '3' },
        { con: '分类4', id: '4' }
      ],
      pageSize: 10,
    }
  },
  methods:{
    changePage(val){
      this.pageSize = val;
    }
  },
  comments:{
    Page,
  }
}
</script>
