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
    icon:[
        'joyT joyT-favorites',
        'joyT joyT-agriculture',
        'joyT joyT-gifts',
        'joyT joyT-phone',
        'joyT joyT-earth',
        'joyT joyT-discount',
        'joyT joyT-help'
    ],
    otherIcon:[
        'joyT joyT-all',
        'joyT joyT-close',
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
}




//成员信息
var memberList = [
    {
        name: '从舟',
        prayer: [
            {text: '事件1sahahhdsh撒等候神的劳动手段撒大声地简单来说卡德加撒娇的萨拉'},
            {text: '事件2'},
            {text: '事件3'}
        ],
        birthday: '2012-01-01',
        signature: '每天都是新的，啊哈哈哈哈',
        age: '26',
        head: '',
        imgsrc: 'img/head/congzhou.jpeg',
        bgc: '',
        id:'congzhou'
    },
    {
        name: '从舟妈妈',
        prayer: [
            {text: '事件1'},
            {text: '事件2'},
            {text: '事件3'}
        ],
        birthday: '',
        signature: '每天都是新的，啊哈哈哈哈',
        age: '26',
        head: '',
        imgsrc: 'img/head/congzhou.jpeg',
        bgc: '',
        id: 'duqu'
    },


]



for(var i=0;i < memberList.length;i++){
    //统计生日数目
    if(memberList[i].birthday != ''){
        member.birthdayLenght ++;
    }

}

//app
var app = new Vue({
    el:'#app',
    data:{
        all:{
            page: 0,
            icon: member.icon,
            otherIcon: member.otherIcon,
        },
        header:{
            seen: true,
        },
        menu:{
            seen: false,
            title: 'Menu List',
            msg: '点击菜单切换所选页面',
            list: [
                { id:'0',text: '代祷事项' ,icon:member.icon[0],num: memberList.length},
                { id:'1',text: '灵粮音乐' ,icon:member.icon[1]},
                { id:'2',text: '小组生日' ,icon:member.icon[2],num: member.birthdayLenght},
                { id:'3',text: '通讯录' ,icon:member.icon[3]},
                { id:'4',text: '其它代祷' ,icon:member.icon[4]},
                { id:'5',text: '通知' ,icon:member.icon[5]},
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

            },
        //    1
            spirit:{

            },
        //    2
            birthday:{

            },
        //    3
            phone:{

            },
        //    4
            other:{

            },
        //    5
            msg:{

            },
        //    6
            help:{

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
            console.log(id)
            this.all.page = id;
            var obj = this;
            closeMenuList(obj);
        },
    //    返回主页
        goHome: function(){
            this.all.page = 0;
        },
    //
    },

    created: function () {



        //    时间段

    //    图片预加载：

    //    成员生日计算

    }
});

//公共函数
var closeMenuList = function(obj){
    setTimeout(function(){
        obj.menu.seen = false;
    },100)
}



