<template>
    <div class="bg404">
        <div class="container">
            <img src="../img/404.png" alt="">
            <router-link to="AboutIt"><button> 返回主页 </button></router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: '404',
        components: {
            
        }
    }
</script>
<style scoped>
.bg404 {
    overflow: hidden;
    /* width: 1920px; */
    height: 1080px;
    background-color: hotpink;
}
.bg404 .container {
    overflow: hidden;
    margin: 78px auto 0px;
    width: 1830px;
    height: 924px;
    background: #FFFFFF;
    opacity: 0.64;
    border-radius: 40px;
}
.bg404 .container img {
    display: block;
    width: 1018px;
    height: 348px;
    margin: 197px auto 0px;
}
.bg404 .container button {
    width: 506px;
    height: 70px;
    margin-left: 673px;
    margin-top: 104px;
    background: #998FC9;
    box-shadow: 3px 3px 17px 1px rgba(76, 76, 76, 0.61);
    border-radius: 35px;

    font-size: 30px;
    font-family: Microsoft YaHei UI;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 66px;
}
</style>