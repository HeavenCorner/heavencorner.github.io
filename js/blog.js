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
    // if($('.poetry-page').length > 0){return}

    document.addEventListener('scroll',function(){
    var currentTop = window.pageYOffset;

        // if($('.poetry-page').length > 0){
        //     currentTop > (scrollHeight||scrollTarget.clientHeight)
        //         ?scrollTarget.classList.add(toggleClass)
        //         :scrollTarget.classList.remove(toggleClass)
        // }else{
            currentTop > (scrollHeight||scrollTarget.clientHeight)
                ?scrollTarget.classList.add(toggleClass)
                :scrollTarget.classList.remove(toggleClass)
        // }



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
    if (isPages('data-ispost') && ($('.data-ispost-is').length > 0)){
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
});

//背景色选择
$('#bgc').on('mouseenter',function () {
    $('#bgc ul').stop().animate({
        height: '300%',
    },500)
});

//初次加载，暂未启用loadAudio要注释掉，否则会报错
// (function(){
//音乐播放
/*
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

*/

//全局无限循环定时器，需要变换的都写在这一个定时器里

//全局倒计时函数
var en = 0;
var msg = 0;
var wsn = 0;
var ws = 0;
var wsm = true;

var wsn2 = 0;
var ws2 = 100;
var wsm2 = true;

var wsn3 = 0;
var wsn3s = true;

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



        if(msg){
            $('.titleouttimes').html('In order to in heaven');
        }else{

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
                    if($('.titleouttimes').html() != '为同在天堂的5年行程'){ //减少dom操作
                        $('.titleouttimes').html('为同在天堂的5年行程');
                    }
                }
            }else if(times < 201){
                if(en){
                    // $('.titleouttimes').html(day + " day " + "<span style='display: inline-block'>" + o(hours) + "</span>" + " h " + "<span style='display: inline-block'>" + o(minutes) + "</span>" + " m " + "<span style='display: inline-block'>" + o(seconds) + "</span>" + " s ");
                }else{
                        $('.titleouttimes').html(day + " 天 " + "<span style='display: inline-block'>" + o(hours) + "</span>" + " 时 " + "<span style='display: inline-block'>" + o(minutes) + "</span>" + " 分 " + "<span style='display: inline-block'>" + o(seconds) + "</span>" + " 秒 ");
                }

            }else if(times > 201){
                times = 0;
            }
        }

        times ++;

        if(en){
            $('.outtimes').html(day + " day " + "<span style='display: inline-block'>" + o(hours) + "</span>" + " h " + "<span style='display: inline-block'>" + o(minutes) + "</span>" + " m " + "<span class='leftspan' style='display: inline-block'>" + o(seconds) + "</span>" + " s ");

        }else{
            $('.outtimes').html(day + " 天 " + "<span style='display: inline-block'>" + o(hours) + "</span>" + " 时 " + "<span style='display: inline-block'>" + o(minutes) + "</span>" + " 分 " + "<span style='display: inline-block'>" + o(seconds) + "</span>" + " 秒 ");

        }

        //正计时
        $('.lastTimeDay').html(day2 + "天");
        $('.lastTimeS').html(disTime2);
		//倒计时天
		$('.outtimesday').html(day + "天")

        //白色发光或者黑色阴影
        wsn ++;

        if(wsn % 2 == 0){

            if(ws > 20){
                wsm = false;
            }else if(ws < 0){
                wsm = true;
            }

            if(wsm){
                ws ++;
            }else{
                ws --;
            }


            $('.white-shadow-s-js').css({
                'box-shadow': '0px 0px ' + ws + 'px white'
            });

            $('.black-shadow-s-js').css({
                'box-shadow': '0px 0px ' + ws + 'px black'
            });

            if(wsn > 100){
                wsn = 0;
            }

        }

    //    背景自动放大

        wsn2 ++;

        if(wsn2 % 4 == 0){

            if(ws2 > 300){
                wsm2 = false;
            }else if(ws2 < 101){
                wsm2 = true;
            }

            if(wsm2){
                ws2 ++;
            }else{
                ws2 --;
            }


            // $('header.intro-header.index').css({
            //     'background-size': ws2 + '% ' + ws2 + '%',
            // });


            if(wsn2 > 500){
                wsn2 = 0;
            }

        }

        if(wsn3s){
            wsn3s = false;
            pathshancanvas();
        }

        //nms重新画一次闪电路径
        wsn3 ++;
        if(wsn3 % 400 == 0){
            $(".shan").remove();

                pathshancanvas();


            //删除移动数量的shan节点,大于某数量就开始一个个删除
            // if($('.shan').length > 30){
            //     console.log($('.shan').length);
            //
            //     $(".shan").eq(getRandom(0,30)).remove();
            //
            //     console.log($('.shan').length);
            //
            // }

            if(wsn3 > 400){
                wsn3 = 0;
            }
        }

    }, 50)
});



//补0函数

function o(s) {
    return s < 10 ? '0' + s: s;
}

//<!--canvas-->
var timen = 300; //设置产生球的速度
var arcsLengthn = 0; //设置球的个数
var s = {};

//    <!-- 头像旋转圈 -->
var canvas=document.getElementById("title-canvas");

//特效：鼠标移到头像上会出现红色球的标记位
var aboutred = false;
//仅pc可以
if($(window).width() > 768) {

	//白色
	$("#about-img").on("mouseleave", function() {
		timen = 150;
		arcsLengthn = 76;
		s.minSpeed = 5;
		s.speed = 90;

		//清空
		clearInterval(cotime);
		for(var i = 0; i < arrsn.length; i++) {
			arrsn[i].color = '#ffffff';
		}
		aboutred = false;
		$('#about-name').css('color', '#ffffff');

		//转圈
		for(var j = 0; j < 4; j++) {

			arrs[j].timestop = timestop;
			arrs[j].dsp = asp[j] / 100;
		}

	})
	//彩色
	var cotime = null;
	$("#about-img").on("mouseenter", function() {
		//提速
		timen = 10;
		//增加数量
		arcsLengthn = 200;
		s.minSpeed = 100;
		s.speed = 200;
		cotime = setInterval(function() {
			//      console.log(1);
			for(var i = 0; i < arrsn.length; i++) {
				arrsn[i].color = getRanColor();
			}
			$('#about-name').css('color', getRanColor());

		}, 100);

		//转圈
		for(var j = 0; j < 4; j++) {

			arrs[j].timestop = 'fast';
			arrs[j].dsp = asp2[j] / 20;
		}

		aboutred = true;

	});

}
//在其他的页面没有就跳出
if(canvas) {


    var ctx = canvas.getContext("2d");


//    转圜
    var timestop = 230;

    function Arc(x, y, r, b, o, w, dsp, colors) {
        var dsp = dsp / 100;
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

            if(this.timestop == "fast"){
                this.abegin = 0;
                this.aover = this.long;
                return;
            }

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
    var asp2 = [3, 2, 4, 5];


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
//半径减小，重新定义速度
        this.t--;

        if (this.t < 0) {

            this.t = this.ts;
            this.r = this.r * 100;
            if (this.r > 4) {
                this.r -= 2;

                this.r = this.r/100;
            } else if (this.r < 4){
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
//  var arcsLengthn = 0;//设置球的个数
//  timen = 300;

    if ($(window).width() < 768) {
        arcsLengthn = 16;//设置球的个数
        timen = 400;

    } else {
        arcsLengthn = 76;//设置球的个数
        timen = 150;
    }

    var arrsn = [];
    var arcsn = {};
    var arcsZn = {};

    var stop = null;
    var firstTime;

    s = {
        minSpeed: 5,//设置最小速度
        speed: 90, //设置最大速度
        minSpeedy: 1,//设置最小速度
        speedy: 70, //设置最大速度
        minR: 5, //设置最小半径
        maxR: 12, //设置最大半径
    }

    function firstDraw() {
        context.clearRect(0, 0, canvas.width, canvas.height);

//        同源发出
        var ntime = setInterval(function () {
            if (arrsn.length < arcsLengthn) {

                if(aboutred){
                    arcsn = new Arcn(getRandom(canvasn.width / 2 - 60, canvasn.width / 2 + 60), getRandom(parseInt($('#title-canvas').offset().top) + 80, parseInt($('#title-canvas').offset().top) + 140), getRandom(s.minR, s.maxR), getRandomS(-s.speed, s.speed), getRandomS(-s.speedy, s.speedy), getRanColor(), getRandomS(1, 6));

                }else{
                    arcsn = new Arcn(getRandom(canvasn.width / 2 - 60, canvasn.width / 2 + 60), getRandom(parseInt($('#title-canvas').offset().top) + 80, parseInt($('#title-canvas').offset().top) + 140), getRandom(s.minR, s.maxR), getRandomS(-s.speed, s.speed), getRandomS(-s.speedy, s.speedy), getRanColor(0), getRandomS(1, 6));
                }


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



}

//随机数
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//随机偶数
function getRandomO(min, max) {
    var n = Math.round(Math.random() * (max - min) + min);
    while (n % 2 != 0){
        n = Math.round(Math.random() * (max - min) + min);
    }
    return n;
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

// console.log($('#message-page').length);
//寄语页
if($('#message-page').length > 0){
    en = 1;
    msg = 1;
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

/*路径闪电*/

//画线和点的封装函数
var canvasOne = document.getElementById("path-canvas");
var arrlw = window.innerWidth;
var arrlh = parseInt($('#path-wrap').css('height'));
//放到全局定时器里
function pathshancanvas() {

    if (canvasOne) {



        canvasOne.width = arrlw;
        canvasOne.height = arrlh;

        var arrA3 = [];

        var slen = 6; //闪点数量

     


            for (var i = 0; i < slen; i++) {
            (function (i) {
                var arrAss = [];
                var x = parseInt(arrlw / slen);
                //每次生成1/n的区域x坐标,y坐标
                arrAss[0] = getRandom(arrlw/40 + (x * i), parseInt((arrlw) * i / slen + arrlw/30));
                arrAss[1] = getRandom(parseInt(20), parseInt(arrlh - 135));
                // arrAss[0] = getRandom(parseInt(40), parseInt(arrlw));
                // arrAss[1] = getRandom(parseInt(20), parseInt(arrlh));
                arrA3[i] = arrAss;


                // addShan(i,arrA3,"#path-wrap");
            })(i)
        }

        // var arrA3 = [[getRandom(parseInt(),parseInt()),146],[240,220],[240,870],[345,870],[345,1060]];
        var contextB = canvasOne.getContext("2d");

        contextB.clearRect(0, 0, arrlw, arrlh);
        // draws(contextB, arrA3, 4, false, false, false, "#path-wrap");

        setTimeout(function(){
            draws(contextB, arrA3, 4, 1, 1, 1, "#path-wrap");

        },300)


    }

}

function draws(obj,arrAll,seep,star,center,end,box){
    // console.log(arrAll);
    var drawTime = null;
    var num = arrAll.length-1;//循环次数
    var i=0;
    var bl = 1;
    var sx,sy,ex,ey;
    var xn,yn;
    var y = 2016;
    if(star){
        addShan(i,arrAll,box,y);
    }
    drawStar();
    function drawStar(){
        // console.log(arrAll);

        sx=arrAll[i][0];
        sy=arrAll[i][1];

        ex=arrAll[i+1][0];
        ey=arrAll[i+1][1];

        obj.lineWidth = 1;
        obj.strokeStyle = "white";
        //向上\下画

        if(ex-sx == 0){
            xn = 0;
            yn = (ey-sy)/Math.abs(ey-sy);
            //左\右
        }else if(ey-sy == 0){
            xn = (ex-sx)/Math.abs(ex-sx);
            yn = 0;
            //右下、左上、左下、右上
        }else {
            xn = (ex-sx)/Math.abs(ex-sx);
            yn = (ey-sy)/Math.abs(ey-sy);

            bl=Math.abs((ex-sx)/(ey-sy));// x/y
            // console.log(xn,yn,bl);
        }
    }
    // ani2();
    drawTime = setInterval(function(){
        // function ani2() {

            //beginPath()一定要放在内部，不然同时调用多个此函数会冲突
            obj.beginPath();
            obj.moveTo(sx, sy);
            //每次y画1像素，x轴就画1*x/y
            sx = sx + (xn * bl * seep);
            sy = sy + (yn * seep);
            //不是整数，需要二次判定，直上直下判断四种情况，斜着画判断四种情况
            if ((xn == 0 && ((yn == -1) && sy < ey || (yn == 1) && sy > ey)) || (yn == 0 && ((xn == -1) && sx < ex || (xn == 1) && sx > ex)) ||
                (xn != 0 && yn != 0) && ((yn == -1) && (sy < ey) || (yn == 1) && (sy > ey))) {
                num -= 1;
                i += 1;
                y += 1;
                if (num == 0) {
                	
                    if (end) {
                        addShan(i, arrAll, box,y);
                    }
                    clearInterval(drawTime);
                    return;
                }
                if (center) {
                    addShan(i, arrAll, box,y);
                }
                drawStar();
            }
//			console.log(sx,sy);
            obj.lineTo(sx, sy);
            obj.closePath();
            obj.stroke();
            // window.requestAnimationFrame(ani2);
        // }
    },60)
}
//添加一个闪烁点
function addShan(i,arrAll,box,y){
    //每次中间切换启动显示一个div闪烁点
    var r = getRandomO(7,16);//随机半径
    var divObj = $('<div class="shan black-shadow-s-js"><span>' + y + '</span></div>');
    $(box).append(divObj);
    divObj.css({
        "left":arrAll[i][0]-(r/2)+"px",
        "top":arrAll[i][1]-(r/2)+"px",
        "display":"block",
        "width": r + "px",
        "height": r + "px",
    })
}

//背景音乐，检测到小屏幕时不自动播放

//2017-04-24优化点击，如果用户点击进入主页之后再跳转到其它界面，
// 主页音乐持续播放，如果此时在其他页面再跳转到主页，不自动播放，防止重音

if($(window).width() < 768) {
//移动端不自动播放

//主页
$('#index-bgm iframe').attr('src','//music.163.com/outchain/player?type=2&id=29947420&auto=0&height=66');

//工作
$('#work-bgm iframe').attr('src','//music.163.com/outchain/player?type=2&id=437597650&auto=0&height=32');

}else if($(window).width() > 768){

    if(sessionStorage.getItem('indexmusic') == null ){
        //自动播放
        //主页
        $('#index-bgm iframe').attr('src','//music.163.com/outchain/player?type=2&id=29947420&auto=1&height=66');
        sessionStorage.indexmusic = 'play';

    }else if(sessionStorage.getItem('indexmusic') == 'play'){

        //主页
        $('#index-bgm iframe').attr('src','//music.163.com/outchain/player?type=2&id=29947420&auto=0&height=66');
        sessionStorage.indexmusic = 'play';

    }

    //工作
    $('#work-bgm iframe').attr('src','//music.163.com/outchain/player?type=2&id=437597650&auto=0&height=32');

}



//在work页面画路径图

//生成随机坐标，保证自适应



//animetion.css
function testAnim(x,obj) {
	
	var cn = $(obj).attr('class');
//	alert(cn)
	
	$(obj).addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		$(this).removeClass();
		$(this).addClass(cn);
	});
};

$(document).ready(function() {
	var a = 'flip';
	$('.triggerAnimation-1').mouseenter(function(e) {
		e.preventDefault();
		
		var anim = a;
		testAnim(anim,$('.triggerAnimation-1'));
	});
});


//<!--点击相应闪烁-->

$('.tags-c').on('click',function(){
	var ids = $(this).html().replace(/(^\s*)|(\s*$)/g, '');
	setTimeout(function(){
		testAnim('shake',$('#' + ids).parent());
	},600);
})
