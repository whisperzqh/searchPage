<template>
    <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-button style="float: left" type="primary" icon="el-icon-user" circle></el-button>
      <el-link type="info" style="float: left; margin-top: 10px; margin-left: 10px">作者姓名</el-link>
      <span style="float: right; font-size: 14px; margin-top: 10px;">发布时间</span>
      <el-tag>分类</el-tag>
      <el-button style="margin-top: 10px; padding: 3px 0" type="text" >标题</el-button>
      <el-tag type="info" size="medium">标签一</el-tag>
      <el-tag type="info" size="medium">标签二</el-tag>
    </div>
  <div class="text item">
    {{'文章简介信息 '}}
  </div>
</el-card>
</template>

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
    margin-left: 50px;
    margin-top: 15px;
    width: 900px;
  }
</style>
