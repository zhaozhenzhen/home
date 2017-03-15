var gulp=require("gulp"),
    scss=require('gulp-scss'),//压缩scss
    server=require('gulp-webserver');//监听文件
//压缩scss
    gulp.task("scss",function(){
        gulp.src("./scss/style.scss")
            .pipe(scss())
            .pipe(gulp.dest('./lib/css'))
    });
//更新文件
    gulp.task("server",['start'],function(){
        gulp.src("./")
            .pipe(server({
                open: true,
                livereload: true,
                port:8989,
                directoryListing: true

            }))
    });
//监听文件
    gulp.task("start",function(){
        gulp.watch("./scss/*.scss",['scss']);
        gulp.watch("index.html")
    });