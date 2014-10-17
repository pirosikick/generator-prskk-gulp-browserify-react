var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var $ = require('gulp-load-plugins')();

gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: ['./app', './.tmp']
    }
  })
});

gulp.task('browserSyncReload', function () {
  browserSync.reload();
});

gulp.task('browserify', function () {
  return browserify({ extensions: ['.jsx'] })
    .add('./src/app.jsx')
    .transform('reactify', { harmony: true })
    .bundle()
    .on('error', function (err) {
      console.log(err.message);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./.tmp/scripts'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('styles', function () {
  var pleeeaseOption = {
    autoprefixer: { browsers: ["last 1 version"] }
  };

  gulp.src('app/styles/**/*.scss')
    .pipe($.plumber())
    .pipe($.sass())
    .pipe($.pleeease(pleeeaseOption))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('default', ['styles', 'browserify', 'browserSync'], function () {
  gulp.watch([
      './app/*.html'
    , './app/**/*.js'
    ], [
      'browserSyncReload'
    ]);

  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('src/**/*.{js,jsx}', ['browserify'])
});
