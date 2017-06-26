/**
 * Created by Duyangsir on 2017/6/6.
 */
var gulp = require('gulp');
var less = require('gulp-less');

var Asset = {
    js: 'src/*.js',
    less: 'index/css/*.less',
    static: [
        'src/*.html',
        'src/*.css',
        'src/*.png',
        'src/*.gif',
        'src/*.json',
    ]
};

gulp.task('hello', function () {
    console.log('您好，测试');
});

//编译less
gulp.task('l',function(){
    return gulp.src('css/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});

gulp.task('default',['less']);




// 监听less
gulp.task('w', ['less'], function () {
    console.log('您好，测试');
    gulp.watch(Asset.less, ['less']);
});
//压缩js css最后


// // 在项目的根目录新建gulpfile.js，require需要的module
// // var gulp = require('gulp'),
//     minifycss = require('gulp-minify-css'),
//     concat = require('gulp-concat'),
//     uglify = require('gulp-uglify'),
//     rename = require('gulp-rename'),
//     del = require('del');
// // 4
// // 压缩css
// gulp.task('minifycss', function() {
//     return gulp.src('index/css/*.css')      //压缩的文件
//         .pipe(gulp.dest('index/css'))   //输出文件夹
//         .pipe(minifycss());   //执行压缩
// });
// // 5
// // 压缩js
// gulp.task('minifyjs', function() {
//     return gulp.src('index/js/*.js')
//         // .pipe(concat('main.js'))    //合并所有js到main.js
//         // .pipe(gulp.dest('index/js'))    //输出main.js到文件夹
//         .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
//         .pipe(uglify())    //压缩
//         .pipe(gulp.dest('index/js'));  //输出
// });
// // 6
// // 执行压缩前，先删除文件夹里的内容
// gulp.task('clean', function(cb) {
//     // del(['minified/css', 'minified/js'], cb)
// });
// // 7
// // 默认命令，在cmd中输入gulp后，执行的就是这个命令
// gulp.task('default', ['clean'], function() {
//     gulp.start('minifycss', 'minifyjs');
// });
