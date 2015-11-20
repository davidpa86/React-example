var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var minifyCSS = require('gulp-minify-css');
var runSequence = require('run-sequence');
var react = require("gulp-react");

gulp.task("sass", function(){
  return  gulp.src("app/scss/*.scss")
          .pipe(sass())
          .pipe(gulp.dest("app/css"))
          .pipe(browserSync.reload({ // Compile sass into CSS & auto-inject into browsers
            stream: true
          }));
});

gulp.task('react', function () {
    return gulp.src('app/jsx/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({ // Compile jsx into js & auto-inject into browsers
          stream: true
        }));
});

gulp.task("browserSync", function() {
  browserSync({
    server: {
      baseDir: ["app"]
    },
  })
});

// Optimizing CSS and JavaScript
gulp.task('useref', function() {
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', minifyCSS()))
    // Uglifies only if it's a Javascript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('app/js'))
});

gulp.task("watch", ["browserSync", "sass"], function(){
    gulp.watch("app/scss/*.scss", ["sass"]);
    gulp.watch("app/jsx/*.jsx", ["react"]);

    gulp.watch("app/css/*.css").on('change', browserSync.reload);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/js/*.js").on('change', browserSync.reload);
});

gulp.task('default', function(callback) {
  runSequence(['sass', 'react', 'browserSync', 'watch'],
    callback
  )
})

gulp.task('build', function(callback) {
  runSequence(['sass', 'react', 'useref'],
    callback
  )
})
