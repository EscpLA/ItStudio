<template>
    <div class="Dempartment">
        <p class="history">
            Dempartment
        </p>
        <p class="chinese">
            部门介绍
        </p>
        <ul>
            <!-- <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li> -->
            <li v-for="(item,index) in UlArrary" :key="index" :style="{backgroundImage: 'url('+'https://cdn.ruabbit.top/img/'+item.BgImgName+'.png'+ ')'}">
                <img :src="'https://cdn.ruabbit.top/img/'+item.ImgName+'.png'" alt="">
                <div class="title">{{item.chinese}}</div>
                <div class="english">{{item.english}}</div>
                <div class="introduce">{{item.introduce}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
// import img1 from 'https://cdn.ruabbit.top/img/chengxv.png'
// import img2 from 'https://cdn.ruabbit.top/img/web.png'
// import img3 from 'https://cdn.ruabbit.top/img/ui.png'
// import img4 from 'https://cdn.ruabbit.top/img/app1.png'
// import img5 from 'https://cdn.ruabbit.top/img/youxi.png'
// import bgImag1 from 'https://cdn.ruabbit.top/img/chengxvkaifa.png'
// import bgImag2 from 'https://cdn.ruabbit.top/img/webkaifa.png'
// import bgImag3 from 'https://cdn.ruabbit.top/img/UIsheji.png'
// import bgImag4 from 'https://cdn.ruabbit.top/img/APP.png'
// import bgImag5 from 'https://cdn.ruabbit.top/img/youxikaifa.png'
export default {
    data(){
        return{
            UlArrary:[
                {
                    // img:img1,
                    chinese:'程序开发',
                    english:'PROGRAM',
                    BgImgName:'chengxvkaifa',
                    ImgName:'chengxv',
                    introduce:'程序部门主要职能为基于Django,ASP.NET,PHP,JSP等技术,应用Python, C#，Java, c+＋等语言开发应用程序，完成与SQL Server，MySQL等数据库的交互，设计对外API接口等。',
                },
                {
                    // img:img2,
                    chinese:'Web开发',
                    english:'WEBBASED',
                    // bgImg:bgImag2,
                   BgImgName:'webkaifa',
                    ImgName:'web',
                    introduce:'Web开发部门利用html,Css.JavaScript为主要语言来对网站表现层与结构层等前台部分做出完关构造，在实现设计师要带给用户上。的视觉冲击之外还能保证与后台交互实现网站对用户功能,从而让网站突破实用性和吸引力。',
                },
                {
                    // img:img3,
                    chinese:'UI设计',
                    english:'DESIGN',
                    // bgImg:bgImag3,
                    BgImgName:'UIsheji',
                    ImgName:'ui',
                    introduce:'	UI设计部门主要使用Photoshop, Illustrator等软件，对网页、APP等界面进行设计，并负责各类视频制作、剪辑、特效制作的工作。',
                },
                {
                    // img:img4,
                    chinese:'APP开发',
                    english:'APPLICATION',
                    // bgImg:bgImag4,
                   BgImgName:'APP',
                    ImgName:'app1',
                    introduce:'爱特工作室APP应用部门是在移动端高速发展下，于2017年成立的部门。Android应用开发基于Java等语言，负责编写应用客户端界面，完成客户端与服务端的信息应用开发部门扩展了社团的变量，使工作室的技术力量多样化。',
                },
                {
                    // img:img5,
                    chinese:'游戏开发',
                    english:'GAM DEVELOP',
                    // bgImg:bgImag5,
                    BgImgName:'youxikaifa',
                    ImgName:'youxi',
                    introduce:'	爱特游戏部门是2018年新成立的部门。专注于2D游戏的开发。游戏以游戏性为本,以社交性为辅，以商业性为底。他们用心为自己的理想开辟道路。',
                }

            ]
        }
    }
}
</script>
<style scoped>
.introduce{
    font-size: 24px;
    font-family: Microsoft YaHei UI;
    font-weight: 300;
    color: #333333;
    line-height: 48px;
    margin-top: 35px;
    margin-left: 49px;
    /* -webkit-text-size-adjust: none; */
}
.english{
    font-size: 18px;
    font-family: Microsoft YaHei UI;
    font-weight: bold;
    color: #666666;
    margin-top: 20px;
    letter-spacing: 6px;
}
.title{
    font-size: 36px;
    font-family: Microsoft YaHei UI;
    font-weight: bold;
    color: #333333;
    letter-spacing: 6px;
    margin-top: 28px;
}
.margin_left{
    margin-right: 40px;
}
.margin{
    margin-left: 40px;
    margin-right: 40px;
}
ul{
    margin-left: 222px;
    margin-right: 222px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    /* width: 1476px; */
}
ul :nth-child(2){
    margin-left: 40px;
    margin-right: 40px;
}
ul :nth-child(4){
    margin-right: 40px;
}
li{
    margin-top: 40px;
    width: 24.218%;
    height: 809px;
    background: #FFFFFF;
    box-shadow: 1px 1px 8px 1px rgba(76, 76, 76, 0.57);
    background-size: 110%;
    background-repeat: no-repeat;
    background-position: -10px -10px;
    border-radius: 40px;}
img{
        margin-top: 68px;
        width: 128px;
        height: 126px;
    }
.Dempartment{
    margin: 0 auto;
    text-align: center;
    margin-top: 105px;
}
.chinese {
  font-size: 36px;
  font-family: Microsoft YaHei UI;
  font-weight: bold;
  color: #333333;
  text-align: center;
  margin-top: 10px;
}
.history {
  font-size: 60px;
  font-family: Microsoft YaHei UI;
  font-weight: bold;
  color: #333333;
  background: linear-gradient(
    -79deg,
    #9fd3f8 0%,
    #80b9e1 0%,
    #e5aca3 0%,
    #ffb1c4 0%,
    #dc92c2 0%,
    #e3bbe3 0%,
    #a7eba0 0%,
    #7bd672 0%,
    #fbcad7 0%,
    #d8c1d6 0%,
    #fdc5ea 46.5087890625%,
    #8e89c5 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}
</style>