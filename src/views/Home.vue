<template>
  <div class="home">
    <HomeBanner></HomeBanner>
    <router-link to="application" class="join">JOIN US</router-link>
    <div class="About">
      <router-link to="/AboutIt" class="AboutIt" @click="change">关于爱特
      <div :class="[LineChange ? 'line' : 'changeLine']"></div>
      </router-link>
      <router-link to="/AboutUs" class="AboutUs" @click="change2">关于我们
      <div :class="[LineChange ? 'changeLine' : 'line']" ></div>
      </router-link>
    </div>
    <router-view></router-view>
    <Footer></Footer>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeBanner from '../components/Home/HomeBanner'
import Footer from '../components/Home/Footer'
export default {
  name: 'Home',
  components: {
    // HelloWorld
    HomeBanner,
    Footer
  },
  data(){
    return{
      LineChange:true
    }
  },
  created(){
    if(this.$router.path!=='/AboutIt'){
      this.$router.replace('/AboutIt')
    }
  },

  methods:{
    change(){
      this.LineChange=true;
    },
    change2(){
      this.LineChange=false;
    }
  },
  // mounted(){
  //    sessionStorage.setItem('id','AboutIt');
  // }
}
</script>
<style scoped>
.join{
  text-decoration: none;
  width: 524px;
  height: 70px;
  background: linear-gradient(-79deg,#a4a4f0,#b9b1f0);
  box-shadow: 1px 2px 8px 1px rgba(76, 76, 76, 0.57);
  border-radius: 36px;
  display: block;
  text-align: center;
  font-size: 31px;
  font-family: Microsoft YaHei UI;
  font-weight: bold;
  color: #FFFFFF;
  line-height: 70px;
  margin: 0 auto;
  margin-top: 110px;
  margin-bottom: 35px;
}
.join:hover{
  transition: all 0.5s;
  background:linear-gradient(-79deg,#b9b1f0,#a4a4f0);
  background: pink;
}
.About{
  display: flex;
  justify-content:space-around;
  margin: 0 auto;
  /* padding: 0 222px 0 222px 0; */
  /* padding-left: ; */
  margin-right: 222px;
  margin-left: 222px;
  margin-top: 80px;
}
.About>a{
  text-decoration: none;
  font-size: 36px;
  font-family: Microsoft YaHei UI;
  font-weight: bold;
  color: #333333;
  display: block;
  text-align: center;
  line-height: 65px;
}
.AboutUs{
  display: flex;
  flex: 1;
  margin-left: 20px;
}
.AboutIt{
  display: flex;
  flex: 1;
}
.line{
  height: 12px;
  background: linear-gradient(270deg, #E2BBDB, #7000B7, #D3B4E3, #D7B5E3, #EE9EA8, #FFB1C4, #FFA1B6, #FDD6DB, #8281C2);
  border-radius: 6px;
}
.changeLine{
  height: 12px;
  background: #D6D6D6;
  border-radius: 6px;
}
</style>
