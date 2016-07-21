'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('./assets/scss/materialize.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./assets/css'));
})

gulp.task('fonts', function() {
	return gulp.src('node_modules/materialize-css/dist/font/**')
	.pipe(gulp.dest('./assets/scss/font'));
})