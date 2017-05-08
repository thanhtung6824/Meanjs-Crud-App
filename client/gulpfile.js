var gulp = require('gulp');
var $  = require('gulp-load-plugins')();
var bs =  require('browser-sync').create();
var config = require('./gulp.config')();
var historyApiFallback = require('connect-history-api-fallback');
var port  = process.env.PORT || 2912;
//compiling sass->css

gulp.task('styles',function() {
	console.log('Compiling Sass->Css');
	return gulp
			.src(config.scss)
			.pipe($.sass())
			.pipe($.plumber())
			.pipe($.autoprefixer({browsers: ['last 2 version','>5%']}))
			.pipe(gulp.dest(config.tmp))
			.pipe(bs.stream());

});	

//wiredep

gulp.task('wiredep',function() {
	var option = config.wiredep();
	var wiredep = require('wiredep').stream;
		return gulp
				.src(config.index)
				.pipe(wiredep(option))
				.pipe($.inject(gulp.src(config.css)))
				.pipe(gulp.dest(config.clientSrc))
});

//inject

gulp.task('inject',['wiredep'],function() {
		return gulp
				.src(config.index)
				.pipe($.inject(gulp.src(config.alljs)))
				.pipe(gulp.dest(config.clientSrc));
});

//browser-sync

gulp.task('bs',function() {
	 bs.init({
	 	open:false,
	 	port:2912,
	 	browser:"browser",
	 	server:{
	 		baseDir:[config.client, config.clientSrc],
	 		middleware:[ historyApiFallback({}) ]
	 	}

	 });
});

//serve

gulp.task('serve',['styles','inject','bs','wiredep'],function() {
		gulp.watch([config.scss],['styles']);
		gulp.watch([config.alljs]).on('change',bs.reload);
		gulp.watch([config.html]).on('change',bs.reload);
		console.log('Server listening on port : ' , port);
});