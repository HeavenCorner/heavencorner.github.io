/**
 * Created by Duyangsir on 2017/5/25.
 */
(function () {


    $('.modal-close-box-2').on('click',function(){
        testAnim('fadeOutUp',$('.modal-close-box-2'),'','none');
    })

    //宇宙特效
    var canvasbgcolor = "#ccc"

    "use strict";
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        w = canvas.width = window.innerWidth,
        h = canvas.height = window.innerHeight,

        hue = 217,
        stars = [],
        count = 0,
        maxStars = 1000;//星星数量

    var canvas2 = document.createElement('canvas'),
        ctx2 = canvas2.getContext('2d');
    canvas2.width = 100;
    canvas2.height = 100;
    var half = canvas2.width / 2,
        gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#CCC');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    // End cache



    //        获取时间
    var myDate = new Date();
    var nowHours = myDate.getHours();

//                nowHours = 23;

    var arrmsg = ['哈利路亚，早安~', '哈利路亚，上午好~', '哈利路亚，午安~',
        '哈利路亚，下午好~', '哈利路亚，晚上好~','哈利路亚，晚安~',
        '哈利路亚，深夜好~','哈利路亚，凌晨好~','哈利路亚，中午好~'];

    //1        =>5<=8   早安

    if((nowHours == 5 || nowHours > 5) && (nowHours == 8 || nowHours < 8) ){

        canvasbgcolor = '#E8E8E8';
        $('#msg-font').html(arrmsg[0]);

    }

    //2        >8<=11  上午好 关闭星空
    if((nowHours > 8) && (nowHours == 11 || nowHours < 11)) {

        $('#canvas').css({display: 'none'});

        $('#msg-font').html(arrmsg[1]);


    }



    //9            新加的  中午好

    if((nowHours > 11) && (nowHours == 12 || nowHours < 12)) {

        $('#canvas').css({display: 'none'});

        $('#msg-font').html(arrmsg[8]);


    }


    //3       >12<=13     午安
    if((nowHours > 12) && (nowHours == 13 || nowHours < 13)){
        $('#canvas').css({display: 'none'});

        $('#msg-font').html(arrmsg[2]);

    }

    //4        >14<=18     下午好
    if((nowHours > 13) && (nowHours == 18 || nowHours < 18)){
        $('#canvas').css({display: 'none'});

        $('#msg-font').html(arrmsg[3]);


    }

    //5        >18<=20   晚上好    背景变化启动canvas  深灰色


    if((nowHours > 18) && (nowHours == 20 || nowHours < 20)){

        canvasbgcolor = '#5b5b5b';

        $('#msg-font').html(arrmsg[4]);
        $('#msg-font').css({color:'#ffffff'});

        $('.p3d').css({opacity: '.9'})


    }

    //6        >20<23   晚安
    if((nowHours > 20) && (nowHours < 23)){

        canvasbgcolor = 'hsla(' + hue + ', 64%, 6%, 2)';

        $('#msg-font').html(arrmsg[5]);
        $('#msg-font').css({color:'#ffffff'});

        $('.p3d').css({opacity: '.6'})


    }

    //7        =23  深夜好
    if(nowHours == 23){
        canvasbgcolor = 'hsla(' + hue + ', 64%, 6%, 2)';

        $('#msg-font').html(arrmsg[6]);
        $('#msg-font').css({color:'#ffffff'});

        $('.p3d').css({opacity: '.6'})



    }

    //8        >=0<5  凌晨好


    if((nowHours == 0 || nowHours > 0) && (nowHours < 5)){

        canvasbgcolor = '#709DF2';


        $('#msg-font').html(arrmsg[7]);

        $('.p3d').css({opacity: '.7'})



    }




    function random(min, max) {
        if (arguments.length < 2) {
            max = min;
            min = 0;
        }

        if (min > max) {
            var hold = max;
            max = min;
            min = hold;
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x, y) {
        var max = Math.max(x, y),
            diameter = Math.round(Math.sqrt(max * max + max * max));
        return diameter / 2;
        //星星移动范围，值越大范围越小，
    }

    var Star = function() {

        this.orbitRadius = random(maxOrbit(w, h));
        this.radius = random(60, this.orbitRadius) / 8;
        //星星大小
        this.orbitX = w / 2;
        this.orbitY = h / 2;
        this.timePassed = random(0, maxStars);
        this.speed = random(this.orbitRadius) / 50000;
        //星星移动速度
        this.alpha = random(2, 10) / 10;

        count++;
        stars[count] = this;
    }

    Star.prototype.draw = function() {
        var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
            y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
            twinkle = random(10);

        if (twinkle === 1 && this.alpha > 0) {
            this.alpha -= 0.05;
        } else if (twinkle === 2 && this.alpha < 1) {
            this.alpha += 0.05;
        }

        ctx.globalAlpha = this.alpha;
        ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
        this.timePassed += this.speed;
    }

    for (var i = 0; i < maxStars; i++) {
        new Star();
    }

    function animation() {
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 0.5; //尾巴
//            ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
        ctx.fillStyle = canvasbgcolor;
//            ctx.fillStyle = '#709DF2'

        ctx.fillRect(0, 0, w, h)

        ctx.globalCompositeOperation = 'lighter';
        for (var i = 1, l = stars.length; i < l; i++) {
            stars[i].draw();
        };

        window.requestAnimationFrame(animation);
    }

    animation();


})();
