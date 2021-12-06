var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify'); /// for minifying js
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');

gulp.task('sass', function() {
 return gulp.src('./sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./pages/css'))
        .pipe(browserSync.stream());

});

gulp.task('fonts', function () {
    // return gulp.src(['node_modules/@fortawesome/fontawesome-free/webfonts/*', '/fonts/*']) 
    // .pipe(gulp.dest(siteOutput + '/fonts/**/**.*'));
    return gulp.src('./fonts/**.*')
            .pipe(gulp.dest('./pages/fonts/'));
});

gulp.task('img', function () {
    return gulp.src('./images/**/*.+(png|jpg|gif|svg)')
            //.pipe(changed('./pages/images'))
            // .pipe(imagemin())
            .pipe(gulp.dest('./pages/images/'));
});

var jsFiles = [

    'node_modules/jquery/dist/jquery.min.js',
   // 'node_modules/popper.js/dist/umd/popper.min.js',
   // 'js/youtube-iframe-api.js',
   // 'node_modules/bootstrap/dist/js/bootstrap.min.js',
   // 'node_modules/simple-scrollbar/simple-scrollbar.min.js', //https://www.npmjs.com/package/simple-scrollbar   
    'node_modules/slick-carousel/slick/slick.min.js',
    //'js/scripts.js',
	//'node_modules/isotope-layout/dist/isotope.pkgd.min.js',
	//'js/jquery.js',
	//'js/slick.js',
	'js/main.js'
	
];

gulp.task('scripts', function () {
    return gulp.src(jsFiles)
            .pipe(concat({path: 'main.js'}))
            //pipe(rename(main.min.js)) 
            //.pipe(rename('main.js'))
            .pipe(uglify())
            .pipe(browserSync.reload({stream: true}))
            .pipe(gulp.dest('./pages/js/'));
});

gulp.task('serve', ['sass', 'fonts', 'img', 'scripts'], function() {
	
	browserSync.init({
		server: './pages/'
	});

	gulp.watch("./sass/**/*.scss", ['sass']);
	gulp.watch("./js/**/*.js", ['scripts']);
	gulp.watch("./pages/*.html").on('change', browserSync.reload);

});

gulp.task('default', ['serve']);

