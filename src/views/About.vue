<template>
  <div>
   
    <el-container>
  <el-header style="position:relative"><h3></h3> <div><img src="../../public/c44235a2858d24ad9e7999ee5091523.jpg" alt="" style="width:3%;border-radius:50px 50px 50px 50px;position: absolute;left:0;top:0"></div><el-button type="danger" style="position: absolute;right:10px;top:10px" @click="del">退出登录</el-button></el-header>
  <el-container>
    <el-aside width="200px">
      <el-row>
       <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-menu"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  </el-row>
  </el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:[]
    }
  },
created(){
   let list=localStorage.list
   if(list){
     this.list=JSON.parse(list)
   }
  },
  methods:{
    del(){
      this.list=[]
      localStorage.list=JSON.stringify(this.list)
      this.$router.push({
        path:"/"
      })
    }
  }
}
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: black;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>