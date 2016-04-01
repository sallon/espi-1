/**
 * Created by yubo on 16/3/7.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function(){
    return gulp.src('app/sass/*.scss')
        //.pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(gulp.dest('app/static/css/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'app/'
        },
    })
})
gulp.task('watch', function(){
    gulp.watch('app/sass/*.scss', ['browserSync','sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/static/js/*.js', browserSync.reload);
})
