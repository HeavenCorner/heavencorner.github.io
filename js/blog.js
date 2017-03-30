/*!
 * Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2015 Start Bootstrap
 * Licensed under Apache 2.0 (https://github.com/IronSummitMedia/startbootstrap/blob/gh-pages/LICENSE)
 */

// Tooltip Init
$(function() {
    $("[data-toggle='tooltip']").tooltip();
});


// make all images responsive
/*
 * Unuse by Hux
 * actually only Portfolio-Pages can't use it and only post-img need it.
 * so I modify the _layout/post and CSS to make post-img responsive!
 */
// $(function() {
//  $("img").addClass("img-responsive");
// });

// responsive tables
$(document).ready(function() {
    $("table").wrap("<div class='table-responsive'></div>");
    $("table").addClass("table");
});

// responsive embed videos
$(document).ready(function () {
    $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    $('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
    $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    $('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
});

// 判断是不是博文页面
function isPages(attr){
    var currentBoolean = document.querySelector('.navbar.navbar-custom').getAttribute(attr);
    if(currentBoolean === 'true'){return true;}
    return false;
}
/*
    滚动函数
    接收三个参数,
        1 接收一个DOM对象
        2 给目标对象切换class
        3 触发的高度 (可选项,如果不指定高度,会将DOM的高度作为触发高度)
*/
function scrollCheck(scrollTarget, toggleClass, scrollHeight){
    document.addEventListener('scroll',function(){
    var currentTop = window.pageYOffset;
        currentTop > (scrollHeight||scrollTarget.clientHeight)
        ?scrollTarget.classList.add(toggleClass)
        :scrollTarget.classList.remove(toggleClass)
    })
}

//主页
(function(){
    if(!isPages('data-ispost')){
        var navbar = document.querySelector('.navbar.navbar-custom')
        navbar.classList.add('is-fixed');
    }

})();

/*
* 先获取H1标签
* 然后滚动出现固定导航条后
* 将其内容放到上面居中显示
* */

/*
    博文页面，手机端时仅仅显示菜单按钮
*/

(function(){
    if (isPages('data-ispost')){
        //title变低
        $('.intro-header').addClass('intro-header-text');

        var navbar = document.querySelector('.navbar-custom');
        var introHeader = document.querySelector('.intro-header').offsetHeight;
        var introHeader = introHeader > 497 ? introHeader : 400;
        var toc = document.querySelector('.toc-wrap');
        var postTitle = document.querySelector('.post-title-haojen');
        scrollCheck(toc,'toc-fixed',introHeader-60);

        //检测页面的宽度大小，当小于768时就不弹出20170322
        if($(window).width() < 768){
            // 当向下滑动一定距离后
            $(document).scroll(function(){
                if($(document).scrollTop() > 100){
                    $('.navbar-toggle').css({
                        background: 'rgba(0,0,0,0.1)',
                        borderRadius: '10%',
                        transition: 'all 0s'
                    });
                    $('.navbar.navbar-default.navbar-custom.navbar-fixed-top').css({
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        boxShadow: '0 0 0px rgba(14, 14, 14, 0)',
                    });
                    $('.navbar-brand.animated.pulse').css({
                        display: 'none',
                    });
                    $('.navbar-toggle').addClass('navbar-toggles');
                    $('.navbar').removeClass('navbar-customs');
                    $('.navbar').removeClass('shadow');
                    $('.navbar').removeClass('navbar-fixed-top');
                    $('.navbar').addClass('lookc');

                }else{
                    $('.navbar-toggle').css({
                        background: 'rgba(0,0,0,0)',
                        borderRadius: '0',
                    });
                    $('.navbar.navbar-default.navbar-custom.navbar-fixed-top').css({
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        boxShadow: '0 0 10px rgba(14, 14, 14, .26)',
                    });
                    $('.navbar-brand.animated.pulse').css({
                        display: 'block',
                    });
                    $('.navbar-toggle').removeClass('navbar-toggles');
                    $('.navbar').addClass('navbar-customs');
                    $('.navbar').addClass('shadow');
                    $('.navbar').addClass('navbar-fixed-top');
                    $('.navbar').removeClass('lookc');
            //
                }
            });

            scrollCheck(navbar,'is-fixed');
            scrollCheck(postTitle,'post-title-fixed',introHeader-60);

        }else{
            scrollCheck(navbar,'is-fixed');
            scrollCheck(postTitle,'post-title-fixed',introHeader-60);
        }

        return;
    }
})();

//检测页面的宽度大小，当小于768时就不弹出20170322
if($(window).width() < 768){
    //如果不是主页和文章就不滚动也隐藏掉
    if(!isPages('data-ishome') && !isPages('data-ispost')) {
        $('.navbar-toggle').css({
            background: 'rgba(0,0,0,0.1)',
            borderRadius: '10%',
            transition: 'all 0s'
        });
        $('.navbar.navbar-default.navbar-custom.navbar-fixed-top').css({
            backgroundColor: 'rgba(0, 0, 0, 0)',
            boxShadow: '0 0 0px rgba(14, 14, 14, 0)',
        });
        $('.navbar-brand.animated.pulse').css({
            display: 'none',
        });
        $('.navbar-toggle').addClass('navbar-toggles');
        $('.navbar').removeClass('navbar-customs');
        $('.navbar').removeClass('shadow');
        $('.navbar').removeClass('navbar-fixed-top');
    }else if(isPages('data-ishome')){



        //当向下滑动一定距离后
        $(document).scroll(function () {
            if ($(document).scrollTop() > 350) {
                $('.navbar-toggle').css({
                    background: 'rgba(0,0,0,0.1)',
                    borderRadius: '10%',
                    transition: 'all 0s'
                });
                $('.navbar.navbar-default.navbar-custom.navbar-fixed-top').css({
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    boxShadow: '0 0 0px rgba(14, 14, 14, 0)',
                });
                $('.navbar-brand.animated.pulse').css({
                    display: 'none',
                });
                $('.navbar-toggle').addClass('navbar-toggles');
                $('.navbar').removeClass('navbar-customs');
                $('.navbar').removeClass('shadow');
                $('.navbar').removeClass('navbar-fixed-top');
                // $('.navbar').addClass('lookc');

            } else {
                $('.navbar-toggle').css({
                    background: 'rgba(0,0,0,0)',
                    borderRadius: '0',
                });
                $('.navbar.navbar-default.navbar-custom.navbar-fixed-top').css({
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    boxShadow: '0 0 10px rgba(14, 14, 14, .26)',
                });
                $('.navbar-brand.animated.pulse').css({
                    display: 'block',
                });
                $('.navbar-toggle').removeClass('navbar-toggles');
                $('.navbar').addClass('navbar-customs');
                $('.navbar').addClass('shadow');
                $('.navbar').addClass('navbar-fixed-top');
                // $('.navbar').removeClass('lookc');

            }

        });
    }
}


(function () {
    var navTop = document.querySelector('#nav-top');
    navTop.ondblclick = function () {
        $('body').animate({
            scrollTop: 0
        }, 500)
    }
})();



//首页和标签云下下的a标签都绑定点击事件，跳转后在向下滑动一定的距离，20170324
(function(){
    $('#tag_cloud a').on('click',function(){
        setTimeout(function(){
            var top = $(document).scrollTop() - 60;
            $('body').animate({
                scrollTop: top
            }, 800)
        },100)
    })
})();

//从主页的标签云跳转到标签云里不会滚动，所以给页面（所有的）加上只要不是距离上边大于300就自动向下滑动60 20170324
(function(){
    setTimeout(function(){
        if($(document).scrollTop() > 200){
            var top = $(document).scrollTop() - 60;
            $('body').animate({
                scrollTop: top
            }, 1000)
        }
    })
})();

//滑块消失
$("#blog_navbar .nav").on("mouseleave", function() {
    $(".nav-fly").stop().animate({
        width: 0
    }, 300)
})
//滑块移动
$("#blog_navbar .nav li").on("mouseenter", function() {

    $index2 = $(this).index();
    if($index2 > 4) {
        return
    }
    //上一个的宽
    $width = parseInt($("#blog_navbar .nav li").eq($index2).css("width"));

    $left = $(this).position().left;
    $(".nav-fly").stop().animate({
        width: $(this).css("width"),
        left: $left + "px"
    }, 300)
})

//背景色选择
$('#bgc').on('mouseenter',function () {
    $('#bgc ul').stop().animate({
        height: '300%',
    },500)
})




//初次加载，暂未启用loadAudio要注释掉，否则会报错
// (function(){
//音乐播放
    function loadAudio(src, callback) {
        var audio = new Audio(src);
        audio.onloadedmetadata = callback;
        audio.src = src;

    }

    //首页
    var indexplay = true;
    var indexaudio = document.getElementById('indexaudio');
    var srcm1 = $('#indexaudio').attr("src");

    // loadAudio(srcm1,function(){
    //     console.log('加载完成，开始播放');
    //     $('.hdani').addClass('centerz')
    //     indexaudio.play();
    // })


    //首页点击开始或者暂停

    $('.musicbox').on('click',function(){
        if(indexplay){
            indexaudio.pause();
            $('.musicbox .pause').css({
                display: 'none'
            })
            $('.musicbox .play').css({
                display: 'block'
            })
            $('.hdani').addClass('centerz-paused')
            $('.hdani').removeClass('centerz-running')

            indexplay = false;
        }else{
            indexaudio.play();
            $('.musicbox .pause').css({
                display: 'block'
            })
            $('.musicbox .play').css({
                display: 'none'
            })
            $('.hdani').addClass('centerz')
            $('.hdani').removeClass('centerz-paused')
            $('.hdani').addClass('centerz-running')

            indexplay = true;
        }



    })
//    首页结束

// })();


//全局倒计时函数
var en = 0;

$(function(){
    var times = 0;
    setInterval(function() {

        var nowTime = new Date().getTime();
        var tarTime = new Date("2021/5/2 20:00:00").getTime();
        var lastTime = new Date("2016/5/2 20:00:00").getTime();

        var disTime = Math.round((tarTime - nowTime) / 1000);
        var seconds = disTime % 60;
        var minutes = (disTime - seconds) / 60 % 60;
        var hours = (disTime - minutes * 60 - seconds) / 3600 % 24;
        var day = (disTime - hours * 3600 - minutes * 60 - seconds) / 86400;

        var disTime2 = Math.round((nowTime - lastTime) / 1000);
        var seconds2 = disTime2 % 60;
        var minutes2 = (disTime2 - seconds2) / 60 % 60;
        var hours2 = (disTime2 - minutes2 * 60 - seconds2) / 3600 % 24;
        var day2 = (disTime2 - hours2 * 3600 - minutes2 * 60 - seconds2) / 86400;

        if(times == 95 || times == 195){
            //加一个切换动画
            $(".titleouttimes").animate({
                height:'toggle'
            },400,function(){
                $(".titleouttimes").animate({
                    height:'toggle'
                },400);
            });


        }

        if(times < 100){
            if(en){
                $('.titleouttimes').html('In order to in heaven, Five years of effort');

            }else{
                $('.titleouttimes').html('为同在天堂的5年行程');

            }
        }else if(times < 201){
            if(en){
                $('.titleouttimes').html(day + " day " + "<span style='display: inline-block'>" + o(hours) + "</span>" + " h " + "<span style='display: inline-block'>" + o(minutes) + "</span>" + " min " + "<span style='display: inline-block'>" + o(seconds) + "</span>" + " s ");

            }else{
                $('.titleouttimes').html(day + " 天 " + "<span style='display: inline-block'>" + o(hours) + "</span>" + " 时 " + "<span style='display: inline-block'>" + o(minutes) + "</span>" + " 分 " + "<span style='display: inline-block'>" + o(seconds) + "</span>" + " 秒 ");

            }

        }else if(times > 201){
            times = 0;
        }
        times ++;


        $('.outtimes').html(day + " 天 " + "<span style='display: inline-block'>" + o(hours) + "</span>" + " 时 " + "<span style='display: inline-block'>" + o(minutes) + "</span>" + " 分 " + "<span style='display: inline-block'>" + o(seconds) + "</span>" + " 秒 ");

        //正计时
        $('.lastTimeDay').html(day2 + "天");
        $('.lastTimeS').html(disTime2);


    }, 50)
});



//补0函数

function o(s) {
    return s < 10 ? '0' + s: s;
}

<!--canvas-->
//    <!-- 头像旋转圈 -->
var canvas=document.getElementById("title-canvas");
//在其他的页面没有就跳出
if(canvas) {
    var ctx = canvas.getContext("2d");

//    转圜
    function Arc(x, y, r, b, o, w, dsp, colors) {
        var dsp = dsp / 100;
        var timestop = 230;
        this.time = timestop;
        this.timestop = timestop;

        this.x = x;
        this.y = y;
        this.r = r;
        this.abegin = b;
        this.aover = o;
        this.width = w;
        this.dsp = dsp.toFixed(2);
        this.color = colors;
        this.long = this.aover - this.abegin;
    }

    Arc.prototype.drawArc = function () {

        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.width;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.abegin * Math.PI, this.aover * Math.PI);
        ctx.stroke();
    }
    var m = false;
    Arc.prototype.move = function () {

        if (this.abegin <= 2) {
            this.abegin = parseFloat(this.abegin) + parseFloat(this.dsp);
            this.aover = parseFloat(this.aover) + parseFloat(this.dsp);
        } else if (this.abegin > 2) {
            this.timestop--;
            if (this.timestop < 0) {
                this.abegin = 0;
                this.aover = this.long;
                this.timestop = this.time;
            }

        }
    }

    var arcsLength = 4;
    var arrs = [];
    var arrb = [0.1, 0.6, 1.1, 1.6];
    var arro = [0.3, 0.8, 1.4, 1.7];
//速度1-5
    var asp = [1, 1.2, 1.8, 1.5];
//    var asp = [7,7.1,7.2,7.3];


    for (var i = 0; i < arcsLength; i++) {

        arcs = new Arc(120, 120, 95, arrb[i], arro[i], 16, asp[i], "#0085a1");
        arrs.push(arcs);
        arcs.drawArc();

    }

//    雪花
    var deg = Math.PI / 180;

    var canvasn = document.getElementById("header-canvas");
    var context = canvasn.getContext("2d");

    canvasn.width = window.innerWidth;

    canvasn.height = parseInt($('.bg-header').css('height'));


    function Arcn(x, y, r, sx, sy, colors, t) {
        this.t = t;
        this.ts = t;
        this.t2 = t*10;
        this.ts2 = t*10;
        this.x = x;
        this.y = y;
        this.r = r;
        this.speedX = sx / 100;
        this.speedY = sy / 100;
        this.color = colors;
    }

    Arcn.prototype.drawArc = function (i) {
        context.shadowBlur = 20;
        context.shadowColor = this.color;
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 360 * deg);
        context.fill();

    }

    Arcn.prototype.move = function (i) {
//        半径减小，重新定义速度
        this.t--;

        if (this.t < 0) {

            this.t = this.ts;
            if (this.r > 0.01) {
                this.r -= 0.01;

            } else {
                arrsn.splice(i, 1);
            }

        }



        this.t2--;

        if(this.t2 < 0){
            this.t2 = this.ts2;

            //随机正负
            var a = getRandom(1,10);
            //此处调整正负概率
            if(a > 4){
                this.speedX = (this.speedX * 100 - getRandom(1,10))/100;
                this.speedY = (this.speedY * 100 - getRandom(1,10))/100;

            }else{
                this.speedX = (this.speedX * 100 + getRandom(1,10))/100;
                this.speedY = (this.speedY * 100 + getRandom(1,10))/100;
            }

        }


        if (this.x > (canvasn.width - this.r) || this.x < this.r) {
            this.speedX = -this.speedX;
            //				this.speedX *= -1;

        }
        if (this.y > (canvasn.height - this.r) || this.y < this.r) {
            this.speedY = -this.speedY;
            //				this.speedY *= -1;

        }
        this.x += this.speedX;
        this.y += this.speedY;
    }
    var arcsLengthn = 0;//设置球的个数
    var timen = 300;

    if ($(window).width() < 768) {
        arcsLengthn = 16;//设置球的个数
        timen = 400;

    } else {
        arcsLengthn = 76;//设置球的个数
        timen = 200;
    }

    var arrsn = [];
    var arcsn = {};
    var arcsZn = {};

    var stop = null;
    var firstTime;

    var s = {
        minSpeed: 5,//设置最小速度
        speed: 90, //设置最大速度
        minSpeedy: 1,//设置最小速度
        speedy: 70, //设置最大速度
        minR: 5, //设置最小半径
        maxR: 12, //设置最大半径
    }

    function firstDraw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
//        for(var i=0;i<arcsLengthn;i++){
//
//            arcsn = new Arcn(getRandom(100,canvasn.width-60),getRandom(100,canvasn.height-60),getRandom(s.minR,s.maxR),getRandomS(-s.speed,s.speed),getRandomS(-s.speedy,s.speedy),getRanColor(0));
//            arrsn.push(arcsn);
//            arcsn.drawArc();
//        }
//        同源发出
        var ntime = setInterval(function () {
            if (arrsn.length < arcsLengthn) {
                arcsn = new Arcn(getRandom(canvasn.width / 2 - 60, canvasn.width / 2 + 60), getRandom(parseInt($('#title-canvas').offset().top) + 80, parseInt($('#title-canvas').offset().top) + 140), getRandom(s.minR, s.maxR), getRandomS(-s.speed, s.speed), getRandomS(-s.speedy, s.speedy), getRanColor(0), getRandomS(1, 4));
                arrsn.push(arcsn);
                arcsn.drawArc();
//                if(arrsn.length == arcsLengthn){
//                    clearInterval(ntime);
//                }
            } else {
                return;
            }

        }, timen)

    }

    firstDraw();


    ani();//开始运动

    function ani() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        context.clearRect(0, 0, canvasn.width, canvasn.height);


        for (var i = 0; i < arrs.length; i++) {
            arrs[i].drawArc(i);
            arrs[i].move(i);

        }

        for (var i = 0; i < arrsn.length; i++) {
            arrsn[i].drawArc();
            arrsn[i].move();
        }

        window.requestAnimationFrame(ani);
    }


//随机速度
    function getRandomS(min, max) {
        var speeds = Math.round(Math.random() * (max - min) + min);
        while (Math.abs(speeds) < s.minSpeedy) {
            speeds = Math.round(Math.random() * (max - min) + min);
        }
        return speeds;
    }

//随机数
    function getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

//随机色
    function getRanColor(x) {
        if (x == 0) {
            return 'rgba(255,255,255,0.6)';
        }
        if (x == 1) {
            return 'rgba(0,0,0,0.6)';
        }
        var ranColors = "rgba(" + getRandom(0, 250) + "," + getRandom(0, 250) + "," + getRandom(0, 250) + ",1)";
        return ranColors;
    }

}
console.log($('#massage-page').length);
//寄语页
if($('#massage-page').length > 0){
    en = 1;
//    寄语全部为英文
    $('.nav-li1').html('HOME');
    $('.nav-li2').html('ABOUT');
    $('.nav-li3').html('WORK');
    $('.nav-li4').html('TAGS');
    $('.nav-li5').html('MSG');
    var date=new Date;
    var year=date.getFullYear();

    $('.copyright.text-muted').html('Copyright © In order to in heaven, Five years of effort ' + year)

}else{
    en = 0;
}
