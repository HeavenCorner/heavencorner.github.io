/**
 * Created by Duyangsir on 2017/6/6.
 */
//全局变量

var member = {
    name:[

    ],
    prayer:{

    },
    birthdayLenght: 0,
    phoneLenght: 0,
    icon:[
        'joyT joyT-favorites',
        'joyT joyT-agriculture',
        'joyT joyT-gifts',
        'joyT joyT-account',
        'joyT joyT-earth',
        'joyT joyT-discount',
        'joyT joyT-help'
    ],
    otherIcon:[
        'joyT joyT-all',
        'joyT joyT-close',
        'joyT joyT-phone'
    ]
}
//日期

//    获取当前时间
var myDate = new Date();
// myDate.toLocaleDateString();     //可以获取当前日期
// myDate.toLocaleTimeString();     //可以获取当前时间
//
// myDate.getMonth();       //获取当前月份(0-11,0代表1月)
// myDate.getDate();        //获取当前日(1-31)
// myDate.getDay();         //获取当前星期X(0-6,0代表星期天)

var dateTime = {
    weekName:[
        'SUN','MON','TUE','WED','THU','FRI','SAT'
    ],
    week:myDate.getDay(),
    monthName:'June',
    month: myDate.getMonth(),
    date:myDate.getDate(),
    weekDateArr:[4,5,6,7,8,9,10],
};

//每周对应的天数数组
(function () {

})();



//计时
var nowTime = new Date().getTime();
var tarTime = new Date("2021/5/2 20:00:00").getTime();
var lastTime = new Date("2017/6/7 22:00:00").getTime();


//倒计时
var disTime = Math.round((tarTime - nowTime) / 1000);
var seconds = disTime % 60;
var minutes = (disTime - seconds) / 60 % 60;
var hours = (disTime - minutes * 60 - seconds) / 3600 % 24;
var day1 = (disTime - hours * 3600 - minutes * 60 - seconds) / 86400;

//正计时

var disTime2 = Math.round((nowTime - lastTime) / 1000);
var seconds2 = disTime2 % 60;
var minutes2 = (disTime2 - seconds2) / 60 % 60;
var hours2 = (disTime2 - minutes2 * 60 - seconds2) / 3600 % 24;
var day2 = (disTime2 - hours2 * 3600 - minutes2 * 60 - seconds2) / 86400;







//成员信息
var memberList = [
    {
        name: '成员q',
        prayer: [
            {text: '事件测试测试蚕丝事件测试测试蚕丝事件测试测试蚕丝事件测试测试蚕丝事件测试测试蚕丝事件测试测试蚕丝'},
            {text: '事件2'},
            {text: '事件3'}
        ],
        birthday: '2012-01-01',
        signature: '每天都是新的，啊哈哈哈哈',
        age: '26',
        head: '',
        imgsrc: 'img/head/duqu.jpeg',
        bgc: '',
        id:'congzhouBox',
        listOpen: false,
        birthdayOpen: false,
        phone:'tel:12345678',
    },
    {
        name: 'a',
        prayer: [
            {text: '事件测试测试蚕丝事件测试测试蚕丝事件测试测试蚕丝事件测试测试蚕丝事件测试测试蚕丝事件测试测试蚕丝'},
            {text: '事件2'},
            {text: '事件3'}
        ],
        birthday: '2012-01-01',
        signature: '每天都是新的，啊哈哈哈哈',
        age: '26',
        head: '',
        imgsrc: 'img/head/duqu.jpeg',
        bgc: '',
        id:'congzhouBox',
        listOpen: false,
        birthdayOpen: false,

        phone:'12345678',
    },
    {
        name: 'a',
        prayer: [
            {text: '事件测试测试蚕丝事件测试测试蚕丝事件测试测试蚕丝事件测试测试蚕丝事件测试测试蚕丝事件测试测试蚕丝'},
            {text: '事件2'},
            {text: '事件3'}
        ],
        birthday: '',
        signature: '每天都是新的，啊哈哈哈哈',
        age: '26',
        head: '',
        imgsrc: 'img/head/duqu.jpeg',
        bgc: '',
        id:'congzhouBox',
        listOpen: false,
        birthdayOpen: false,

        phone:'',
    },
    {
        name: 'a',
        prayer: [
            {text: '事件测试测试蚕丝事件测试测试蚕丝事件测试测试蚕丝事件测试测试蚕丝事件测试测试蚕丝事件测试测试蚕丝'},
            {text: '事件2'},
            {text: '事件3'}
        ],
        birthday: '',
        signature: '每天都是新的，啊哈哈哈哈',
        age: '26',
        head: '',
        imgsrc: 'img/head/duqu.jpeg',
        bgc: '',
        id:'congzhouBox',
        listOpen: false,
        birthdayOpen: false,

        phone:'12345678',
    },




];


//活动事项




for(var i=0;i < memberList.length;i++){
    //统计生日数目
    if(memberList[i].birthday != ''){
        member.birthdayLenght ++;
    }
//    统计通讯录数目
    if(memberList[i].phone != ''){
        member.phoneLenght ++;
        memberList[i].phone =  'tel:' + memberList[i].phone;
    }

}

//app
var app = new Vue({
    el:'#app',
    data:{
        all:{
            page: 1,
            icon: member.icon,
            otherIcon: member.otherIcon,
        },
        header:{
            seen: true,
        },
        menu:{
            seen: false,
            title: '导航',
            msg: '"神是我坚固的保障；他引导完全人行他的路。"',
            list: [
                { id:'0',text: '代祷事项' ,icon:member.icon[0],num: memberList.length},
                { id:'1',text: '灵粮 · 音乐' ,icon:member.icon[1]},
                { id:'2',text: '组员生日' ,icon:member.icon[2],num: member.birthdayLenght},
                { id:'3',text: '通讯录' ,icon:member.icon[3],num:member.phoneLenght},
                { id:'4',text: '其它代祷' ,icon:member.icon[4]},
                { id:'5',text: '通知 · 活动' ,icon:member.icon[5]},
                { id:'6',text: '帮助' ,icon:member.icon[6]},

            ],
            member:'',

        },
        contentpage:{
        //    0
            prayer:{
                title: {
                    msg:'Good Morning!',
                    text:'所以你们要彼此认罪，互相代求，使你们可以得医治。义人祈祷所发的力量是大有功效的。 ',
                    chapter:'—— 雅各书 5:16'
                },
                dateTime:{

                    weekName: dateTime.weekName,
                    week: dateTime.week,
                    data:[

                    ],
                    month:dateTime.monthName,
                    weekDateArr:dateTime.weekDateArr,


                },
                memberList:memberList,
                openAll: false,

            },
        //    1
            spirit:{
                title:{
                    titleText:'灵粮 · 音乐',
                },
                list:{
                    icon:member.icon[1],
                },
                msg:{
                    text:'',
                    title:''
                },
            },
        //    2
            birthday:{
                title:{
                    titleText:'组员生日',
                    lenght: member.birthdayLenght,
                },
                list:{
                    icon:member.icon[2],

                },
                msg:{
                    text:'',
                    title:''
                },
                memberList:memberList,
                openAll: false,



            },
        //    3
            phone:{
                title:{
                    titleText:'通讯录',
                    lenght: member.phoneLenght,
                },
                list:{
                    icon:member.otherIcon[2],
                },
                msg:{
                    text:'点击电话按钮获取信息',
                    title:'温良的舌是生命树；乖谬的嘴使人心碎。'
                },
            },
        //    4
            other:{

            },
        //    5
            msg:{

            },
        //    6
            help:{

                title:{
                    msg:'Joy 2.0',
                    text:'天父必看顾你',
                    titleMsg:[

                        '崩溃 次',
                        '正常运行 天',
                        '升级 次'

                    ],
                    titleMsgBottom:'流畅的体验请使用手机浏览器打开',
                    upLogLength:'0',
                    runDay:day2,

                },
                logTitle:'Joy 2.0 单页面应用思维导图 （渐进完善）',
                upLogTitle:'升级日志',
                upLog:[
                    {
                        date:'2017-06-09',
                        text:'【增加】"生日"模块完善',
                    },
                    {
                        date:'2017-06-08',
                        text:'【增加】"代祷事项"、"通讯录"和"帮助"模块完善',
                    },
                    {
                        date:'2017-06-07 22:00',
                        text:'Joy 2.0 基础框架测试上线',
                    },
                    {
                        date:'2017-06-06',
                        text:'Joy 2.0 思维导图构建、UI方案确定',
                    },
                ]




            }

        }

    },

    methods: {
        //标题
        openMenuList: function(){
            this.menu.seen =~ this.menu.seen;
        },
        closeMenuList: function(){
            var obj = this;
            closeMenuList(obj);
        },
        //菜单
        goMenu: function (id) {
            // console.log(id)
            this.all.page = id;
            var obj = this;
            closeMenuList(obj);
        },
    //    返回主页
        goHome: function(){
            this.all.page = 0;
        },
    //   主页点击标题折叠代祷事项(单)
        closePrayerList: function (obj) {

            if(obj.listOpen){
                obj.listOpen = false;
            }else{
                obj.listOpen = true;
            }

            // var listBox = document.getElementById(obj.id);
        },
    //    生日列表折叠
        closeBirthdayList: function (obj) {

            if(obj.birthdayOpen){
                obj.birthdayOpen = false;
            }else{
                obj.birthdayOpen = true;
            }

        },
    //    点击展开全部代祷事项
        openAllList: function (obj,who,x) {


            // console.log(obj.openAll);
            var n = this.contentpage[who].memberList.length;

            if(obj.openAll){
                obj.openAll = false;

                for (var i=0;i < n;i++){
                    if(x == '0'){
                        this.contentpage.prayer.memberList[i].listOpen = false;

                    }else if(x == '2'){
                        this.contentpage.birthday.memberList[i].birthdayOpen = false;

                    }
                }

            }else{
                obj.openAll = true;


                for (var i=0;i < n;i++){
                    if(x == '0'){
                        this.contentpage.prayer.memberList[i].listOpen = true;

                    }else if(x == '2'){
                        this.contentpage.birthday.memberList[i].birthdayOpen = true;
                        console.log(this.contentpage.birthday.memberList[i].birthdayOpen)

                    }
                }

            }

        },



    },

    created: function () {


        //全局时间段

        //生日页面：成员生日计算



    }
});

//公共函数
var closeMenuList = function(obj){
    setTimeout(function(){
        obj.menu.seen = false;
    },100)
}



