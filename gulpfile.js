var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsproject = ts.createProject('tsconfig.json');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var gutil = require("gulp-util");
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');

var paths = {
    pages:[
        "src/*.html"
    ]
}
gulp.task('copy-html', function() {
    return gulp.src(paths.pages)
    .pipe(gulp.dest('dist'));
});

var watchBrowserify = watchify(browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
}).plugin(tsify));

function bundle() {
    return watchBrowserify
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
}
gulp.task('default', ['copy-html'], bundle);
watchBrowserify.on("update", bundle);
watchBrowserify.on("log", gutil.log);
// gulp.task('default', function() {
//     return tsproject.src()
//     .pipe(tsproject())
//     .js.pipe(gulp.dest('dist'));
// });