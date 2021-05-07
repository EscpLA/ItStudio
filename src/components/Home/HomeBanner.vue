<template>
    <div class="HomeBanner">
        <div class="ITimg">
            <img src="https://cdn.ruabbit.top/img/logo.png" alt="">
            <p>IT&nbspSTUDIO</p>
        </div>
        <div class="ITIntroduce">
            <p class="P1">爱特工作室</p>
            <p class="P2">IT&nbspstudio</p>
            <p class="P3">
                		&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp爱特工作室成立于2002年，是一个在中国海洋大学信息科学与工程学部领导主持下，以计算机技术人才培养，网络开发为特色的技术性团体。<br>
		&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp自成立以来，爱特以发现人才，培养人才，输送人才为最终目的，现已拥有Ul设计、前端开发、程序设计、Android开发、游戏设计五大类方向，数十人的技术团队。优秀的团队文化与良好的技术氛围使爱特能够脱颖而出，经过多年的发展，现已成为海大网络技术的中坚力量!

            </p>
        </div>
    </div>
</template>
<script>
export default {
    name:'HomeBanner',
    components:{

    }
}
</script>
<style scoped>
.HomeBanner{
    /* height: 1108px; */
    width: 100%;
    background-image: url(https://cdn.ruabbit.top/img/cover.jpg);
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-around;
    /* padding-left: 140px;
    padding-right: 183px; */
    align-items: center;
}
.ITimg{
    display: flex;
    flex: 1;
    margin-left: 140px;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    margin-right: 120px;
}
.ITimg>p{
    font-size: 36px;
    font-family: Microsoft YaHei UI;
    font-weight: bold;
    color: #FFFFFF;
    /* line-height: 68px; */
    text-shadow: 2px 2px 1px rgba(76, 76, 76, 0.52);
}
img{
    width: 209px;
    height: 225px;
}
.ITIntroduce{
    flex: 6.12;
    margin-right: 183px;
    background: #F8F6FC;
    border-radius: 41px 0px 41px 0px;
    margin-top: 213px;
    margin-bottom: 203px;
    /* height: 676px; */
}
/* .ITIntroduce>p{
    display: flex;
    justify-content: center;
    align-items: center;
    
} */
.ITIntroduce>p{
    display: inline-block;
}
.P1{
    font-size: 60px;
    font-family: Microsoft YaHei UI;
    font-weight: bold;
    color: #333333;
    /* line-height: 68px; */
    margin-top: 92px;
    margin-left: 71px;
}
.P2{
    font-size: 30px;
    font-family: Minion Variable Concept;
    font-weight: bold;
    color: #333333;
    margin-left: 31px;
}
.P3{
    font-size: 30px;
    font-family: Microsoft YaHei UI;
    font-weight: 300;
    color: #333333;
    line-height: 68px;
    margin-left: 71px;
    margin-right: 66px;
    margin-top: 44px;
    margin-bottom: 103px;
    -webkit-text-size-adjust: 100%;
}
</style>