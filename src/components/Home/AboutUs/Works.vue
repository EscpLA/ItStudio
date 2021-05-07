<template>
    <div class="Works">
        <div class="titleEnglish">WORKS</div>
        <div class="titleChinese">作品展示</div>
        <SlideShow></SlideShow>
        <ul>
            <li v-for="(item,index) in LiAarray" :key="index" v-show="isShow" >
                <img :src="item.pic" alt="">
            </li>
            <li v-for="(item,index) in LiAarray2" :key="index" v-show="!isShow">
                <img :src="item.pic" alt="">
            </li>
        </ul>
        <div class="linecontainer">
            <div :class="[isShow ? 'line' : 'lineChange']" @click="changeIsShow1()"></div>
            <div  :class="[isShow ? 'lineChange' : 'line']" @click="changeIsShow2()"></div>
        </div>
    </div>
</template>
<script>
// import img1 from '../../../img/chuangyi.jpg'
import SlideShow from '../AboutUs/SlideShow'
import axios from 'axios'
export default {
    components:{
        SlideShow
    },
    data(){
        return{
            LiAarray:[
            ],
            LiAarray2:[
            ],
            isShow:true,
        }
    },
    methods:{
        changeIsShow1(){
            this.isShow=true;
        },
        changeIsShow2(){
            this.isShow=false;
        }
    },
    created(){
        axios.get('itshow/v1/work')
            .then(res =>{
                this.LiAarray=res.data;
                this.LiAarray2=this.LiAarray.data.works.slice(7,10);
               this.LiAarray=this.LiAarray.data.works.slice(3,7);
                // console.log('LiAarray',this.LiAarray);
                // console.log('LiAarray2',this.LiAarray2);

            })
    }
}
</script>
<style scoped>
.linecontainer{
    display: flex;
    margin-top: 48px;
}
.linecontainer :nth-child(2){
    margin-left: 20px;
}
.lineChange{
    width: 108px;
    height: 12px;
    background: #C5C5C5;
    border-radius: 6px;
    
  cursor: pointer;
}
.line{
    width: 108px;
    height: 12px;
    background: linear-gradient(-79deg,#f8c2e8,#8f89c5);
    border-radius: 6px;
    
  cursor: pointer;
    /* margin-left: 20px; */
}
ul{
    margin-left: 222px;
    margin-right: 222px;
    display: flex;
    /* justify-content: space-around; */
    justify-content: center;
}
ul :nth-child(2){
    margin-left: 39px;
    margin-right: 39px;
}
ul :nth-child(3){
    margin-right: 39px;
}
ul :nth-child(6){
    margin-left: 39px;
    margin-right: 39px;
}
li>img{
    width: 341px;
    height: 192px;
}
.Works{
    margin: 0 auto;
    margin-top: 126px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    justify-content: start;
    align-items: center;
}
.titleChinese{
    font-size: 36px;
    font-family: Microsoft YaHei UI;
    font-weight: bold;
    color: #333333;
    line-height: 66px;
}
.titleEnglish{
    font-size: 60px;
font-family: Microsoft YaHei UI;
font-weight: bold;
color: #FFFFFF;
line-height: 66px;
background: linear-gradient(-79deg, #9FD3F8 0%, #80B9E1 0%, #E5ACA3 0%, #FFB1C4 0%, #DC92C2 0%, #E3BBE3 0%, #A7EBA0 0%, #7BD672 0%, #FBCAD7 0%, #D8C1D6 0%, #FDC5EA 0%, #8E89C5 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
</style>