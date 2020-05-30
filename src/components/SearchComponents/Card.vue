<template>
    <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-button circle style="float: left; padding: 0px; line-height: 0px; border: 0px;" @click="toAuthorInfo">
        <el-avatar :src="imgUrl" :fit="'fill'"></el-avatar>
      </el-button>
      <el-button type="text"
               style="float: left; margin-top: 10px; margin-left: 10px" @click="toAuthorInfo">{{AuthorName}}</el-button>
      <span style="float: right; font-size: 14px; margin-top: 10px;">{{postDate}}</span>
      <el-tag>分类</el-tag>
      <el-button style="margin-top: 10px; padding: 3px 0" type="text" @click="toViewMain">{{title}}</el-button>
      <el-tag type="info" size="medium" v-for="(tag,index) in tags" :key="index" style="margin-right: 8px;">
        {{tag.label}}
      </el-tag>
    </div>
  <div class="text item">
    {{simple}}
  </div>
</el-card>
</template>

<script>
export default{
  name: 'Card',
  props: {
    Card: Object
  },
  data () {
    return {
      AuthorName: this.Card.AuthorName,
      title: this.Card.title,
      simple: this.Card.simple,
      postDate: this.Card.postDate,
      tags: this.Card.tags,
      imgUrl: this.Card.imgUrl
    }
  },
  mounted () {
    console.log('Children' + this.Card)
  },
  methods: {
    toViewMain () {
      this.$router.push({name: 'ViewMain', params: {AuthorId: this.AuthorName, BlogTitle: this.title}})
    },
    toAuthorInfo () {
      this.$router.push({name: 'UserInfo', params: {UserId: this.AuthorName}})
    }
  }
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-top: 10px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    float: left;
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 15px;
    width: 900px;
  }
</style>
