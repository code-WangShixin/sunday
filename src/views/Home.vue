<template>
  <div class="bo">
    <div class="box">
      <img src="../../public/c44235a2858d24ad9e7999ee5091523.jpg" alt="" class="img">
<el-input v-model="input" placeholder="请输入账号"></el-input>
<el-input placeholder="请输入密码" v-model="inputbox" show-password></el-input>
</div>
<button style="margin-left:47%;color:black;background:white;width:130px;height:40px;border-radius:25px 25px 25px 25px" @click="go()">登陆</button>
  </div>
</template>
<script>
import def from '../network/core'
export default {
  data(){
    return{
      input:'',
      inputbox:'',
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
 go(){
 def.login({
      username:this.input,
      password:this.inputbox
    }).then((res)=>{
     
     
      if(res.data.meta.status==200){
         this.list=res.data.data.token
       console.log(this.list)
        this.$router.push({
          path:'/About'
        })
        this.save()
      }else{
        alert("账号或密码错误，请重新输入")
        this.input=' ',
        this.inputbox=' '
      }
    })
    
  },
  save(){
    localStorage.list=JSON.stringify(this.list)
  }
  }
 
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  background: black;
}
.box{
  width: 200px;
  margin: 0 auto;
  margin-top: 350px;
}
.img{
  width: 100px;
  border-radius: 50px 50px 50px 50px;
  margin-left: 50px;
}
</style>