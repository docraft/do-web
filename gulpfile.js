'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var connect = require('gulp-connect');


// sass
gulp.task('sass', function(){
    return gulp.src('src/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
});

// pug
gulp.task('pug', function(){
    return gulp.src('src/html/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist/html'))
});

// server
gulp.task('run', function(){
    connect.server({
        livereload: true
    });
});

// default
gulp.task('default', ['sass', 'pug']);