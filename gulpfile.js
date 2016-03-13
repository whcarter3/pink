//Requires
var gulp 			= require('gulp');
var sass			= require('gulp-sass');
var sourcemaps 		= require('gulp-sourcemaps');
var autoprefixer	= require('gulp-autoprefixer');
var browserSync		= require('browser-sync').create();

//Variables
var input 					= './styles/scss/**/*.scss';
var output					= './styles/css';
var markup					= './**/*.+(html|php)';
var javascript				= './**/*.js';
var sassOptions 			= {
								errLogToConsole: true,
								outputStyle: 'expanded'
							};
var autoprefixerOptions		= {
								browsers: [
									'last 2 versions',
									'> 5%',
									'Firefox ESR'
								]
							};

//BrowserSync server then watch php/html/scss files for changes
gulp.task('serve', ['sass'], function(){
	//start BrowserSync server
	browserSync.init({
		proxy: 'localhost:8888'
	})

	//watch files for changes
	gulp.watch(input, ['sass'])
	gulp.watch(markup).on('change', browserSync.reload);
	gulp.watch(javascript).on('change', browserSync.reload);
})

//Sass Compiler
gulp.task('sass', function(){
	return gulp
		.src(input)
		.pipe(sourcemaps.init())
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(autoprefixer())
		.pipe(gulp.dest(output))
		.pipe(browserSync.stream());
});

//Default Gulp task
gulp.task('default', ['serve']);
