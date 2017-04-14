#!/usr/bin/env node
const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');

// Static server
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: {
      basDir: './'
    }
  });

  gulp.watch('lib/sass/*.sass', ['sass']);
  gulp.watch('lib/js/*.js').on('change', browserSync.reload);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

// Compile sass into css & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src('lib/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('lib/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
