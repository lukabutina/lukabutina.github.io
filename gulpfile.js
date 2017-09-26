var gulp = require( 'gulp' );
var plumber = require( 'gulp-plumber' );
var sass = require( 'gulp-sass' );
var watch = require( 'gulp-watch' );
var rename = require( 'gulp-rename' );
var merge = require( 'gulp-merge' );
var sourcemaps = require( 'gulp-sourcemaps' );
var cleanCSS = require( 'gulp-clean-css' );
var clone = require( 'gulp-clone' );
var cssnano = require( 'gulp-cssnano' );
var minify = require( 'gulp-minify' );
var concat = require( 'gulp-concat' );
var del = require( 'del' );

gulp.task('watch', function () {
  gulp.watch( './scss/*.scss', [ 'sass' ] );

});

gulp.task( 'sass', function() {
  del( [ './css/*', ] );
  var stream = gulp.src( './scss/main.scss' )
    .pipe( plumber() )
    .pipe( sourcemaps.init() )
    .pipe( sass() )
    .pipe( sourcemaps.write( './' ) )
    .pipe( gulp.dest( './css' ) )
  return stream;
} );


gulp.task('default', ['watch']); 
