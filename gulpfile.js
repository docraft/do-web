'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var connect = require('gulp-connect');
var sync = require('browser-sync').create();


// sass
gulp.task('sass', function(){
    return gulp.src('webroot/src/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('webroot/dist/css'))
});

// pug
gulp.task('pug', function(){
    return gulp.src('webroot/src/html/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('webroot/dist/html'))
});

// sync
gulp.task('sync', function(){
    sync.init({
        server: {
            baseDir: "./"
        }
    });
});

// server
gulp.task('server', function(){
    connect.server({
        livereload: true
    });
});

// default
gulp.task('default', ['sass', 'pug']);