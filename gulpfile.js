var gulp     = require( 'gulp' );
// Our plugins
var jshint = require('gulp-jshint');
var open     = require( 'gulp-open' );
//concate and uglify scripts
var sass     = require( 'gulp-sass' );
var cleanCSS = require( 'gulp-clean-css' );
var uglify   = require( 'gulp-uglify' );
var concat   = require('gulp-concat');
var plumber = require('gulp-plumber'); // prevent gulp from stopping because of errors
var sourcemaps = require('gulp-sourcemaps'); // add sourcemaps for CSS and JS
var autoprefixer = require('gulp-autoprefixer');
var newer = require('gulp-newer'); //only newer
var runSequence = require('run-sequence');





gulp.task( 'test', function() {
  return gulp.src( 'test/SpecRunner.html' )
    .pipe( open() );
});

gulp.task( 'html', function() {
  return gulp.src( 'working/*.html' )
    .pipe( gulp.dest( 'final/' ) );
});

gulp.task( 'image', function() {
  return gulp.src( 'working/assets/**' )
  .pipe(newer('final/assets/'))
  .pipe(gulp.dest('final/assets/'));
});

// Compile SASS
gulp.task( 'sass', function() {
  return gulp.src( 'working/sass/style.sass' )
    .pipe(sourcemaps.init())
    .pipe( sass() )
    .pipe( gulp.dest( 'final/' ) );
});

gulp.task( 'build:sass', function() {
  return gulp.src( 'working/sass/style.sass' )
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(autoprefixer())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('final/'));
});

//Compile JS
gulp.task('scripts', function() {
  return gulp.src(['working/js/jquery.js', 'working/js/jquery-ui.min.js', 'working/js/jquery.ui.touch-punch.min.js', 'working/js/video.js', 'working/js/videojs-replay.min.js', 'working/js/*.js', 'working/js/interaction.js'])
    .pipe(sourcemaps.init())
                .pipe(concat('default.js')) //the name of the resulting file
                .pipe(uglify())
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest('final/')) //the destination folder
});

gulp.task( 'default', [ 'sass', 'scripts', 'html', 'image' ] );

gulp.task( 'watch', function() {
  gulp.watch( [ 'working/sass/*.sass', 'working/js/*.js', 'working/*.html', 'working/assets/*.svg', 'working/assets/**' ], [ 'default' ] );
});

gulp.task( 'build:final', [ 'build:sass', 'html', 'image', 'scripts' ] );

