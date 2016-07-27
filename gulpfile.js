var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('serve', function(){
   browserSync.init({
       server: {
           baseDir: "./public"
       }
   });
   
   gulp.watch(["**/*.html","**/*.css","**/*.js"]).on("change",reload);
});

gulp.task('default', ['serve']);