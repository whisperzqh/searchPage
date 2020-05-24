<template>
    <div v-title data-title="博客分类">
      <br/>
      <el-container direction="vertical">
        <div v-for="o in pageSize" :key="o" style="margin-left: 240px;">
            <mycard :Card="Card"></mycard>
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
      Card:{
        AuthorName:'User',
        title: 'title',
        simple:'文章简介',
        postDate:'2019-01-01',
        tags:[
          {value: 'HTML', label: 'HTML'},
          {value: 'java', label: 'java'},
        ],
        imgUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
      },
      Cards:[],
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
