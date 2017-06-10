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

var years = myDate.getFullYear();
var curMonthDays = new Date(myDate.getFullYear(), (myDate.getMonth()+1), 0).getDate(); //本月有多少天
var curMonthDaysP = new Date(myDate.getFullYear(), myDate.getMonth(), 0).getDate(); //上个月有多少天
var curMonthDaysN = new Date(myDate.getFullYear(), (myDate.getMonth()+2), 0).getDate(); //下个月有多少天


var dateTime = {
    weekName:[
        'SUN','MON','TUE','WED','THU','FRI','SAT'
    ],
    week:myDate.getDay(),     //今天星期
    monthName:[
        'January','February','March','April',
        'May','June','July','August',
        'September', 'October', 'November', 'December'
    ],
    month: myDate.getMonth(),  //当月
    date:myDate.getDate(),     //今天
    weekDateArr:[],//本周的7天对应的日期
    curMonthDays:curMonthDays,//本月有几天
};

// dateTime.date = 30;

//本周对应的天数数组
(function () {

    var beginDay = dateTime.date - dateTime.week;

    //显示中间是1号的情况
    var m = 1;

    if(beginDay <= 0 ){
        beginDay = curMonthDaysP - dateTime.week + dateTime.date;

        for(var i=0;i < 7;i++){
            if((beginDay + i) <= curMonthDaysP){
                dateTime.weekDateArr[i] = beginDay + i;
            }else{

                for(var n = 1;n < (8 - dateTime.weekDateArr.length);n++){
                    // console.log('m:'+ m)
                    dateTime.weekDateArr.push(m);
                    m ++;

                }
            }
        }

    }else{
        for(var i=0;i < 7;i++){

            if((beginDay + i) <= curMonthDays){
                dateTime.weekDateArr[i] = beginDay + i;
            }else{
                for(var n = 1;n < (8 - dateTime.weekDateArr.length);n++){
                    // console.log('m:'+ m)
                    dateTime.weekDateArr.push(m);
                    m ++;
                }
            }

        }
    }



})();



//计时
var nowTime = new Date().getTime();
var tarTime = new Date("2021/5/2 20:00:00").getTime();
var lastTime = new Date("2017/6/7 20:00:00").getTime();


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




//计算倒计时函数
var tarTimeR = function(time){



    var timelast;

    var timeArr = {};
    if(time == ''){
        timeArr.times = time;
        return timeArr;
    }
    timelast = (years + 0) + '/' + time;
    timeArr.times = time;
    timeArr.birthday = time.replace('/','');
    // console.log(timeArr.birthday);
    var tarTime = new Date(timelast).getTime();
    //倒计时

    timeArr.disTime = Math.round((tarTime - nowTime) / 1000);


    if(timeArr.disTime < 0){
        console.log(timeArr.disTime)

        timelast = '';
        timelast = (years + 1) + '/' + time;
        timeArr.times = time;

        console.log(timelast);

        var tarTime2 = new Date(timelast).getTime();
        timeArr.disTime = Math.round((tarTime2 - nowTime) / 1000);

    }


    timeArr.seconds = timeArr.disTime % 60;
    timeArr.minutes = (timeArr.disTime - timeArr.seconds) / 60 % 60;
    timeArr.hours = (timeArr.disTime - timeArr.minutes * 60 - timeArr.seconds) / 3600 % 24;
    timeArr.days = (timeArr.disTime - timeArr.hours * 3600 - timeArr.minutes * 60 - timeArr.seconds) / 86400;

    timeArr.allDays = parseInt(timeArr.disTime/3600/24)

    timeArr.month = parseInt(timeArr.allDays/30);


    // console.log(timeArr.allDays,timeArr.times);


    // console.log(timeArr)

    if(timeArr.days < 0){
        timeArr.old = false;
        timeArr.msg = '';
    }

    return timeArr;
}



// 提示语

var hello = '哈利路亚';

(function(){

    var myDate = new Date();
    var nowHours = myDate.getHours();

    var arrmsg = ['哈利路亚，早安', '哈利路亚，上午好', '哈利路亚，午安',
        '哈利路亚，下午好', '哈利路亚，晚上好','哈利路亚，晚安',
        '哈利路亚，深夜好','哈利路亚，凌晨好','哈利路亚，中午好'];

    //1        =>5<=8   早安

    if((nowHours == 5 || nowHours > 5) && (nowHours == 8 || nowHours < 8) ){

        // canvasbgcolor = '#E8E8E8';
        hello = arrmsg[0];

    }

    //2        >8<=11  上午好 关闭星空
    if((nowHours > 8) && (nowHours == 11 || nowHours < 11)) {

        // $('#canvas').css({display: 'none'});
        //
        // $('#msg-font').html(arrmsg[1]);

        hello = arrmsg[1];



    }



    //9            新加的  中午好

    if((nowHours > 11) && (nowHours == 12 || nowHours < 12)) {

        // $('#canvas').css({display: 'none'});
        //
        // $('#msg-font').html(arrmsg[8]);

        hello = arrmsg[8];



    }


    //3       >12<=13     午安
    if((nowHours > 12) && (nowHours == 13 || nowHours < 13)){
        // $('#canvas').css({display: 'none'});
        //
        // $('#msg-font').html(arrmsg[2]);

        hello = arrmsg[2];


    }

    //4        >14<=18     下午好
    if((nowHours > 13) && (nowHours == 18 || nowHours < 18)){
        // $('#canvas').css({display: 'none'});
        //
        // $('#msg-font').html(arrmsg[3]);

        hello = arrmsg[3];



    }

    //5        >18<=20   晚上好    背景变化启动canvas  深灰色


    if((nowHours > 18) && (nowHours == 20 || nowHours < 20)){

        // canvasbgcolor = '#5b5b5b';
        //
        // $('#msg-font').html(arrmsg[4]);
        // $('#msg-font').css({color:'#ffffff'});
        //
        // $('.p3d').css({opacity: '.9'})


        hello = arrmsg[4];



    }

    //6        >20<23   晚安
    if((nowHours > 20) && (nowHours < 23)){

        // canvasbgcolor = 'hsla(' + hue + ', 64%, 6%, 2)';
        //
        // $('#msg-font').html(arrmsg[5]);
        // $('#msg-font').css({color:'#ffffff'});
        //
        // $('.p3d').css({opacity: '.6'})

        hello = arrmsg[5];



    }

    //7        =23  深夜好
    if(nowHours == 23){
        // canvasbgcolor = 'hsla(' + hue + ', 64%, 6%, 2)';
        //
        // $('#msg-font').html(arrmsg[6]);
        // $('#msg-font').css({color:'#ffffff'});
        //
        // $('.p3d').css({opacity: '.6'})

        hello = arrmsg[6];




    }

    //8        >=0<5  凌晨好


    if((nowHours == 0 || nowHours > 0) && (nowHours < 5)){

        // canvasbgcolor = '#709DF2';
        //
        //
        // $('#msg-font').html(arrmsg[7]);
        //
        // $('.p3d').css({opacity: '.7'})

        hello = arrmsg[7];




    }


})();




//成员信息
var memberList = [
    {
        name: '从舟',
        prayer: [
            {text: '1'},
            {text: '1'},
            {text: ''}
        ],
        birthdayCD:tarTimeR('08/16'),
        signature: '',
        age: '26',
        head: '',
        imgsrc: 'img/head/congzhou.jpeg',
        bgc: '',
        id:'congzhou',
        listOpen: false,
        birthdayOpen: false,
        phone:'18217309179',
    },
    {
        name: '从舟妈妈',
        prayer: [
            {text: '1'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR('07/15'),
        signature: '',
        age: '',
        head: '',
        imgsrc: 'img/head/congzhoumama.jpeg',
        bgc: '',
        id:'congzhoumama',
        listOpen: false,
        birthdayOpen: false,
        phone:'13482694331',
    },
    {
        name: '栋夷',
        prayer: [
            {text: '1'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR('2/15'),
        signature: '',
        age: '',
        head: '',
        imgsrc: 'img/head/dongyi.jpeg',
        bgc: '',
        id:'dongyi',
        listOpen: false,
        birthdayOpen: false,
        phone:'13651932095',
    },
    {
        name: '段段',
        prayer: [
            {text: '1'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR('05/21'),
        signature: '',
        age: '26',
        head: '',
        imgsrc: 'img/head/duanduan.jpeg',
        bgc: '',
        id:'duanduan',
        listOpen: false,
        birthdayOpen: false,
        phone:'15021886131',
    },
    {
        name: '蒙恩',
        prayer: [
            {text: '1'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR('01/23'),
        signature: '',
        age: '26',
        head: '',
        imgsrc: 'img/head/mengen.jpeg',
        bgc: '',
        id:'mengen',
        listOpen: false,
        birthdayOpen: false,
        phone:'18817698750',
    },
    {
        name: '浩然',
        prayer: [
            {text: '1'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR('12/21'),
        signature: '',
        age: '26',
        head: '',
        imgsrc: 'img/head/haoran.jpeg',
        bgc: '',
        id:'haoran',
        listOpen: false,
        birthdayOpen: false,
        phone:'17765166621',
    },
    {
        name: '晶晶',
        prayer: [
            {text: '1'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR('10/25'),
        signature: '',
        age: '26',
        head: '',
        imgsrc: 'img/head/jingjing.jpeg',
        bgc: '',
        id:'jingjing',
        listOpen: false,
        birthdayOpen: false,
        phone:'13009685561',
    },
    {
        name: '蓓静',
        prayer: [
            {text: '1'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR(''),
        signature: '',
        age: '26',
        head: '',
        imgsrc: 'img/head/beijing.jpeg',
        bgc: '',
        id:'beijing',
        listOpen: false,
        birthdayOpen: false,
        phone:'',
    },
    {
        name: '思思',
        prayer: [
            {text: '1'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR('11/03'),
        signature: '',
        age: '26',
        head: '',
        imgsrc: 'img/head/sisi.jpeg',
        bgc: '',
        id:'sisi',
        listOpen: false,
        birthdayOpen: false,
        phone:'18807046040',
    },
    {
        name: '锦燕',
        prayer: [
            {text: '1'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR('05/13'),
        signature: '',
        age: '26',
        head: '',
        imgsrc: 'img/head/jinyan.jpeg',
        bgc: '',
        id:'jinyan',
        listOpen: false,
        birthdayOpen: false,
        phone:'15501695181',
    },
    {
        name: '申元',
        prayer: [
            {text: '1'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR(''),
        signature: '',
        age: '26',
        head: '',
        imgsrc: 'img/head/shenyuan.jpeg',
        bgc: '',
        id:'shenyuan',
        listOpen: false,
        birthdayOpen: false,
        phone:'',
    },
    {
        name: '炳林',
        prayer: [
            {text: '1'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR('09/20'),
        signature: '',
        age: '26',
        head: '',
        imgsrc: 'img/head/binglin.jpeg',
        bgc: '',
        id:'binglin',
        listOpen: false,
        birthdayOpen: false,
        phone:'13761371606',
    },
    {
        name: '黄霆',
        prayer: [
            {text: '1'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR(''),
        signature: '',
        age: '26',
        head: '',
        imgsrc: 'img/head/huangting.jpeg',
        bgc: '',
        id:'huangting',
        listOpen: false,
        birthdayOpen: false,
        phone:'',
    },
    {
        name: '杜渠',
        prayer: [
            {text: '你撒飞洒发来师傅师傅师傅你的；萨芬拉风哈舒服撒发生'},
            {text: '2'},
            {text: '3'}
        ],
        birthdayCD:tarTimeR('03/15'),
        signature: '保持饥饿感',
        age: '26',
        head: '',
        imgsrc: 'img/head/duqu.jpeg',
        bgc: '',
        id:'duqu',
        listOpen: false,
        birthdayOpen: false,
        phone:'15649032317',
    },





];


//活动事项


for(var i=0;i < memberList.length;i++){
    //统计生日数目
    if(memberList[i].birthdayCD.times != ''){
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
            page: '0',
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
                { id:'2',text: '生日' ,icon:member.icon[2],num: member.birthdayLenght},
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
                    msg:hello,
                    text:'所以你们要彼此认罪，互相代求，使你们可以得医治。义人祈祷所发的力量是大有功效的。 ',
                    chapter:'—— 雅各书 5:16'
                },
                dateTime:{

                    weekName: dateTime.weekName,
                    week: dateTime.week,
                    data:[

                    ],
                    monthName:dateTime.monthName,
                    weekDateArr:dateTime.weekDateArr,
                    month:dateTime.month,


                },
                memberList:memberList,
                openAll: false,

            },
        //    1
            spirit:{
                title:{
                    titleText:'灵粮 · 音乐',
                    text:'所以你们要彼此认罪，互相代求，使你们可以得医治。义人祈祷所发的力量是大有功效的。 ',
                    chapter:'—— 雅各书 5:16'
                },
                list:{
                    icon:member.icon[1],
                },
                msg:{
                    text:'',
                    title:''
                },
                musicList:[
                    '//music.163.com/outchain/player?type=2&id=17654232&auto=0&height=66',
                    '//music.163.com/outchain/player?type=2&id=29542772&auto=0&height=66',
                ]
            },
        //    2
            birthday:{
                title:{
                    titleText:'生日',
                    lenght: member.birthdayLenght,
                },
                list:{
                    icon:member.icon[2],

                },
                msg:{
                    text:'',
                    title:''
                },
                memberList: memberList,
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
                    title:'"温良的舌是生命树；乖谬的嘴使人心碎。"'
                },
            },
        //    4
            other:{
                title:{
                    titleText:'其它代祷',
                    lenght: member.phoneLenght,
                },
                list:{
                    icon:member.otherIcon[2],
                },
                msg:{
                    text:'0',
                    title:'0',
                },
            },
        //    5
            msg:{
                title:{
                    titleText:'通知 · 活动',
                    text:'',
                    chapter:''
                },
                msg:{
                    text:'信 · 望 · 爱',
                    title:'"你们要彼此相爱，像我爱你们一样；',
                    title2:'这就是我的命令。"',

                },
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
                nameMsg:'',
                logTitle:'Joy 2.0 单页面应用思维导图 （渐进完善）',
                upLogTitle:'升级日志',
                upLog:[

                    {
                        date:'2017-06-10',
                        text:'【版本】Joy 2.0 封版',
                    },
                    {
                        date:'2017-06-10',
                        text:'【增加】"生日" 倒计时提醒，"个人主页"；【优化】"菜单"选中状态的样式',
                    },
                    {
                        date:'2017-06-09',
                        text:'【增加】"生日" 基础模块和 "灵粮 · 音乐" 和其它模块的完善',
                    },
                    {
                        date:'2017-06-08',
                        text:'【增加】"代祷事项"、"通讯录" 和 "帮助" 模块完善',
                    },
                    {
                        date:'2017-06-07',
                        text:'Joy 2.0 基础框架测试上线',
                    },
                    {
                        date:'2017-06-06',
                        text:'Joy 2.0 思维导图构建、UI方案确定',
                    },
                ]




            },



            //  7  index
            index:{
                title:{
                    titleName:'杜渠',
                    img:'img/head/duqu.jpeg',
                    signature: '保持饥饿感',

                },
                msg:{
                    text:'',
                    title:'',
                    title2:'',

                },
                member:memberList[13],

            },

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
                        // console.log(this.contentpage.birthday.memberList[i].birthdayOpen)

                    }
                }

            }

        },

    //    进入个人主页

        goIndex:function(obj){
            this.all.page = 'index';
        //    开始部署

            console.log(obj)
            console.log(this.contentpage.index)


            this.contentpage.index.member = obj;

        },






    },

    created: function () {

        var obj = this;


        //全局定时器



        //生日页面：成员生日计算



    }
});

//公共函数
var closeMenuList = function(obj){
    setTimeout(function(){
        obj.menu.seen = false;
    },100)
}

//时间段函数



