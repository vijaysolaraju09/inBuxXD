const gulp=require('gulp');
const sass=require('gulp-sass')(require('sass'));
const minify=require('gulp-minify');
const browsersync=require('browser-sync').create();

function style(){
  return gulp.src('./app/scss/styles.scss')
  .pipe(sass())
  .pipe(gulp.dest('./app/css'))
  .pipe(browsersync.stream());
}

function watch(){
    browsersync.init({
                server:{
                   baseDir:'./app'
                }
    });
    gulp.watch('./app/scss/**/*.scss',style);
    gulp.watch('./app/*.html').on('change',browsersync.reload);
    gulp.watch('./app/js/**/*.js').on('change',browsersync.reload);
}

exports.style=style;
exports.watch=watch;