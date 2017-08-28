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
    ],
    menuList:[
        '代祷事项',
        '灵粮 · 灵修',
        '生日',
        '通讯录',
        '其它代祷',
        '通知 · 活动',
        '帮助',
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
    year:years,
    weekName:[
        'SUN','MON','TUE','WED','THU','FRI','SAT'
    ],
    weekName2:[
        '日','一','二','三','四','五','六'
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
        // console.log(timeArr.disTime)

        timeArr.oldday = false;

        timelast = '';
        timelast = (years + 1) + '/' + time;
        timeArr.times = time;

        // console.log(timelast);

        var tarTime2 = new Date(timelast).getTime();
        timeArr.disTime = Math.round((tarTime2 - nowTime) / 1000);

    }else{
        timeArr.oldday = true;

    }


    timeArr.seconds = timeArr.disTime % 60;
    timeArr.minutes = (timeArr.disTime - timeArr.seconds) / 60 % 60;
    timeArr.hours = (timeArr.disTime - timeArr.minutes * 60 - timeArr.seconds) / 3600 % 24;
    timeArr.days = (timeArr.disTime - timeArr.hours * 3600 - timeArr.minutes * 60 - timeArr.seconds) / 86400;

    timeArr.allDays = parseInt(timeArr.disTime/3600/24) + 1;
    timeArr.allDaysD = parseInt(timeArr.disTime/3600/24) + 1 + '天';

    if(timeArr.allDays == 0){
        timeArr.allDaysD = '今天';
        timeArr.allDays = '今';
    }


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
    //26
    {
        name: '从舟',
        prayer: [
            {text: '为开学和摸底考，和班主任关系。'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR('08/16'),
        signature: '',  //个人主页签名
        age: '',
        head: '',   //特殊提醒，例如：'考试加油！'
        imgsrc: 'img/head/congzhou.jpeg',
        bgc: '',
        id:'congzhou',
        listOpen: true,
        birthdayOpen: true,
        phone:'18217309179',
    },
    // 26
    {
        name: '从舟妈妈',
        prayer: [
            {text: '多多读经亲近神；'},
            {text: '坚固家庭祷告祭台，用信心仰望等候神。'},
            {text: ''}
        ],
        birthdayCD:tarTimeR('07/15'),
        signature: '',
        age: '',
        head: '',
        imgsrc: 'img/head/congzhoumama.jpeg',
        bgc: '',
        id:'congzhoumama',
        listOpen: true,
        birthdayOpen: true,
        phone:'13482694331',
    },
    //26
    {
        name: '栋夷',
        prayer: [
            {text: '为下周的出差，求神带领赐智慧，与神的关系亲近，多为家人代祷，求主带领前面的方向。'},
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
        listOpen: true,
        birthdayOpen: true,
        phone:'13651932095',
    },
    {
        name: '段段',
        prayer: [
            {text: '专心在神里；'},
            {text: '为校友会预备心。'},
            {text: ''}
        ],
        birthdayCD:tarTimeR('05/21'),
        signature: '',
        age: '',
        head: '',
        imgsrc: 'img/head/duanduan.jpeg',
        bgc: '',
        id:'duanduan',
        listOpen: true,
        birthdayOpen: true,
        phone:'15021886131',
    },
    //26
    {
        name: '蒙恩',
        prayer: [
            {text: '为找到新的聚会点，学习能够专心，为没来小组的弟兄姐妹代祷。'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR('01/23'),
        signature: '',
        age: '',
        head: '',
        imgsrc: 'img/head/mengen.jpeg',
        bgc: '',
        id:'mengen',
        listOpen: true,
        birthdayOpen: true,
        phone:'18817698750',
    },
    {
        name: '浩然',
        prayer: [
            {text: '计划用六年时间重返大型事务所工作，愿主成就！人心筹算自己的道路；惟耶和华指引他的脚步。'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR('12/21'),
        signature: '',
        age: '',
        head: '',
        imgsrc: 'img/head/haoran.jpeg',
        bgc: '',
        id:'haoran',
        listOpen: true,
        birthdayOpen: true,
        phone:'17765166621',
    },
    //26

//     26

    {
        name: '蓓静',
        prayer: [
            {text: '求每天亲近主，不以口舌论断人。'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR(''),
        signature: '',
        age: '',
        head: '',
        imgsrc: 'img/head/beijing.jpeg',
        bgc: '',
        id:'beijing',
        listOpen: true,
        birthdayOpen: true,
        phone:'',
    },
    {
        name: '思思',
        prayer: [
            {text: '为工作的人际关系，为读经，与神更加亲近，为找到房子感恩，为搬家顺利代祷。'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR('11/03'),
        signature: '',
        age: '',
        head: '',
        imgsrc: 'img/head/sisi.jpeg',
        bgc: '',
        id:'sisi',
        listOpen: true,
        birthdayOpen: true,
        phone:'18807046040',
    },
    //26
    {
        name: '锦艳',
        prayer: [
            {text: '求主看顾保守我，认真读经祷告，认识神。'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR('05/13'),
        signature: '',
        age: '',
        head: '',
        imgsrc: 'img/head/jinyan.jpeg',
        bgc: '',
        id:'jinyan',
        listOpen: true,
        birthdayOpen: true,
        phone:'15501695181',
    },
    {
        name: '贺莉娇',
        prayer: [
            {text: '为论文和工作，灵修和读经。'},
            {text: ''},
            {text: ''},
            {text: ''},

        ],
        birthdayCD:tarTimeR(''),
        signature: '',
        age: '',
        head: '',
        imgsrc: 'img/head/lijiao.jpeg',
        bgc: '',
        id:'lijiao',
        listOpen: true,
        birthdayOpen: true,
        phone:'',
    },
    {
        name: '何梅',
        prayer: [
            {text: '为有更多的时间亲近主和聚会祷告。'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR(''),
        signature: '',
        age: '',
        head: '',
        imgsrc: 'img/head/hemei.jpeg',
        bgc: '',
        id:'hemei',
        listOpen: true,
        birthdayOpen: true,
        phone:'',
    },
    {
        name: '秋萍',
        prayer: [
            {text: '为下周五产检祷告。'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR(''),
        signature: '',
        age: '',
        head: '',
        imgsrc: 'img/head/qiuping.jpeg',
        bgc: '',
        id:'mengen',
        listOpen: true,
        birthdayOpen: true,
        phone:'',
    },
    // 为我们家宝宝和姊妹祷告，求神给她一颗喜乐的心，万事寻求神的心意。
    {
        name: '申元',
        prayer: [
            {text: '求神带领工作，保持读经计划，在家庭和小孩的事上更多寻求神。'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR(''),
        signature: '',
        age: '',
        head: '',
        imgsrc: 'img/head/shenyuan.jpeg',
        bgc: '',
        id:'shenyuan',
        listOpen: true,
        birthdayOpen: true,
        phone:'',
    },
    //26
    {
        name: '炳林',
        prayer: [
            {text: '为我每天能够去做到早睡早起以及在校友会的学习祷告。'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR('09/20'),
        signature: '',
        age: '',
        head: '',
        imgsrc: 'img/head/binglin.jpeg',
        bgc: '',
        id:'binglin',
        listOpen: true,
        birthdayOpen: true,
        phone:'13761371606',
    },
//     1、新的一周工作会有新任务，求主开道，然后希望自己灵性上追求更多神的话语；
// 2、希望我老婆秋萍和小孩都能平安成长。
    {
        name: '黄霆',
        prayer: [
            {text: '希望自己和秋萍更亲近神，多灵修，新的一周求主保守秋萍和宝宝可以更健康，工作上压力少一点。'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR(''),
        signature: '',
        age: '',
        head: '',
        imgsrc: 'img/head/huangting.jpeg',
        bgc: '',
        id:'huangting',
        listOpen: true,
        birthdayOpen: true,
        phone:'',
    },
    {
        name: '杜威',
        prayer: [
            {text: '求神带领我在工作中时刻思想他，不远离他；'},
            {text: '并赐我智慧，在各样的事情上，有公义的判断。'},
            {text: ''}
        ],
        birthdayCD:tarTimeR(''),
        signature: '',
        age: '',
        head: '',
        imgsrc: 'img/head/duwei.jpeg',
        bgc: '',
        id:'huangting',
        listOpen: true,
        birthdayOpen: true,
        phone:'',
    },
    {
        name: '杜渠',
        prayer: [
            {text: '为肠胃不好，为好好读经'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR('03/15'),
        signature: '',
        age: '',
        head: '',
        imgsrc: 'img/head/duqu.jpeg',
        bgc: '',
        id:'duqu',
        listOpen: true,
        birthdayOpen: true,
        phone:'15649032317',
    },
    {
        name: '翁磊',
        prayer: [
            {text: '为八年级的学习代祷。'},
            {text: ''},
            {text: ''}
        ],
        birthdayCD:tarTimeR(''),
        signature: '',
        age: '',
        head: '',
        imgsrc: 'img/head/',
        bgc: '',
        id:'huangting',
        listOpen: true,
        birthdayOpen: true,
        phone:'',
    },
    // {
    //     name: '锦东',
    //     prayer: [
    //         {text: '为婚姻祷告。'},
    //         {text: ''},
    //         {text: ''}
    //     ],
    //     birthdayCD:tarTimeR(''),
    //     signature: '',
    //     age: '',
    //     head: '',
    //     imgsrc: 'img/head/',
    //     bgc: '',
    //     id:'huangting',
    //     listOpen: true,
    //     birthdayOpen: true,
    //     phone:'',
    // }

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
            dateTime:dateTime,

        },
        header:{
            seen: true,
        },
        menu:{
            seen: false,
            title: '导航',
            msg: '"神是我坚固的保障；他引导完全人行他的路。"',
            list: [
                { id:'0',text: member.menuList[0] ,icon:member.icon[0],num: memberList.length},
                { id:'1',text: member.menuList[1] ,icon:member.icon[1],num:''},
                { id:'2',text: member.menuList[2] ,icon:member.icon[2],num: member.birthdayLenght},
                { id:'3',text: member.menuList[3] ,icon:member.icon[3],num:member.phoneLenght},
                { id:'4',text: member.menuList[4] ,icon:member.icon[4]},
                { id:'5',text: member.menuList[5] ,icon:member.icon[5],num:''},
                { id:'6',text: member.menuList[6] ,icon:member.icon[6]},

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
                    weekName2: dateTime.weekName2,
                    week: dateTime.week,
                    data:[

                    ],
                    monthName:dateTime.monthName,
                    weekDateArr:dateTime.weekDateArr,
                    month:dateTime.month,


                },
                memberList:memberList,
                openAll: true,

            },
        //    1
            spirit:{
                title:{
                    titleText:member.menuList[1],
                    text:'" 凡事谦虚、温柔、忍耐，用爱心互相宽容， 用和平彼此联络，竭力保守圣灵所赐合而为一的心。"',
                    chapter:'—— 以弗所书 4:2-3',
                    src:'img/a.jpeg',
                },
                list:{
                    icon:member.icon[1],
                },
                msg:{
                    text:'',
                    title:''
                },
                videoList:[
                    {
                        title:'圣经中最叫人害怕的经文：God is good',
                        src:'http://v.qq.com/iframe/player.html?vid=j01965amd75&width=670&height=502.5&auto=0'
                    },
                ],
                musicList:[
                    '//music.163.com/outchain/player?type=2&id=17654232&auto=0&height=66',
                    '//music.163.com/outchain/player?type=2&id=29542772&auto=0&height=66',
                ]
            },
        //    2
            birthday:{
                title:{
                    titleText:member.menuList[2],
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
                openAll: true,



            },
        //    3
            phone:{
                title:{
                    titleText:member.menuList[3],
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
                    titleText:member.menuList[4],
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
                    titleText:member.menuList[5],
                    text:'',
                    chapter:''
                },
                msg:{
                    text:'信 · 望 · 爱',
                    title:'"你们要彼此相爱，像我爱你们一样；',
                    title2:'这就是我的命令。"',

                },
                list:[
                    // {
                    //     title:'聚餐',
                    //     con:'从舟家',
                    //     time:tarTimeR('07/30'),//06/24
                    //     img:'img/00-title-bg.jpg',
                    // },
                    {
                        title:'2017第三季度活动安排',
                        con:'',
                        time:tarTimeR('10/01'),//06/24
                        img:'img/01-title-bg.jpg',
                        src:'img/tz/qingtuan.jpeg',
                    }
                ],
            },
        //    6
            help:{

                title:{
                    msg:'Joy 2.0',
                    text:'天父必看顾我们，荣耀归于上帝，阿门',
                    titleMsg:[

                        '崩溃 次',
                        '正常运行 天',
                        '升级 次',

                    ],
                    titleMsgBottom:'耶稣爱你',
                    upLogLength:'0',
                    runDay:day2,

                },
                nameMsg:'',
                logTitle:'Joy 2.0 单页面应用思维导图 （渐进完善）',
                upLogTitle:'升级日志',
                upLog:[
                    {
                        date:'2017-06-20',
                        text:'【增加】视频模块；【更改】"灵粮 · 音乐"更改为"灵粮 · 灵修"；【优化】交互动画优化',
                    },

                    {
                        date:'2017-06-10',
                        text:'【版本】Joy 2.0 （喜乐组·清心）封版',
                    },
                    {
                        date:'2017-06-10',
                        text:'【增加】"生日" 倒计时提醒，"个人主页"；【优化】整体细节样式',
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

            // console.log(obj)
            // console.log(this.contentpage.index)


            this.contentpage.index.member = obj;

        },






    },

    created: function () {

        var obj = this;

        this.menu.list[5].num = this.contentpage.msg.list.length;
        this.menu.list[1].num = this.contentpage.spirit.videoList.length + this.contentpage.spirit.musicList.length;


        console.log(this.contentpage.msg.list)
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



