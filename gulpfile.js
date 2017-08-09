'use strict'

const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const del = require('del');
const minifyCSS = require('gulp-minify-css');

// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task('minifyJs', function() {
    // 1. 找到文件
    gulp.src('dist/**/*.js')
    // 2. 压缩文件
        .pipe(uglify())
        // 3. 另存压缩后的文件
        .pipe(gulp.dest('res/'))
});

gulp.task('cp-files', function () {
    gulp.src('dist/index.html').pipe(gulp.dest('res/'));
});

// 压缩 css 文件
// 在命令行使用 gulp css 启动此任务
gulp.task('minifyCss', function () {
    gulp.src('dist/**/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('res/'))
});

gulp.task('build', ['minifyJs', 'minifyCss', 'cp-files']);