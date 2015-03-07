var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var watchify = require('watchify');

var bundler = watchify(browserify('./src/js/main.js', watchify.args));

bundler.transform('brfs');
bundler.on('update', bundle);

gulp.task('js', bundle);
gulp.task('default', ['js']);

function logError(e) {
    console.log(e.toString());
}

function bundle() {
    console.log('Bundling');
    return bundler.bundle()
        .on('error', logError)
        .pipe(source('calendar.js'))
        .pipe(gulp.dest('./public/js/'));
}
