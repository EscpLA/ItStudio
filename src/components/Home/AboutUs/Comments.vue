<template>
  <div class="Comments">
    <div class="titleEnglish">COMMENTS</div>
    <div class="titleChinese">留言</div>
    <div class="commentBox">
      <div class="commentsLists">
        <div class="bar1"></div>
        <ul>
          <li v-for="(item, index) in dataShow" :key="index">
            <div class="content">
              {{ item.content }}
            </div>
            <div class="create_time">
              {{ item.create_time.slice(0, 10) }} &nbsp
              {{ item.create_time.slice(12, 16) }}
            </div>
          </li>
        </ul>
        <div class="bar1"></div>
      </div>
      <div class="pageDivision">
        <div class="content">
          <ul>
            <li class="switch pre pl-14" @click="preClick()">上一页</li>
            <!-- <li
              class="num"
              v-for="(item, index) in pageLength"
              :key="index"
              :class="[isWhite[index] ? 'style-grey' : '']"
              @click="swtich(index)"
            >
              {{ item }}
            </li> -->
            <li class="num">第{{currentPage + 1}}页</li>
            <li class="num">共{{pageNum}}页</li>
            <input type="number" name="" id="" v-model="option" />
            <li class="switch switchButton pl-24"  @click="swtich(Number(option) - 1)">跳转</li>
            <li class="switch next pl-14" @click="nextClick()">下一页</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="sendComments">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="说出想说的话"
        v-model="content"
      ></textarea>
      <div>
        <button @click="sendComment()">SEND</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { reactive } from "vue";
export default {
  inject :['reload'],
  components: {},
  data() {
    return {
      // 分页器
      content: "",
      comments: Object,
      totalPage: Array,
      dataShow: Array,
      currentPage: 0,
      pageNum: 0,
      pageLength: [],

      option: "1"
    };
  },
  methods: {

    // 刷新页面
    refresh() {
      this.reload();
    },

    isComment: function (str) {
      return /^[\u4E00-\u9FA5A-Za-z0-9,.，。!?！？、/\\*-/(/) ]{1,256}$/.test(str);
    },

    sendComment() {
      if (this.content == "") {
        swal("请输入您的留言", "", "error");
      } else if (!this.isComment(this.content)) {
        swal("您的留言不符合规范", "", "error");
      } else {
        axios.post("/itshow/v1/comment", { content: this.content }).then((res) => {
          if (res.data.code == 1000) {
            swal("留言成功！", "", "success");
            // this.refresh();
          } else {
            swal(res.data.msg, "", "error");
          }
        });
      }
    },
    // 上一页和下一页
    preClick() {
      if (this.currentPage == 0) {
        return;
      } else {
        this.isWhite[this.currentPage] = false;
        this.dataShow = this.totalPage[--this.currentPage];
        this.isWhite[this.currentPage] = true;
        this.option = this.currentPage + 1;

      }
    },
    nextClick() {
      if (this.currentPage == this.pageNum - 1) {
        return;
      } else {
        this.isWhite[this.currentPage] = false;
        this.dataShow = this.totalPage[++this.currentPage];
        this.isWhite[this.currentPage] = true;
        this.option = this.currentPage + 1;
      }
    },
    //   跳转到某页
    swtich(index) {
        if(index > this.pageNum || index <= -1) {
            this.option = this.currentPage + 1;
            swal("请输入有效的页码","","error");
        }else if(index == -1 ) {
            return;
        }
        else {
            this.isWhite[this.currentPage] = false;
            this.currentPage = index;
            this.dataShow = this.totalPage[this.currentPage];
            this.isWhite[this.currentPage] = true;
            this.option = this.currentPage + 1;
        }
        
    }
  },

  setup() {
    const isWhite = reactive([
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);
    return {
      isWhite,
    };
  },

  created() {
    axios.get("/itshow/v1/comment").then((res) => {
      if (res.data.code == 1000) {
        this.comments = res.data.data;

        this.pageNum = Math.ceil(this.comments.comments.length / 4);
        for(let i = 1; i <= this.pageNum; i++) {
            this.pageLength.push(i);
        }

        for (let i = 0; i <= this.comments.count - 1; i++) {
          this.totalPage[i] = this.comments.comments.slice(4 * i, 4 * i + 4);
        }
        this.dataShow = this.totalPage[this.currentPage];
      } else {
        swal("留言获取失败", "", "error");
      }
    });
  },
};
</script>
<style scoped>
.pl-14 {
  padding-left: 14px;
  width: 66px;
}
.pl-24 {
  padding-left: 24px;
  width: 56px;
}

.Comments {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 104px;
}
.Comments .titleChinese {
  font-size: 36px;
  font-family: Microsoft YaHei UI;
  font-weight: bold;
  color: #333333;
  line-height: 66px;
  width: 100%;
  text-align: center;
}
.Comments .titleEnglish {
  font-size: 60px;
  font-family: Microsoft YaHei UI;
  font-weight: bold;
  color: #ffffff;
  line-height: 66px;
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
    #fdc5ea 0%,
    #8e89c5 100%
  );
  -webkit-background-clip: text;
  width: 100%;
  -webkit-text-fill-color: transparent;
  text-align: center;
}
/* 评论区CSS */
.Comments .commentBox {
  padding-top: 51px;
}
.Comments .commentsLists {
  /* margin-top: 51px; */
}
.Comments .commentsLists .bar1 {
  width: 1476px;
  height: 2px;
  background: #c5c5c5;
  border-radius: 1px;
  margin: 0 auto;
}
.Comments .commentsLists ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.Comments .commentsLists ul li {
  display: flex;
  justify-content: space-between;
  width: 1435px;
  height: 108px;
  padding-top: 45px;
  /* background: pink; */
  border-radius: 1px;
  border-bottom: solid 1px #c5c5c5;
}
.Comments .commentsLists ul li:last-of-type {
  border-bottom: none;
}

.Comments .commentsLists ul li .content {
  font-size: 24px;
  font-family: Microsoft YaHei UI;
  font-weight: 300;
  color: #333;
  line-height: 66px;
}
.Comments .commentsLists ul li .create_time {
  font-size: 24px;
  font-family: Microsoft YaHei UI;
  font-weight: 300;
  color: #333333;
  line-height: 66px;
}

.Comments .pageDivision {
  padding-top: 58px;
  display: flex;
  justify-content: center;
}
.Comments .pageDivision ul {
  display: flex;
  align-items: center;
}
.Comments .pageDivision ul li {
  display: inline-block;
}
.Comments .pageDivision .content .switch {
  height: 28px;
  background: #a7a7f0;
  box-shadow: 1px 1px 4px 0px rgba(76, 76, 76, 0.41);
  border-radius: 14px;
  font-size: 16px;
  font-family: Microsoft YaHei UI;
  font-weight: 300;
  color: #ffffff;
  line-height: 28px;
  cursor: pointer;
}
.Comments .pageDivision .content .pre {
  margin-right: 42px;
}
.Comments .pageDivision .content .switchButton {
  margin-left: 12px;
}
.Comments .pageDivision .content .next {
  margin-left: 12px;
}
.Comments .pageDivision .content .num {
  margin-right: 20px;
  height: 28px;
  font-size: 24px;
  font-family: Microsoft YaHei UI;
  font-weight: bold;
  color: #666666;
  line-height: 28px;
}
.Comments .pageDivision .content input {
  width: 46px;
  height: 23px;
  padding-left: 5px;
  background: #ffffff;
  box-shadow: 0px 0px 5px 0px rgba(51, 51, 51, 0.42);
  border-radius: 8px;
  font-size: 24px;
  font-family: Microsoft YaHei UI;
  font-weight: bold;
  color: #666666;
  line-height: 28px;
}

.Comments .sendComments {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 60px;
}
.Comments .sendComments textarea {
  width: 1427px;
  height: 156px;
  padding-top: 44px;
  padding-left: 49px;
  background: #fff;
  box-shadow: 0px 0px 13px 0px rgba(51, 51, 51, 0.43);
  border-radius: 40px;
  resize: none;
  font-size: 24px;
  font-family: Microsoft YaHei UI;
  font-weight: 300;
  color: #333333;
  line-height: 66px;
}
.Comments .sendComments div {
  /* width: 100%; */
  padding-left: 1233px;
  margin-top: 42px;
}
.Comments .sendComments button {
  width: 244px;
  height: 70px;
  background-color: #a7a6f0;
  border-radius: 35px;
  font-size: 30px;
  font-family: Microsoft YaHei UI;
  font-weight: bold;
  color: #ffffff;
  line-height: 66px;
  transition: all 0.5s;
}
.Comments .sendComments button:hover {
  background-color: #ffc0cb;
  transition: all 0.5s;
}
</style>
