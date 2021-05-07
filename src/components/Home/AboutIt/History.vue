<template>
  <div class="History">
    <p class="history">History</p>
    <p class="chinese">历史</p>
    <div class="historyContainer" >
      <div class="numContainer">
        <div
          class="num"
          v-for="(item, index) in historyArray"
          :key="index"
          @click="changeLine(index)"
        >
          {{ item.year }}
          <div class="line" v-show="item.bool"></div>
        </div>
      </div>
      <ul>
        <li class="history2019" v-show="historyArray[0].bool" :style="{backgroundImage: 'url('+'https://cdn.ruabbit.top/img/4P52PO8QKZCJA93'+'.png'+ ')'}"></li>
        <li class="history2018" v-show="historyArray[1].bool" :style="{backgroundImage: 'url('+'https://cdn.ruabbit.top/img/2019'+'.png'+ ')'}">
          <div class="title">作品展示</div>
          <div class="say">
            19年游戏部合作完成了一个可联网、能存档的俯视角射击游戏。
          </div>
          <div class="title">部门更新</div>
          <div class="say">前端部门更新为Web开发部门</div>
          <div class="title">作品展示</div>
          <div class="say">
            Ul与web开发、APP、程序合作。设计了爱特读书及爱特读书APP、爱特展示网、ITile日程APP。
          </div>
        </li>
        <li class="history2018" v-show="historyArray[2].bool" :style="{backgroundImage: 'url('+'https://cdn.ruabbit.top/img/2018'+'.png'+ ')'}">
          <div class="title">部门增加</div>
          <div class="say">新增游戏开发部门</div>
          <div class="title">新增成员</div>
          <div class="say">9位新成员加入爱特工作室大家庭</div>
          <div class="title">开拓展示网</div>
          <div class="say">开拓爱特展示网，成功上线运行</div>
          <div class="title">新网站上线</div>
          <div class="say">制作众创空间预约系统，成功上线运行</div>
        </li>
        <li class="history2018" v-show="historyArray[3].bool" :style="{backgroundImage: 'url('+'https://cdn.ruabbit.top/img/2017'+'.png'+ ')'}">
          <div class="title">开拓展示网</div>
          <div class="say">开拓爱特展示网，成功上线运行</div>
          <div class="title">开拓信院网站</div>
          <div class="say">开拓信息科学与工程学院网站，成功上线运行</div>
          <div class="title">论坛</div>
          <div class="say">
            爱特与蓝鲸，ACM一同参加第八届中国海洋大学科技论坛，国务院副总理刘延东前来参观
          </div>
          <div class="title">部门增加</div>
          <div class="say">Android App开发部门正式成立</div>
        </li>
        <li class="history2016" v-show="historyArray[4].bool" :style="{backgroundImage: 'url('+'https://cdn.ruabbit.top/img/2016'+'.png'+ ')'}">
          <div class="title">上线教育网站</div>
          <div class="say">
            爱特为中国海洋大学国际教育学院制作的新版展示网上线运行
          </div>
          <div class="title">新增成员</div>
          <div class="say">14位新成员加入爱特工作室大家庭，人数创历年之最</div>
          <div class="title">比赛</div>
          <div class="say">
            爱特组建的队伍在“青岛黑客马拉松暨国际创新大赛”中表现优异，获得“具有潜力的市场奖”
          </div>
          <div class="title">部门更新</div>
          <div class="say">爱特工作室取消系统维护部门，进入全员维护时代</div>
          <div class="title">上线网站</div>
          <div class="say">由爱特制作的中国海洋大学计算机系网站成功上线</div>
          <div class="title">比赛</div>
          <div class="say">
            在蓝桥杯团队赛中爱特工作室凭借“寻课” APP获山东省二等奖
          </div>
        </li>
        <li class="history2019" v-show="historyArray[5].bool" :style="{backgroundImage: 'url('+'https://cdn.ruabbit.top/img/2015'+'.png'+ ')'}">
          <div class="title">新网站上线</div>
          <div class="say">中国海洋大学海洋技术系网站成功上线运行</div>
          <div class="title">部门划分</div>
          <div class="say">原美工部门细分为UI设计与前端开发两个部门</div>
          <div class="title">制作展示页</div>
          <div class="say">为中国海洋大学iGEM比赛团队制作静态展示页面</div>
        </li>
        <li class="history2014" v-show="historyArray[6].bool" :style="{backgroundImage: 'url('+'https://cdn.ruabbit.top/img/2014'+'.png'+ ')'}">
          <div class="title">开拓信息科学与工程学</div>
          <div class="say">开拓信息科学与工程学院网站，成功上线运行</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import bgImag2020 from '../../../img/4P52PO8QKZCJA93.png'
// import bgimg1 from '../../../img/2020.png'
import bgImg2019 from '../../../img/2019.png'
import bgImg2018 from '../../../img/2018.png'
import bgImg2017 from '../../../img/2017.png'
import bgImg2016 from '../../../img/2016.png'
import bgImg2015 from '../../../img/2015.png'
import bgImg2014 from '../../../img/2014.png'
export default {
  data() {
    return {
      bgImg2019:bgImg2019,
      bgImg2020:bgImag2020,
      bgImg2018:bgImg2018,
      bgImg2017:bgImg2017,
      bgImg2016:bgImg2016,
      bgImg2015:bgImg2015,
      bgImg2014:bgImg2014,
      num:0,
      historyArray: [
        {
          year: 2020,
          bool: true,
          // backgroundImg:bgImag2020,
        },
        {
          year: 2019,
          bool: false,
        },
        {
          year: 2018,
          bool: false,
        },
        {
          year: 2017,
          bool: false,
        },
        {
          year: 2016,
          bool: false,
        },
        {
          year: 2015,
          bool: false,
        },
        {
          year: 2014,
          bool: false,
        },
      ],
    };
  },
  methods: {
    changeLine(index) {
      for (let i = 0; i < this.historyArray.length; i++) {
        this.historyArray[i].bool = false;
      }
      this.historyArray[index].bool = true;
    },
    findTrue(){
      for(let i=0;i<this.historyArray.length;i++){
        if(this.historyArray[i].bool==true)
        return i
      }
    }
  },
};
</script>
<style scoped>
.numContainer {
  display: flex;
  justify-content:space-around;
  width: 90%;
  /* margin-left: 97px;
  margin-right: 97px; */
  /* padding-left: 97px; */
  /* padding-right: 97px; */
}
.History {
  margin-top: 105px;
  margin-left: 222px;
  margin-right: 222px;
}
ul {
  display: flex;
  /* margin-top: -200px; */
  /* margin-left: 60px; */
  margin-top: 150px;
  align-items: start;
  justify-content: start;
  /* padding-top: 0px; */
  flex: 9;
  width: 100%;
}
.history2018 {
  /* margin-top: 91px; */
}
.history2019 {
  /* margin-top: -145px; */
}
.history2016 {
  /* margin-top: 260px; */
  /* margin-top: 91px; */
}
.history2014 {
  /* margin-top: -291px;
    margin-left: -420px; */
}
li {
  display: flex;
  flex-wrap: wrap;
  /* align-items: start; */
  /* justify-content: center; */
  /* align-content: start; */
  justify-content: start;
  height: 100%;
  flex-direction: column;
  width: 100%;
  margin-left: 140px;
  background-size: 1073px 314px;
  background-repeat: no-repeat;
  background-position: 320px 150px;
}
.title {
  width: 100%;
  font-size: 30px;
  font-family: Microsoft YaHei UI;
  font-weight: 400;
  color: #333333;
  line-height: 48px;
  /* margin-top: 40px; */
  display: flex;
}
.say {
  font-family: Microsoft YaHei UI;
  font-weight: 400;
  color: #ff333333;
  font-size: 30px;
  line-height: 48px;
  display: flex;
  margin-bottom: 40px;
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
.historyContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 1px 1px 8px 1px rgba(76, 76, 76, 0.57);
  border-radius: 40px;
  /* padding-left: 97px;
  padding-right: 97px; */
  margin-top: 37px;
  height: 1009px;
  /* justify-content: space-around;
  justify-content: start;
  align-items: start; */
  flex-direction: column;
  justify-content: start;
  /* align-items: start; */
  align-items: center;
}
/* .historyContainer:nth-child(1){
    margin-left: 97px;
} */
.chinese {
  font-size: 36px;
  font-family: Microsoft YaHei UI;
  font-weight: bold;
  color: #333333;
  text-align: center;
  /* margin-top: 24px; */
}
.num {
  font-size: 30px;
  font-family: Microsoft YaHei UI;
  font-weight: 300;
  color: #333333;
  margin-top: 82px;
  margin-bottom: -50px;
  height: 0px;
  cursor: pointer;
}
.line {
  height: 11px;
  background: linear-gradient(-79deg, #f1bee6, #948cc7);
  border-radius: 5px;
  margin-top: 5px;
}
</style>