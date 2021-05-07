<template>
<router-view v-if="showRouter"></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
    provide (){
    return {
      reload: this.reload
    }
  },
  data (){
    return {
      showRouter: true
    }
  },
  methods: {
    reload (){
      this.showRouter = false
      this.$nextTick(function(){
        this.showRouter = true
      })
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
*{
  margin: 0px;
  padding: 0px;
}
li{
  list-style: none;
}
*{
  padding: 0px;
  margin: 0px;
}
li{
  list-style: none;
}
*{
  margin: 0;
  padding: 0;
}
.text-center{
  text-align: center;
}
.homepage-container{
  margin: 0 auto;
  width: 1314px;
  box-shadow:2px 2px 20px 2px rgba(0,0,0,0.3);
  padding-top: 47px;
}
.list-style{
  list-style: none;
}
/* .d-flex{
  display: flex;
} */
.d-inblock{
  display: inline-block;
}
.d-f {
  display: flex;
}
/* css初始化 start */
* {
  margin: 0;
  padding: 0;
}
em,
i {
  font-style: normal;
}
li {
  list-style: none;
}
img {
  border: 0;
  vertical-align: middle;
}
button {
  cursor: pointer;
}
textarea {
  outline: none;
  border: none;
  overflow-y: hidden;
  resize: none;
}
a {
  color: #666;
  text-decoration: none;
}
a:hover {
  color: #c81623;
}
button,
input {
  font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53",
    sans-serif;
  /* 默认黑色边框 */
  border: 0;
  outline: none;
}
input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }
body {
  -webkit-font-smoothing: antialiased;
  background-color: #fff;
  font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53",
    sans-serif;
  color: #666;
}
.hide,
.none {
  display: none;
}
.clearfix:after {
  visibility: hidden;
  clear: both;
  display: block;
  content: ".";
  height: 0;
}
.clearfix {
  *zoom: 1;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
/* css初始化 end */
/* 全局CSS start */
.style-green {
  color: #659274;
}
.style-white {
  color: #fff !important; 
}
.style-black {
  color: #21262c;
}
.style-grey {
  color: #A7A6F0 !important;
}
.bg-green {
  background-color: #659274;
}
.bg-black {
  background: #21262c;
}
.bg-grey {
  background-color: #EFEFEF;
}
.bg-white {
  background-color: #fff;
}
/* 字体大小 strat */
.fs-5 {
  font-size: 5px;
}
.fs-7 {
  font-size: 7px;
}
.fs-8 {
  font-size: 8px;
}
.fs-9 {
  font-size: 9px;
}
.fs-10 {
  font-size: 10px;
}
.fs-12 {
  font-size: 12px;
}
.fs-14 {
  font-size: 14px;
}
.fs-15 {
  font-size: 15px;
}
.fs-16 {
  font-size: 16px;
}
.fs-18 {
  font-size: 18px;
}
.fs-20 {
  font-size: 20px;
}
.fs-24 {
  font-size: 24px;
}
.fs-30 {
  font-size: 30px;
}
.fs-48 {
  font-size: 48px;
}
/* 字体大小 end */
/* 行高 start */
.lh-20 {
  line-height: 20px;
}
.lh-30 {
  line-height: 30px;
}
.lh-33 {
  line-height: 33px;
}
.lh-35 {
  line-height: 35px;
}
.lh-50 {
  line-height: 50px;
}
.lh-66 {
  line-height: 66px;
}
.lh-70 {
  line-height: 70px;
}
/* 行高 end */
/* 字重 start */
.fw-l {
  font-weight: 300;
}
.fw-n {
  font-weight: 400;
}
.fw-b {
  font-weight: bold;
}
/* 字重 end */
/* 字体类型 start */
.style-impact {
  font-family: impact;
}
/* 字体类型 end */
.fatherW {
  margin: 0 auto;
  /* overflow: hidden; */
  padding-top: 107px;
  padding-bottom: 157px;
  background-image:url("./img/background.png") ;
  background-size: cover; 
}
.w {
  width: 1475px;
  margin: 0 auto;
}
.p-r {
  position: relative;
}
.c-p {
  cursor: pointer;
}

/* 禁止选中 */
*{  
	  -webkit-touch-callout:none;  /*系统默认菜单被禁用*/   
	  -webkit-user-select:none; /*webkit浏览器*/   
	  -khtml-user-select:none; /*早期浏览器*/   
	  -moz-user-select:none;/*火狐*/   
	  -ms-user-select:none; /*IE10*/   
	  user-select:none;   
} 
input{  
	-webkit-user-select:auto; /*webkit浏览器*/     
}
textarea{
	-webkit-user-select:auto; /*webkit浏览器*/
}
</style>
