var gulp = require('gulp'),
		gutil = require('gulp-util');

// HTML
gulp.task('html', function() {
	return gulp.src('index.html')
		.pipe(gulp.dest('build'));
});

// Scripts
gulp.task('scripts', function() {
	var browserify = require('gulp-browserify'),
			reactify = require('reactify'),
			rename = require('gulp-rename');

	return gulp.src('client/index.jsx')
		.pipe(browserify({
			debug: true,
			extensions: ['.jsx', '.js', '.json'],
			transform: [reactify]
		}))
		.on('error', function(err) {
			gutil.log(err.message)
		})
		.pipe(rename('client.js'))
		.pipe(gulp.dest('build/js'));
});

// Styles
gulp.task('styles', function() {
	var less = require('gulp-less');

	return gulp.src('less/rainflex.less')
		.pipe(less())
		.pipe(gulp.dest('build/css'));
});

gulp.task('images', function () {
	return gulp.src('img/**')
	.pipe(gulp.dest('build/img'));
});

gulp.task('fonts', function () {
	return gulp.src('font/**')
	.pipe(gulp.dest('build/font'));
});

// Webserver w/LiveReload
gulp.task('serve', ['default', 'watch'], function() {
	var express = require('express'),
			livereload = require('gulp-livereload'),
			watch = require('gulp-watch'),
			open = require('open');

	var port = process.env.PORT || 3000

	express()
		.use(express.static('./build'))
		.use(function(req, res) {
			res.sendfile('./build/index.html')
		})
		.listen(port, function() {
			open('http://localhost:' + port)
		});

		watch('build/**', {
			name: 'build'
		})
		.pipe(livereload());
});

// Watch
gulp.task('watch', function() {
	gulp.watch('index.html', ['html']),
	gulp.watch('client/**', ['scripts']),
	gulp.watch('less/**', ['styles'])
});

gulp.task('default', ['html', 'scripts', 'styles', 'images', 'fonts']);
