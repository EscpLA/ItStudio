<template>
    <div class="TeamContainer">
        <div class="Title">OUR TEAM</div>
        <div class="chinese">团队</div>
        <div class="ourTeamContainer">
            <div class="YearContainer">
                <div :class="[item.isShow ? 'YearChange' : 'Year']" v-for="(item,index) in YearArray" :key="index" @click="changeIsShow(index)">{{item.year}}
                    <div :class="[item.isShow ? 'line' : ' ']"></div>
                </div>
            </div>
            <div class="photoContainer">
                <!-- <div v-for="(item,index) in photoArray" :key="index">{{item.name}}</div> -->
                <img src="../../../img/next_right.png" alt="" class="btnleft left" @click="last()">
                <div class="personContainer">
                    <div class="person" v-for="(item,index) in photoArray" :key="index" v-show="photoShow[index]" :style="{marginLeft: (index%5)==0&&index==0 ? '0'+'px' : '49'+'px'}">
                    <img :src="item.avatar" alt="">
                    <div class="personName">{{item.name}}</div>
                    <div class="introduce">{{item.saying}}</div>
                </div>
                </div>
                <img src="../../../img/next_right.png" alt="" class="btnleft" @click="next()">
            </div>
            <div class="DepartmentContainer">
                <div :class="[!item.departmentShow ? 'department' : 'departmentChange']" v-for="(item,index) in YearArray[Year].department" :key="index" @click="changeDepartment(index)">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            YearArray:[
                //2020
                {
                    year:2020,
                    isShow:true,
                    department:[
                        {
                            name:"APP开发",
                            id:3,
                            departmentShow:true,
                            
                        },
                        {
                            name:"Web开发",
                            id:1,
                            departmentShow:false,
                        },
                        {
                            name:"程序开发",
                            id:0,
                            departmentShow:false,
                        },
                        {
                            name:"游戏开发",
                            id:4,
                            departmentShow:false,
                        },
                        {
                            name:"UI设计",
                            id:2,
                            departmentShow:false,
                        },
                    ]
                },
                //2019
                {
                    year:2019,
                    isShow:false,
                    department:[
                        {
                            name:"APP开发",
                            id:3,
                            departmentShow:true,
                        },
                        {
                            name:"Web开发",
                            id:1,
                            departmentShow:false,
                        },
                        {
                            name:"程序开发",
                            id:0,
                            departmentShow:false,
                        },
                        {
                            name:"游戏开发",
                            id:4,
                            departmentShow:false,
                        },
                        {
                            name:"UI设计",
                            id:2,
                            departmentShow:false,
                        },
                    ]
                },
                //2018
                {
                    year:2018,
                    isShow:false,
                    department:[
                        {
                            name:"APP开发",
                            id:3,
                            departmentShow:true,
                        },
                        {
                            name:"Web开发",
                            id:1,
                            departmentShow:false,
                        },
                        {
                            name:"程序开发",
                            id:0,
                            departmentShow:false,
                        },
                        {
                            name:"游戏开发",
                            id:4,
                            departmentShow:false,
                        },
                        {
                            name:"UI设计",
                            id:2,
                            departmentShow:false,
                        },
                    ]
                },
                //2017
                {
                    year:2017,
                    isShow:false,
                    department:[
                        {
                            name:"APP开发",
                            id:3,
                            departmentShow:true,
                        },
                        {
                            name:"Web开发",
                            id:1,
                            departmentShow:false,
                        },
                        {
                            name:"程序开发",
                            id:0,
                            departmentShow:false,
                        },
                        {
                            name:"游戏开发",
                            id:4,
                            departmentShow:false,
                        },
                        {
                            name:"UI设计",
                            id:2,
                            departmentShow:false,
                        },
                    ]
                },
                //2016
                {
                    year:2016,
                    isShow:false,
                    department:[
                        {
                            name:"APP开发",
                            id:3,
                            departmentShow:true,
                        },
                        {
                            name:"Web开发",
                            id:1,
                            departmentShow:false,
                        },
                        {
                            name:"程序开发",
                            id:0,
                            departmentShow:false,
                        },
                        {
                            name:"UI设计",
                            id:2,
                            departmentShow:false,
                        },
                    ]
                },
                //2015
                {
                    year:2015,
                    isShow:false,
                    department:[
                        {
                            name:"系统维护",
                            id:5,
                            departmentShow:true,
                        },
                        {
                            name:"Web开发",
                            id:1,
                            departmentShow:false,
                        },
                        {
                            name:"程序开发",
                            id:0,
                            departmentShow:false,
                        },
                        {
                            name:"UI设计",
                            id:2,
                            departmentShow:false,
                        },
                    ]
                },
                //2014
                {
                    year:2014,
                    isShow:false,
                    department:[
                        {
                            name:"系统维护",
                            id:5,
                            departmentShow:true,
                        },
                        {
                            name:"Web开发",
                            id:1,
                            departmentShow:false,
                        },
                        {
                            name:"程序开发",
                            id:0,
                            departmentShow:false,
                        },
                        {
                            name:"UI设计",
                            id:2,
                            departmentShow:false,
                        },
                    ]
                },
                //2013
                {
                    year:2013,
                    isShow:false,
                    department:[
                        {
                            name:"系统维护",
                            id:5,
                            departmentShow:true,
                        },
                        {
                            name:"Web开发",
                            id:1,
                            departmentShow:false,
                        },
                        {
                            name:"程序开发",
                            id:0,
                            departmentShow:false,
                        },
                    ]
                },
                //2012
                {
                    year:2012,
                    isShow:false,
                    department:[
                        {
                            name:"系统维护",
                            id:5,
                            departmentShow:true,
                        },
                        {
                            name:"Web开发",
                            id:1,
                            departmentShow:false,
                        },
                        {
                            name:"程序开发",
                            id:0,
                            departmentShow:false,
                        },
                        {
                            name:"UI设计",
                            id:2,
                            departmentShow:false,
                        },
                    ]
                },
                //2011
                {
                    year:2011,
                    isShow:false,
                    department:[
                        {
                            name:"系统维护",
                            id:5,
                            departmentShow:true,
                        },
                        {
                            name:"UI设计",
                            id:2,
                            departmentShow:false,
                        },
                    ]
                }, 
            ],
            Year:0,
            Department:3,
            photoArray:[],
            currentPage:1,
            photoShow:[true,true,true,true,true,false,false,false,false,false,false,false,false,false,false],
        }
    },
    methods:{
        changeIsShow(index){
            for(let i=0;i<this.YearArray.length;i++){
                this.YearArray[i].isShow=false;
            }
            this.YearArray[index].isShow=true;
            this.Year=index;
            this.Department=this.YearArray[index].department[0].id;
            for(let i=0;i<this.photoShow.length;i++){
                if(i<5){
                    this.photoShow[i]=true;
                }else{
                    this.photoShow[i]=false;
                }
            }
            axios.get('itshow/v1/older?grade='+this.YearArray[this.Year].year+'&department='+this.YearArray[this.Year].department[0].id)
            .then(res =>{
                this.photoArray=res.data;
                this.photoArray=this.photoArray.data.olders;
                // console.log(this.photoArray);
                // console.log(this.photoArray.msg);
            })
        },
        changeDepartment(index=0){
            for(let i=0;i<this.YearArray[this.Year].department.length;i++){
                this.YearArray[this.Year].department[i].departmentShow=false;
            }
                this.YearArray[this.Year].department[index].departmentShow=true;
                this.Department= this.YearArray[this.Year].department[index].id;
                for(let i=0;i<this.photoShow.length;i++){
                if(i<5){
                    this.photoShow[i]=true;
                }else{
                    this.photoShow[i]=false;
                }
            }
                axios.get('itshow/v1/older?grade='+this.YearArray[this.Year].year+'&department='+this.Department)
            .then(res =>{
                this.photoArray=res.data;
                this.photoArray=this.photoArray.data.olders;
                // console.log(this.YearArray[this.Year].department[this.Department].id);
                // console.log('this.department',this.Department);
                // console.log(this.photoArray);
                // console.log(this.photoArray.msg);
            })
        },
        next(){
            if(this.photoArray.length>this.currentPage*5){
                for(let i=0;i<this.photoArray.length;i++){
                    this.photoShow[i]=false;
                }
                for(let i=this.currentPage*5-1;i<this.currentPage*5+4;i++){
                    this.photoShow[i]=true;
                }
                this.currentPage++;
            }
        },
        last(){
            if(this.currentPage>1){
                for(let i=0;i<this.photoArray.length;i++){
                    this.photoShow[i]=false;
                }
                for(let i=(this.currentPage-1)*5-5;i<(this.currentPage-1)*5;i++){
                    this.photoShow[i]=true;
                }
                this.currentPage--;
            }
        }
    },
    created(){
        axios.get('itshow/v1/older?grade='+this.YearArray[this.Year].year+'&department='+this.YearArray[this.Year].department[0].id)
            .then(res =>{
                this.photoArray=res.data;
                this.photoArray=this.photoArray.data.olders;
                // console.log(this.YearArray[this.Year].department[this.Department-1].id);
                // console.log(this.photoArray.msg);
            })
    }
}
</script>
<style scoped>
.left{
    transform: rotate(180deg);
}
.btnleft{
    width: 45px;
height: 45px;
opacity: 0.5;
}
.introduce{
    text-align: center;
    font-size: 13px;
    font-family: Microsoft YaHei UI;
    font-weight: 300;
    color: #333333;
}
.personName{
    text-align: center;
    font-size: 17px;
    font-family: Microsoft YaHei UI;
    font-weight: bold;
    color: #333333;
    margin-top: 12px;
    margin-bottom: 12px;
}
.personContainer{
    display: flex;
    width: 80%;
    justify-content: center;
}
.photoContainer{
    width: 95%;
    display: flex;
    justify-content:space-between;
    margin-top: 180px;
    align-items: center;
}
.person{
    margin-left: 49px;
}
.personContainer :nth-child(1){
    margin-left: 0px;
}
.person>img{
    width: 160px;
    height: 160px;
    border-radius: 80px;
}
/* .Department{
    margin-top: 219px;
} */
.departmentChange{
    font-size: 24px;
    font-family: Microsoft YaHei UI;
    font-weight: bold;
    color: #333333;
    letter-spacing: 4px;
}
.DepartmentContainer{
    display: flex;
    justify-content: space-around;
    width: 60%;
    margin-top: 180px;
}
.department{
    font-size: 24px;
    font-family: Microsoft YaHei UI;
    font-weight: bold;
    color: #C5C5C5;
    letter-spacing: 3px;
}
.YearChange{
font-weight:bold;
font-size: 36px;
line-height: 50px;
}
.line{
width: 100%;
height: 12px;
background: linear-gradient(265deg, #FDC5EA, #8E89C5);
border-radius: 6px;

}
.Year{
    font-size: 30px;
    color: #C5C5C5;
    line-height: 60px;
}
.chinese{
    font-size: 36px;
font-family: Microsoft YaHei UI;
font-weight: bold;
color: #333333;
text-align: center;
margin-top: 26px;
}
.YearContainer{
    display: flex;
    justify-content: space-around;
    margin-top: 39px;
    width: 95%;
}
.ourTeamContainer{
    width: 1476px;
    height: 764px;
    background: #FFFFFF;
    box-shadow: 1px 1px 8px 1px rgba(76, 76, 76, 0.38);
    border-radius: 40px;
    margin: 0 auto;
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}
.TeamContainer{
    margin-top: 113px;
}
.Title{
    font-size: 60px;
font-family: Microsoft YaHei UI;
font-weight: bold;
color: #333333;
text-align: center;

background: linear-gradient(265deg, #9FD3F8 0%, #80B9E1 0%, #E5ACA3 0%, #FFB1C4 0%, #DC92C2 0%, #E3BBE3 0%, #A7EBA0 0%, #7BD672 0%, #FBCAD7 0%, #D8C1D6 0%, #FDC5EA 0%, #8E89C5 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
</style>