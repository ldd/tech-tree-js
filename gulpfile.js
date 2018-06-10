var gulp = require("gulp"),
  gulpIf = require("gulp-if"),
  gulpCopy = require("gulp-copy");

var useref = require("gulp-useref"),
  uglify = require("gulp-uglify"),
  sourcemaps = require("gulp-sourcemaps"),
  lazypipe = require("lazypipe");

var webserver = require("gulp-webserver");

gulp.task("serve", function() {
  gulp.src(".").pipe(webserver({}));
});

gulp.task("useref", function() {
  return gulp
    .src("index.html")
    .pipe(
      useref(
        {},
        lazypipe().pipe(
          sourcemaps.init,
          { loadMaps: true }
        )
      )
    )
    .pipe(gulpIf("js/*.js", uglify()))
    .pipe(gulpIf("js/*.js", sourcemaps.write(".")))
    .pipe(gulp.dest("dist"));
});

gulp.task("copyImages", function() {
  return gulp.src(["images/**/*.png"]).pipe(gulpCopy("dist"));
});

gulp.task("default", ["copyImages", "useref"]);
