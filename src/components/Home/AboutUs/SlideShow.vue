<template>
  <el-carousel :interval="4000" type="card" height="20vw">
    <el-carousel-item v-for="item in SlideArray" :key="item">
      <!-- <h3 class="medium">{{ item }}</h3> -->
      <img :src="item.pic" alt="">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
// import img1 from '../../../img/lezaiqizhong.jpg'
import axios from 'axios'
export default {
    data(){
        return{
            SlideArray:[
                
            ]
        }
    },
    created(){
      axios.get('itshow/v1/work')
            .then(res =>{
              this.SlideArray=res.data;
              this.SlideArray=this.SlideArray.data.works.slice(0,3);
                // console.log('slideshow',this.SlideArray);
            })
    }
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
 .el-carousel{
     width: 76.8vw;
     margin-top: 36px;
     margin-bottom: 100px;
 }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    box-shadow: 8px 9px 22px 2px rgba(76, 76, 76, 0.53);
    border-radius: 40px;
  }
 img{
     width: 100%;
     height: 100%;
 }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
    box-shadow: 8px 9px 22px 2px rgba(76, 76, 76, 0.53);
    border-radius: 40px;
  }
</style>
