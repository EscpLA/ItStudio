<template>
  <div class="fatherW fatherWFDB">
    <div class="container w bg-white">
      <div class="header d-f">
        <router-link to="AboutIt">
          <img src="https://cdn.ruabbit.top/img/logo.png" alt="" />
        </router-link>
        <div class="eng">
          <p>IT STUDIO</p>
        </div>

        <div class="chs">
          <p class="fw-b it">爱特</p>
          &nbsp&nbsp&nbsp
          <p class="fs-48 fw-b lh-66 studio">工作室</p>
        </div>

        <div class="rectangle rectangle1 c-p">
          <router-link to="application">
            <p class="fs-30 lh-66 fw-b style-white">提交报名表</p>
          </router-link>
        </div>
        <div class="rectangle rectangle2 c-p">
          <router-link to="feedback">
            <p class="fs-30 lh-66 fw-b style-white">结果查询</p>
          </router-link>
        </div>
      </div>
      <div class="search">
        <input
          type="text"
          placeholder="请输入报名邮箱以获取录取进度。"
          v-model="email"
          maxlength="28"
          @keyup.enter="search()"
        />
        <div>
          <button @click="search()" >查询</button>
        </div>
      </div>
      <div class="result">
        <div
          class="resultItem resultItem1"
          :class="[resultItemBg[0] ? 'signUpSuccessBg' : 'signUpFailBg']"
        >
          <div
            class="content"
            :class="[contentBg[0] ? 'signUpSuccessContentBg' : 'signUpFailContentBg']"
          >
            <p class="fs-48 fw-b style-black lh-66">报名</p>
          </div>
          <div class="icon" :class="[iconBg[0] ? 'successIconBg' : 'failIconBg']"></div>
        </div>
        <div
          class="resultItem resultItem2"
          :class="[resultItemBg[1] ? 'firstTrialSuccessBg' : 'firstTrialFailBg']"
        >
          <div
            class="content"
            :class="[
              contentBg[1] ? 'firstTrialSuccessContentBg' : 'firstTrialFailContentBg',
            ]"
          >
            <p class="fs-48 fw-b style-black lh-66">初审</p>
          </div>
          <div class="icon" :class="[iconBg[1] ? 'successIconBg' : 'failIconBg']"></div>
        </div>
        <div
          class="resultItem resultItem3"
          :class="[resultItemBg[2] ? 'interviewSuccessBg' : 'interviewFailBg']"
        >
          <div
            class="content"
            :class="[
              contentBg[2] ? 'interviewSuccessContentBg' : 'interviewFailContentBg',
            ]"
          >
            <p class="fs-48 fw-b style-black lh-66">面试</p>
          </div>
          <div class="icon" :class="[iconBg[2] ? 'successIconBg' : 'failIconBg']"></div>
        </div>
        <div
          class="resultItem resultItem4"
          :class="[resultItemBg[3] ? 'writeSuccessBg' : 'writeFailBg']"
        >
          <div
            class="content"
            :class="[contentBg[3] ? 'writeSuccessContentBg' : 'writeFailContentBg']"
          >
            <p class="fs-48 fw-b style-black lh-66">笔试</p>
          </div>
          <div class="icon" :class="[iconBg[3] ? 'successIconBg' : 'failIconBg']"></div>
        </div>
        <div
          class="resultItem resultItem5"
          :class="[resultItemBg[4] ? 'PassSuccessBg' : 'PassFailBg']"
        >
          <div
            class="content"
            :class="[contentBg[4] ? 'PassSuccessContentBg' : 'PassFailContentBg']"
          >
            <p class="fs-48 fw-b style-black lh-66">结果</p>
          </div>
          <div
            :class="[
              iconBg[4]
                ? [isPass ? 'PassSuccessIconBg passIcon' : 'PassFailIconBg passIcon']
                : 'failIconBg icon',
            ]"
          ></div>
          <p class="admission" v-show="isPass == true && resultItemBg[4] == true">
            欢迎加入爱特大家庭！
          </p>
          <p class="turndown" v-show="isPass == false && resultItemBg[4] == true">
            很抱歉您没能通过爱特工作室的笔试，您很优秀，未来的路还长。期待再次相遇！
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  inject :['reload'],
  name: "feedback",
  components: {},
  data() {
    return {
      // 判断是否是第一次查询：
      preStatus: -2,

      email: "", //邮箱地址
      resultItemBg: [false, false, false, false, false],
      contentBg: [false, false, false, false, false],
      iconBg: [false, false, false, false, false],
      isPass: false,
      studentInfo: {},
    };
  },
  methods: {

    refresh() {
      this.reload();
    },

    // 判断是否是邮箱
    isEmail: function (str) {
      return /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/.test(str);
    },

    search(index) {
      if (this.email === "") {
        swal("请输入您要查询的邮箱", "", "error");
        let i = 0;
        for(i = 0;i <=4; i++) {
          this.resultItemBg[i] = false;
          this.contentBg[i] = false;
          this.iconBg[i] = false;
          this.preStatus = -1;
        }
      } else if (!this.isEmail(this.email)) {
        swal("请输入有效的邮箱地址", "", "error");
        let i = 0;
        for(i = 0;i <=4; i++) {
          this.resultItemBg[i] = false;
          this.contentBg[i] = false;
          this.iconBg[i] = false;
          this.preStatus = -1;
        }
      } else {
        axios("/itshow/v1/fresher", {
          params: {
            email: this.email,
          },
        }).then((res) => {
          this.studentInfo = res.data.data;
          if (this.studentInfo.status == -1) {
            swal("该账号尚未报名", "", "error");
          let i = 0;
          for(i = 0;i <=4; i++) {
            this.resultItemBg[i] = false;
            this.contentBg[i] = false;
            this.iconBg[i] = false;
          this.preStatus = -1;
          }
          } else {
            swal("查询成功", "", "success");
            if (this.preStatus == -2) {
              // 该页面第一次搜索
              if (this.studentInfo.status <= 3) {
                let i = 0;
                for (i = 0; i <= this.studentInfo.status; i++) {
                  this.resultItemBg[i] = true;
                  this.contentBg[i] = true;
                  this.iconBg[i] = true;
                }
              } else {
                let i = 0;
                for (i = 0; i <= 3; i++) {
                  this.resultItemBg[i] = true;
                  this.contentBg[i] = true;
                  this.iconBg[i] = true;
                }
                this.resultItemBg[4] = true;
                this.contentBg[4] = true;
                this.iconBg[4] = true;

                if (this.studentInfo.status == 4) {
                  this.isPass = true;
                }
              }
              this.preStatus = this.studentInfo.status;
            } else {
              // console.log("this.preStatus:", this.preStatus);
              //是在该页面第二次搜索，优化搜索体验
              if (this.preStatus < this.studentInfo.status) {
                if (this.preStatus == 4 && this.studentInfo.status == 5) {
                  this.isPass = false;
                } else if (this.studentInfo.status >= 4) {
                  let i = 0;
                  for (i = this.preStatus + 1; i <= 3; i++) {
                    this.resultItemBg[i] = true;
                    this.contentBg[i] = true;
                    this.iconBg[i] = true;
                  }
                  this.resultItemBg[4] = true;
                  this.contentBg[4] = true;
                  this.iconBg[4] = true;
                  if (this.studentInfo.status == 4) {
                    this.isPass = true;
                  }
                } else {
                  let i = 0;
                  for (i = this.preStatus + 1; i <= this.studentInfo.status; i++) {
                    this.resultItemBg[i] = true;
                    this.contentBg[i] = true;
                    this.iconBg[i] = true;
                  }
                }
              } //第二次所得用户进度 快于 第一次搜索所得用户
              else if (this.preStatus > this.studentInfo.status) {
                if (this.preStatus == 5 && this.studentInfo.status == 4) {
                  this.isPass = true;
                } else if (this.preStatus >= 4) {
                  if (this.preStatus == 4) {
                    this.isPass = false;
                  }
                  this.resultItemBg[4] = false;
                  this.contentBg[4] = false;
                  this.iconBg[4] = false;
                  let i = 0;
                  for (i = 3; i >= this.studentInfo.status + 1; i--) {
                    this.resultItemBg[i] = false;
                    this.contentBg[i] = false;
                    this.iconBg[i] = false;
                  }
                } else {
                  let i = 0;
                  for (i = this.preStatus; i >= this.studentInfo.status + 1; i--) {
                    this.resultItemBg[i] = false;
                    this.contentBg[i] = false;
                    this.iconBg[i] = false;
                  }
                }
              }
              this.preStatus = this.studentInfo.status; //第二次所得用户进度 慢于 第一次搜索所得用户
            }
          }
        });

        let res = axios
          .get("/itshow/v1/fresher", {
            params: {
              email: this.email,
            },
          })
          .then((res) => {
            this.studentInfo = res.data.data;
          });
      }
    },
  },
};
</script>

<style scoped>

@media screen and (max-width: 965px) {
        html {
            height: 100%;
        }
        body {
            height: 100%;
        }
        #app {
            height: 100%;
        }
        .fatherWFDB {
            height: 100%;
            display: flex;
            align-items: center;
        }
    }

/* 动态背景替换CSS start */
.successIconBg {
  background: url("https://cdn.ruabbit.top/img/process/wancheng .png");
}
.failIconBg {
  background: url("https://cdn.ruabbit.top/img/loading.png");
}
.PassSuccessIconBg {
  background: url("https://cdn.ruabbit.top/img/luqv.png");
}
.PassFailIconBg {
  background: url("https://cdn.ruabbit.top/img/weiluqv.png");
}

.signUpSuccessContentBg {
  background: url("https://cdn.ruabbit.top/img/process/color/baoming.png");
}
.signUpFailContentBg {
  background: url("https://cdn.ruabbit.top/img/process/grey/baoming.png");
}
.firstTrialSuccessContentBg {
  background: url("https://cdn.ruabbit.top/img/process/color/bishi.png");
}
.firstTrialFailContentBg {
  background: url("https://cdn.ruabbit.top/img/process/grey/bishi.png");
}
.interviewSuccessContentBg {
  background: url("https://cdn.ruabbit.top/img/process/color/luqv ing.png");
}
.interviewFailContentBg {
  background: url("https://cdn.ruabbit.top/img/process/grey/luqv ing.png");
}
.writeSuccessContentBg {
  background: url("https://cdn.ruabbit.top/img/process/color/mianshi.png");
}
.writeFailContentBg {
  background: url("https://cdn.ruabbit.top/img/process/grey/mianshi.png");
}
.PassSuccessContentBg {
  background: url("https://cdn.ruabbit.top/img/process/color/shenhe.png");
}
.PassFailContentBg {
  background: url("https://cdn.ruabbit.top/img/process/grey/shenhe.png");
}

.signUpSuccessBg {
  background: url("https://cdn.ruabbit.top/img/colorful/20.png");
}
.signUpFailBg {
  background: url("https://cdn.ruabbit.top/img/grey/20.png");
}
.firstTrialSuccessBg {
  background: url("https://cdn.ruabbit.top/img/colorful/40.png");
}
.firstTrialFailBg {
  background: url("https://cdn.ruabbit.top/img/grey/40.png");
}
.interviewSuccessBg {
  background: url("https://cdn.ruabbit.top/img/colorful/60.png");
}
.interviewFailBg {
  background: url("https://cdn.ruabbit.top/img/grey/60.png");
}
.writeSuccessBg {
  background: url("https://cdn.ruabbit.top/img/colorful/80.png");
}
.writeFailBg {
  background: url("https://cdn.ruabbit.top/img/grey/80.png");
}
.PassSuccessBg {
  background: url("https://cdn.ruabbit.top/img/colorful/100.png");
}
.PassFailBg {
  background: url("https://cdn.ruabbit.top/img/grey/100.png");
}

/* 动态背景替换CSS end */

.fatherW .container {
  height: 2513px;
  /* margin-top: 107px; */
  padding-top: 70px;
  /* margin-bottom: 157px; */
  box-shadow: 0px 2px 32px 2px rgba(76, 76, 76, 0.73);
  border-radius: 20px 0px 20px 0px;
}
/* 顶部标题CSS start */
.fatherW .container .header {
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
}
.fatherW .container .header div {
  width: 100%;
}
.fatherW .container .header img {
  width: 176px;
  height: 190px;
}
.fatherW .container .header .eng p {
  text-align: center;
  font-size: 30px;
  font-family: Microsoft YaHei UI;
  font-weight: 300;
  color: #666666;
  line-height: 66px;
  text-shadow: 1px 1px 3px rgba(76, 76, 76, 0.6);
}
.fatherW .container .header .chs {
  display: flex;
  justify-content: center;
}
.fatherW .container .header .chs p {
  text-align: center;
}
.fatherW .container .header .chs .it {
  font-size: 56px;
  line-height: 56px;
  color: transparent;
  -webkit-text-stroke: 0.5px black;
}
.fatherW .container .header .chs .studio {
  text-shadow: 1px 1px 3px rgba(76, 76, 76, 0.6);
}
.fatherW .container .header .rectangle {
  position: absolute;
  z-index: 1;
  right: -23px;
  width: 286px;
  height: 100px;
  box-shadow: 1px 1px 5px 0px rgba(76, 76, 76, 0.57);
  border-radius: 25px 0px 0px 25px;
}
.fatherW .container .header .rectangle1 {
  top: 105px;
  background: #afadf0;
}
.fatherW .container .header .rectangle2 {
  top: 243px;
  background: #ffb0c1;
}
.fatherW .container .header .rectangle p {
  text-align: center;
  line-height: 100px;
}
/* 顶部标题CSS end */

.fatherW .container .search {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 94px;
}
.fatherW .container .search input {
  width: 580px;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px 0px 7px 0px rgba(51, 51, 51, 0.45);
  border-radius: 35px;
  padding-left: 221px;
  font-size: 24px;
  font-family: Microsoft YaHei UI;
  font-weight: 300;
  color: #666666;
  line-height: 66px;
}
.fatherW .container .search div {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 51px;
  margin-bottom: 157px;
}
.fatherW .container .search button {
  width: 511px;
  height: 70px;
  background-color: #a7a6f0;
  border-radius: 35px;
  font-size: 30px;
  font-family: Microsoft YaHei UI;
  font-weight: bold;
  color: #ffffff;
  line-height: 66px;
}
.fatherW .container .result {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.fatherW .container .result .resultItem {
  position: relative;
  width: 982px;
  height: 290px;
  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.18);
  margin-bottom: 25px;
  /* background-size: contain; */
  background-repeat: no-repeat;
  /* background-position: 327px; */
}
.fatherW .container .result .resultItem1 {
  background-size: 628px 242px;
  background-position: 395px;
}
.fatherW .container .result .resultItem2 {
  background-size: 679px 238px;
  background-position: 360px;
}
.fatherW .container .result .resultItem3 {
  background-size: 671px 238px;
  background-position: 348px;
}
.fatherW .container .result .resultItem4 {
  background-size: 683px 238px;
  background-position: 336px;
}
.fatherW .container .result .resultItem5 {
  background-size: 720px 201px;
  background-position: 327px;
}
.fatherW .container .result .resultItem .content {
  position: absolute;
  top: 28px;
  left: 86px;
  width: 213px;
  height: 216px;
  background-size: cover;
}
.fatherW .container .result .resultItem .content p {
  line-height: 216px;
  text-align: center;
}
.fatherW .container .result .resultItem .icon {
  position: absolute;
  top: 109px;
  left: 807px;
  width: 57px;
  height: 57px;
  background-size: contain;
}
.fatherW .container .result .resultItem .passIcon {
  position: absolute;
  top: 81px;
  left: 752px;
  width: 173px;
  height: 134px;
  background-size: contain;
}
.fatherW .container .result .resultItem .resultItem5 {
}
.fatherW .container .result .resultItem5 > p {
  position: relative;
  text-align: center;
  font-size: 24px;
  font-family: Microsoft YaHei UI;
  font-weight: 400;
  color: #666666;
}
.fatherW .container .result .resultItem5 .admission {
  top: 136px;
}
.fatherW .container .result .resultItem5 .turndown {
  width: 341px;
  top: 102px;
  left: 340px;
}
</style>
