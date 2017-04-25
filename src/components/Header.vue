<template>
  <div class="Header">
      <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <div class="logo"><img :src="imgurl"></div>
          <div class="right">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1" @click="showmsg">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><a href="#" target="_blank">订单管理</a></el-menu-item>
          </div>
        </el-menu>
  </div>
</template>

<script>
  import logo from "@/assets/newlogo.png"
  export default {
    name: 'Header',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        imgurl:logo
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      showmsg(){
        alert('hello')
      }
    }
  }
</script>  
<style scoped>
.Header {
  position: fixed;
  top:0;
  left:0;
  width:100%;
  min-width:800px;
}
.el-menu-demo{
  background-color:#313845;
}
.logo{
  float:left;
  padding-left:15px;
  margin-top:7.5px;
}
.logo img{
  display: inline-block;
  width:80%;
}
.right{
  float:right;
}
</style>