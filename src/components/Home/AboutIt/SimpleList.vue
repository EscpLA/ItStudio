<template>
    <ul class="SimpleList">
        <li class="team" v-for="(item,index) in Arrary" :key="index" :style="{backgroundImage: 'url('+'https://cdn.ruabbit.top/img/'+item.bgImg+'.png'+')'}">
           <div class="imgcontainer"><img :src="'https://cdn.ruabbit.top/img/'+item.img+'.jpg'" alt=""></div>
            <div class="textContainer">
                <div class="P1">{{item.title}}</div>
                <!-- <div class="P2" :style="{isMobile ? fontSize: '0.24rem;' :' '}">{{item.introduce}}</div> -->
                <div :class="[isMobile ? 'mobileP2' : 'P2']">{{item.introduce}}</div>
            </div>
        </li>
        <!-- <li class="create">
           <img src="../../../img/chuangyi.jpg" alt="">
            <div class="textContainer">
                <div class="P1">优秀创意</div>
                <div class="P2">用创意打磨精巧设计，用智慧实现炫酷交互;用热情呈现高效代码，以交流触碰灵感火花;以创造激发全新想象，用双手创造改变未来。

</div>
            </div> 
        </li>
        <li class="happy">
            <img src="../../../img/lezaiqizhong.jpg" alt="">
            <div class="textContainer">
                <div class="P1">乐在其中</div>
                <div class="P2">汇聚技术力量，解剖程序内核，研究代码本质，巧解应用难题。以逻辑洞察数据，以细节战胜漏洞。


</div>
            </div>
        </li> -->
    </ul>
</template>
<script>
// import img1 from '../../../img/tuandui.jpg'
// import bgimg1 from '../../../img/团队文化拷贝.png'
// import img2 from '../../../img/chuangyi.jpg'
// import img3 from '../../../img/lezaiqizhong.jpg'
// import bgimg2 from '../../../img/优秀创意.png'
// import bgimg3 from '../../../img/乐在其中.png'
export default {
    data(){
        return{
            Arrary:[
                {
                    title:'团队文化',
                    introduce:'爱特一直以聚集和培养培养计算机人才为己任，发掘技术潜力，感受合作乐趣，让项目高效执行，让大家一同进步。',
                    img:'tuandui',
                    bgImg:'团队文化拷贝',
                },
                {
                    title:'优秀创意',
                    introduce:'用创意打磨精巧设计，用智慧实现炫酷交互;用热情呈现高效代码，以交流触碰灵感火花;以创造激发全新想象，用双手创造改变未来。',
                    img:'chuangyi',
                    bgImg:'优秀创意',
                },
                {
                    title:'乐在其中',
                    introduce:'汇聚技术力量，解剖程序内核，研究代码本质，巧解应用难题。以逻辑洞察数据，以细节战胜漏洞。',
                    img:'lezaiqizhong',
                    bgImg:'乐在其中',
                },
            ],
        isMobile: false,
        }
    },
     mounted() {
    // this.getScreen();
    // const that = this
    // window.onresize = () => {
    //   return (() => {
    //     window.screenWidth = document.body.clientWidth
    //     that.screenWidth = window.screenWidth
    //     console.log(that.screenWidth)
    //   })()
    // }
  },
  methods:{
    //   getScreen() {
    //   if (
    //     navigator.userAgent.match(/(phone|iPhone|iPod|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    //     )
    //   ) {
    //     this.isMobile = true;
    //     console.log("手机");
    //   } else {
    //     this.isMobile = false;
    //     console.log("pc");
    //   }
    // }

  }
}
</script>
<style scoped>
.mobileP2 {
    width: 62%;
    font-size: 24px;
    font-family: Microsoft YaHei UI;
    font-weight: 300;
    color: #333333;
    margin-left: 46px;
    font-size: 0.24rem;
}

.imgcontainer{
    width: 441px;
    height: 257px;
}
ul :nth-child(2){
    margin-top: 20px;
    margin-bottom: 20px;
}
.SimpleList{
    margin-left: 222px;
    margin-right: 222px;
    margin-top: 51px;
    display: flex;
    flex-wrap: wrap;
}
.team{
    list-style: none;
    display: flex;
    background: #FFFFFF;
    box-shadow: 1px 1px 8px 1px rgba(76, 76, 76, 0.57);
    border-radius: 40px;
    /* background-image: url(../../../img/tuanduyiwenhua.png);
    background-size: 101%;
    background-position: 0 -6px;
    background-repeat: no-repeat; */
    background-size:500px 116px;
    background-repeat: no-repeat;
    background-position: 977px 63px;
    width: 100%;
}
.happy{
    list-style: none;
    display: flex;
    background: #FFFFFF;
    box-shadow: 1px 1px 8px 1px rgba(76, 76, 76, 0.57);
    border-radius: 40px;
    background-image: url(../../../img/tuanduyiwenhua.png);
    background-size: 101%;
    background-position: 0 -6px;
    background-repeat: no-repeat;
}
.create{
    list-style: none;
    display: flex;
    background: #FFFFFF;
    box-shadow: 1px 1px 8px 1px rgba(76, 76, 76, 0.57);
    border-radius: 40px;
    background-image: url(../../../img/youxiuchuangyi.png);
    background-size: 101%;
    background-position: 0 -6px;
    background-repeat: no-repeat;
    margin-top: 20px;
    margin-bottom: 20px;
}
img{
    width: 441px;
    height: 257px;
    border-radius: 40px 0px 0px 40px;
    display: flex;
    flex: 1.1;
}
.textContainer{
    display: flex;
    flex: 3.34;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;

}
/* .P1{
    display: flex;
    margin-left: 46px;
    height: 29px;
    font-size: 30px;
    font-family: Microsoft YaHei UI;
    font-weight: 400;
    color: #333333;
    margin-bottom: -70px;
    width: 50%;
    display: table;
}
.P2{
    margin-top: -50px;
    display: flex;
    font-size: 24px;
    font-family: Microsoft YaHei UI;
    font-weight: 300;
    color: #333333;
    margin-left: 45px;
    width: 62%;
    display: table;
} */
.P1{
    width: 100%;
    font-size: 30px;
    font-family: Microsoft YaHei UI;
    font-weight: 400;
    color: #333333; 
    margin-left: 46px;
}
.P2{
    width: 62%;
    font-size: 24px;
    font-family: Microsoft YaHei UI;
    font-weight: 300;
    color: #333333;
    margin-left: 46px;
}

/* @media screen and (max-width: 540px){
    .P2 {
        font-size: 0.24rem;
    }
} */

</style>