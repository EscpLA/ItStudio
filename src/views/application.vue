<template>
  <div class="fatherW fatherWAPP" id="">
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

      <form action="">
        <div class="stdName">
          <p class="fs-30 lh-70 fw-n">学生姓名</p>
          <input
            type="text"
            name=""
            id=""
            data-options="required:true"
            onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"
            maxlength="10"
            v-model="name"
            @keyup.enter="sendCode()"
          />
        </div>

        <div class="Grade">
          <p class="fs-30 lh-70 fw-n">专业年级</p>
          <input type="text" name="" id="" placeholder="年级+专业" v-model="prograde" @keyup.enter="sendCode()"/>
        </div>

        <div class="phone">
          <p class="fs-30 lh-70 fw-n">手机号码</p>
          <input
            type="number"
            name=""
            id=""
            oninput="if(value.length>12)value=value.slice(0,12)"
            v-model="phone"
            @keyup.enter="sendCode()"
          />
        </div>

        <div class="Email">
          <p class="fs-30 lh-70 fw-n">邮箱地址</p>
          <input type="text" name="" id="" v-model="email" maxlength="28" @keyup.enter="sendCode()"/>
        </div>

        <div class="verification">
          <p class="fs-30 lh-70 fw-n">验证码</p>
          <div class="p-r">
            <input
              type="number"
              name=""
              id=""
              placeholder="验证码将发送至您的邮箱。"
              v-model="verify"
              oninput="if(value.length>4)value=value.slice(0,4)"
              @keyup.enter="sendCode()"
            />
            <div class="">
              <button type="button" class="send" @click="sendVerify()" >
                发送验证码
              </button>
            </div>
          </div>
        </div>

        <div class="preference">
          <p class="fs-30 lh-70 fw-n fl">意向部门</p>
          <div class="p-r" @click.stop="showSelect()">
            <input type="text" name="" id="" class="c-p" v-model="departmentStr" @keyup.enter="sendCode()"/>
            <div class="select">
              <img
                src="https://cdn.ruabbit.top/img/xiala.png"
                alt=""
                :class="[isRotate ? 'rotate' : '']"
                class="rotate"
              />
            </div>
            <ul class="selectOptions" v-show="isShow">
              <li @click="selectdepartment(0)">程序开发</li>
              <li @click="selectdepartment(1)">Web开发</li>
              <li @click="selectdepartment(2)">UI设计</li>
              <li @click="selectdepartment(3)">APP开发</li>
              <li @click="selectdepartment(4)">游戏开发</li>
            </ul>
          </div>
        </div>

        <div class="expectation">
          <div>
            <p class="fs-30 lh-70 fw-n">你的期待</p>
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="你为什么想要加入爱特？加入入爱特你想获
得什么？"
            v-model="expectation"
          ></textarea>
        </div>

        <div class="submit d-f">
          <button type="button" @click="sendCode()" >提交</button>
        </div>

        <div class="tips d-f">
          <p class="fs-18">
            <span>tips: &nbsp</span>
            姓名、手机号、部门都写错了都没关系，可以联系我们进行修改，但请保证邮箱的可用性。
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
document.onclick = function () {
  let i = 0;
  let option = document.getElementsByClassName("selectOptions"); //option 是class为selectOption 的元素的集合
  // console.log(option[0].style.display);

  for (i = 0; i <= option.length - 1; i++) {
    // option[i].style.display = "block"
    // console.log(option[i].style.display);
    // console.log(1, option[i].style.display);
    if (option[i].style.display == "block") {
      // console.log(2, option[i].style.display);
      option[i].style.display = "none";
    }
  }
};
import axios from "axios";
export default {
  inject :['reload'],
  name: "application",
  components: {},
  data() {
    return {
      name: "", //学生姓名
      prograde: "", //专业年级
      phone: "", //电话号码
      email: "", //邮箱地址
      verify: "", //验证码
      departmentStr: "", //意向部门
      department: -1, //意向部门
      expectation: "", //你的期待

      isShow: false,
      isRotate: false,

      student: {},

      returnObj: {},
    };
  },
  methods: {

    refresh() {
      this.reload();
    },

    // 判断是否是邮箱
    isEmail: function (str) {
      return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
    },
    // 判断是否是中文名
    isChina: function (str) {
      return /^[\u4E00-\u9FA5]{2,10}$/.test(str);
    },
    // 判断是否是电话号码
    isPhone: function (str) {
      return /^((13[0-9])|(14[5-9])|(15([0-3]|[5-9]))|(16[6-7])|(17[1-8])|(18[0-9])|(19[1|3])|(19[5|6])|(19[8|9]))\d{8}$/.test(str);
    },
    // 判断专业年级
    isPrograde: function(str) {
      return /^[\u4E00-\u9FA50-9- ]{1,20}$/.test(str);
    },
    // 判断期待
    isExpectation: function(str) {
      return /^[\u4E00-\u9FA5A-Za-z0-9,.，。!?！？、/\\*-/(/) ]{1,256}$/.test(str);
    },


    sendCode: function () {
      // 判断post条件
      if (this.name == "") {
        swal("请输入姓名","","error");
      } else if (!this.isChina(this.name)) {
        swal("姓名不符合规范","","error");
      } else if (this.prograde == "") {
        swal("请输入您的专业年级","","error");
      } else if(!this.isPrograde(this.prograde)) {
        swal("专业年级不符合规范","","error");
      } else if (this.phone == "") {
        swal("请输入您的电话号码","","error");
      } else if (!this.isPhone(this.phone)) {
        swal("电话号码不符合规范","","error");
      } else if (this.email == "") {
        swal("请输入您的邮箱地址","","error");
      } else if (!this.isEmail(this.email)) {
        swal("邮箱不符合规范","","error");
      } else if (this.verify == "") {
        swal("请输入4位验证码","","error");
      }
      else if (this.departmentStr == "") {
        swal("请输入您的意向部门","","error");
      } else if (!this.isExpectation(this.expectation)) {
        swal("您的期待不符合规范","","error")
      } 
      else {
        this.student.name = this.name;
        this.student.email = this.email;
        this.student.verify = this.verify;
        this.student.phone = this.phone;
        this.student.department = this.department;
        this.student.prograde = this.prograde;
        this.student.expectation = this.expectation;
        axios.post("/itshow/v1/fresher", this.student).then((res) => {
          this.returnObj = res.data;
          if (this.returnObj.code == 1000) {
            swal("报名成功","","success");
            this.reload();
          }
          else {
            swal(this.returnObj.msg,"","error")
          }
          // if (res.data.msg === "验证码错误") {
          //   swal("验证码错误","","error");
          // }
          // else if (res.data.msg === "您的姓名、邮箱或手机号码已被注册。") {
          //   swal("您的姓名、邮箱或手机号码已被注册","","error");
          // }
          // else {
          //   swal("报名成功","","success");
          // }
        });
      }
    },

    sendVerify: function () {
      if (this.email == "") {
        swal("请输入您的邮箱地址","","error");
      } else if (!this.isEmail(this.email)) {
        swal("请输入有效的邮箱地址","","error");
      } else {
        axios
          .post("/itshow/v1/email", {
            email: this.email,
          })
          .then(res => {
            if (res.data.code == 1000) {
              swal("验证码发送成功","","success")
            }
            else {
              swal(res.data.msg,"","error")
            }
          })
      }
    },

    showSelect: function () {
      this.isRotate = !this.isRotate;
      // console.log("isRotate", this.isRotate);
      this.isShow = !this.isShow;
    },

    selectdepartment(num) {
      if (num == 0) {
        this.departmentStr = "程序开发";
        this.department = 0;
      } else if (num == 1) {
        this.departmentStr = "Web开发";
        this.department = 1;
      } else if (num == 2) {
        this.departmentStr = "UI设计";
        this.department = 2;
      } else if (num == 3) {
        this.departmentStr = "APP开发";
        this.department = 3;
      } else if (num == 4) {
        this.departmentStr = "游戏开发";
        this.department = 4;
      }
    },
  },
  mounted() {
    var _this = this;
    document.onclick = function () {
      // console.log(_this.isShow);
      if (_this.isShow == true) {
        _this.isShow = false;
      }
    };
  },
};
</script>
<style scoped>

@media screen and (max-width: 1182px) {
        html {
            height: 100%;
        }
        body {
            height: 100%;
        }
        #app {
            height: 100%;
        }
        .fatherWAPP {
            height: 100%;
            display: flex;
            align-items: center;
        }
    }

#apld-f {
  /* align-items: center; */
}

/* 动态CSS start */
.rotate {
  transform: rotate(90deg);
  transition: all 0.5s;
}
/* 动态CSS end */
.fatherW .container {
  height: 1421px;
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

/* 表单CSS start*/
.fatherW .container form {
  margin-top: 92px;
}
.fatherW .container form > div {
  /* display: flex;
  justify-content: center; */
}
.fatherW .container form p {
  /* margin-right: 11.5px; */
  display: inline-block;
  width: 448px;
  margin-right: 23px;
  text-align: right;
}
.fatherW .container form .d-f {
  display: flex;
  justify-content: center;
}
.fatherW .container form input {
  width: 531.1px;
  height: 70px;
  margin-bottom: 28px;
  padding-left: 14px;
  background: #ffffff;
  box-shadow: 0px 0px 4px 0px rgba(51, 51, 51, 0.45);
  border-radius: 18px;
  font-size: 24px;
  font-family: Microsoft YaHei UI;
  font-weight: 300;
  color: #666666;
  line-height: 66px;
}
/* 发送验证码按钮~ */
.fatherW .container form .verification {
}
.fatherW .container form .verification input {
  width: 525.1px;
  padding-left: 20px;
  font-size: 24px;
  font-family: Microsoft YaHei UI;
  font-weight: 300;
  color: #666666;
  line-height: 66px;
}
.fatherW .container form .verification button {
  position: absolute;
  z-index: 1;
  width: 130px;
  height: 44px;

  right: 13px;
  top: 13px;
  background: #afadf0;
  border-radius: 11px;
  font-size: 18px;
  font-family: Microsoft YaHei UI;
  font-weight: bold;
  color: #ffffff;
  line-height: 44px;
}
.fatherW .container form .verification .p-r {
  display: inline-block;
  width: 545.1px;
}
/* 意向部门下拉表单~ */
.fatherW .container form .preference {
  position: relative;
}
.fatherW .container form .preference .p-r {
  display: inline-block;
  width: 545.1px;
}
.fatherW .container form .preference .p-r input {
  font-size: 24px;
  font-family: Microsoft YaHei UI;
  font-weight: 300;
  color: #666666;
  line-height: 66px;
}

/* 下拉菜单CSS start */
.fatherW .container form .preference .p-r ul {
  position: absolute;
  top: 70px;
  left: 29px;
  width: 407px;
  background: #FFFFFF;
  box-shadow: 1px 1px 4px 0px rgba(76, 76, 76, 0.41);
  border-radius: 0px 0px 40px 40px;
}
.fatherW .container form .preference .p-r ul li {
  width: 407px;
  height: 45px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(51, 51, 51, 0.18);
  display: block;
  text-align: center;
  font-size: 18px;
  font-family: Microsoft YaHei UI;
  font-weight: 300;
  color: #151D2A;
  line-height: 45px;
  cursor: pointer;
}
.fatherW .container form .preference .p-r ul li:last-of-type {
  border-radius: 0px 0px 40px 40px;
}
.fatherW .container form .preference .p-r ul li:hover {
  background-color: #f5f5f5;
}
/* 下拉菜单CSS end */

.fatherW .container form .preference .select {
  position: absolute;
  top: 22px;
  right: 60px;
  width: 26px;
  height: 26px;
  overflow: hidden;
  cursor: pointer;
}
.fatherW .container form .preference .select img {
  width: 26px;
  height: 26px;
  transform: translateY(-26px);
  filter: drop-shadow(#d3b4e3 0 24px);
}
/* .fatherW .container form .expectation {
  overflow: hidden;
} */
.fatherW .container form .expectation div {
  float: left;
}
.fatherW .container form .expectation textarea {
  width: 526px;
  height: 150px;
  padding-top: 20px;
  padding-left: 19px;
  background: #ffffff;
  box-shadow: 0px 0px 4px 0px rgba(51, 51, 51, 0.45);
  border-radius: 18px;
  font-size: 24px;
  font-family: Microsoft YaHei UI;
  font-weight: 300;
  color: #666666;
  line-height: 30px;
  resize: none;
}
.fatherW .container form .submit {
  margin-top: 62px;
}
.fatherW .container form .submit button {
  width: 512px;
  height: 70px;
  background-color: #afadf0;
  border-radius: 18px;
  font-size: 30px;
  font-family: Microsoft YaHei UI;
  font-weight: bold;
  color: #ffffff;
  line-height: 66px;
}
.fatherW .container form .tips {
  margin-top: 19px;
  font-size: 18px;
  font-family: Microsoft YaHei UI;
  font-weight: 400;
  color: #666666;
  line-height: 32px;
  text-align: center;
}
.fatherW .container form .tips p {
  display: inline-block;
  width: 530px;
  height: 50px;
  text-align: center;
}
.fatherW .container form .tips p span {
  font-weight: bold;
}
/* 表单CSS end*/
</style>
