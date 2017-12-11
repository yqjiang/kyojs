var gulp = require('gulp'),
plumber = require('gulp-plumber'),
babel = require('gulp-babel'),
webpack = require("gulp-webpack");
gulp.task('build', function() {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      "presets": ["es2015"]
    }
    ))
    .pipe(gulp.dest('build/'))
    .pipe(webpack({
      output:{
        filename:"index.js",
      },
      stats:{
        colors:true
      }
    }))
    .pipe(gulp.dest('dist/'));
});
