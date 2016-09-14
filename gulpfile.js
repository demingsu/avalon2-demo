
/*concat=require('gulp-concat'),//文件合并
 minifyCss=require('gulp-minify-css'),//css压缩
 rev=require('gulp-rev-append'), // 给URL自动加上版本号*/
//css处理任务
/*gulp.task('mini-css',function(){
    gulp.src(['./css/!*.css','!./css/bootstrap/!*.css'])
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/css/'));
});*/
//js处理任务
/*gulp.task('mini-js',function(){
    gulp.src(['./javascripts/modules/!*!/!*.js'])
        .pipe(uglify({
            //mangle: true,//类型：Boolean 默认：true 是否修改变量名
            mangle: false
        }))
        .pipe(gulp.dest('./dist/javascripts/modules/'));
});*/
//images处理
/*gulp.task('images',function(){
    return gulp.src(['./images/!**!/!*.png','./images/!**!/!*.ico'])
        .pipe(gulp.dest('./dist/images/'));
});
//路径替换任务
gulp.task('rev',function(){
    gulp.src('./!*.html')
        .pipe(rev())
        .pipe(gulp.dest('./dist'));
});
gulp.task('compassCase',function(){
    gulp.src('./templates/compassCase/!*.html')
        .pipe(rev())
        .pipe(gulp.dest('./dist/templates/compassCase/'));
});
gulp.task('compassIntroduce',function(){
    gulp.src('./templates/compassIntroduce/!*.html')
        .pipe(rev())
        .pipe(gulp.dest('./dist/templates/compassIntroduce/'));
});
//html拷贝
gulp.task('htmlCopy',function () {
    return gulp.src(['./templates/!*!/!*.html','!./templates/compassCase/!*.html','!./templates/compassIntroduce/!*.html'])
        .pipe(gulp.dest('./dist/templates/'));
});
//css拷贝
gulp.task('cssCopy',function () {
    return gulp.src(['./css/bootstrap/!*'])
        .pipe(gulp.dest('./dist/css/bootstrap/'));
});
//core js拷贝
gulp.task('jsCopy',function () {
    return gulp.src(['./javascripts/core/!**!/!*.js'])
        .pipe(gulp.dest('./dist/javascripts/core/'));
});
//modules js拷贝
gulp.task('modulesCopy',function () {
    return gulp.src(['./javascripts/modules/!**!/!*.js'])
        .pipe(gulp.dest('./dist/javascripts/modules/'));
});
//mock拷贝
gulp.task('mockCopy',function () {
    return gulp.src(['./mokeData/!**!/!*.json'])
        .pipe(gulp.dest('./dist/mokeData/'));
});*/
var gulp=require('gulp'),
    uglify=require('gulp-uglify'),
    minifyCss=require('gulp-minify-css'),
    clean=require('gulp-clean');

gulp.task('clean', function() {
    gulp.src(['./dist'], {read: false})
        .pipe(clean());
});
gulp.task('main-js',function(){
    gulp.src(['./javascripts/core/main/*.js'])
        .pipe(uglify({
            //mangle: true,//类型：Boolean 默认：true 是否修改变量名
            mangle: false
        }))
        .pipe(gulp.dest('./dist/'));
});
gulp.task('mini-css',function(){
    gulp.src(['./styles/bootstrap.css'])
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/css/'));
});
gulp.task('default',['clean','main-js','mini-css']);