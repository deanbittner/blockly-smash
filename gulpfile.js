var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

gulp.task('watch', function() {
    return watch('generators/**/*.js', function() {
        gulp.start('minify');
    });
});

gulp.task('minify',['concat'], function(){
    return gulp.src('./smash.js')
    .pipe(uglify())
    .pipe(rename('smash_compressed.js'))
    .pipe(gulp.dest('./'));
})


gulp.task('concat', function(){
    return gulp.src(['./blocks/*.js', './generators/*.js','./generators/*/*.js'])
    .pipe(concat('smash.js'))
    .pipe(gulp.dest('./'));
})
