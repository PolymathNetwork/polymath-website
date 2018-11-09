// include gulp
var gulp = require("gulp");
//jshint
var jshint = require("gulp-jshint");
var changed = require("gulp-changed");
//imgs
var imagemin = require("gulp-imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
var minifyHTML = require("gulp-minify-html");
// js files
var concat = require("gulp-concat");
var stripDebug = require("gulp-strip-debug");
var uglify = require("gulp-uglify");
// css files
var autoprefix = require("gulp-autoprefixer");
var cleanCSS = require("gulp-clean-css");

var browserSync = require("browser-sync").create();
var htmlreplace = require("gulp-html-replace");

var postcss = require("gulp-postcss");
var uncss = require("postcss-uncss");

const purgecss = require("gulp-purgecss");

const webp = require("gulp-webp");
var gzip = require("gulp-gzip");

var csso = require("gulp-csso");
purge = require("gulp-css-purge");

var runSequence = require("run-sequence");

// JS hint task
gulp.task("jshint", function() {
  gulp
    .src("./src/scripts/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"));
});

// minify new images
gulp.task("imagemin", function() {
  var imgSrc = "./assets/images/**/*",
    imgDst = "./dist/assets/images";

  gulp
    .src(imgSrc)
    // .pipe(webp())
    // .pipe(changed(imgDst))
    .pipe(
      imagemin([
        imageminMozjpeg({
          quality: 50
        })
      ])
    )
    .pipe(gulp.dest(imgDst));
});

// minify new or changed HTML pages
gulp.task("clean-html", function() {
  var htmlSrc = "*.html",
    htmlDst = "./dist";

  gulp
    .src(htmlSrc)
    // .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    // .pipe(gzip({ append: false }))
    .pipe(gulp.dest(htmlDst));
});

// CSS concat, auto-prefix and minify
gulp.task("clean-css", function() {
  var plugins = [
    uncss({
      html: ["*.html"]
    })
  ];
  return (
    gulp
      .src([
        "./assets/css/bootstrap.min.css",
        // "./assets/css/theme-vendors.css",
        "./assets/css/theme.min.css",
        "./assets/css/theme-color/theme-centro.css",
        "./assets/css/lity.min.css",
        "./assets/css/style.css"
      ])
      //
      .pipe(concat("compiled.min.css"))
      // .pipe(postcss(plugins))
      // .pipe(purgecss({ content: ["*.html"] }))
      // .pipe(gzip({ append: false }))
      // .pipe(purge())
      // .pipe(cleanCSS())
      // .pipe(csso())
      .pipe(gulp.dest("dist/assets/css"))
  );
});

// JS concat, strip debugging and minify
gulp.task("clean-js", function() {
  gulp
    .src(["./assets/js/*.js", "./assets/js/*.min.js"])
    .pipe(concat("compiled.min.js"))
    // .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest("dist/assets/js/"));
});

gulp.task("renameSources", function() {
  return gulp
    .src(["index.html"])
    .pipe(
      htmlreplace({
        // js: "assets/js/compiled.min.js",
        css: "assets/css/compiled.min.css"
      })
    )
    .pipe(gulp.dest("dist/"));
});

gulp.task("serve", ["imagemin", "clean-css"], function() {
  browserSync.init({
    server: "./"
  });

  gulp.watch("assets/css/**/*.scss", ["watchFiles"]);
  gulp.watch(["*.html"]).on("change", browserSync.reload);
  // gulp.start("renameSources");
});

// default gulp task
gulp.task(
  "default",
  ["imagemin", "clean-css", "clean-html", "clean-js", "renameSources"],
  function() {
    // gulp.start("renameSources");
  }
);

gulp.task("dist", function(callback) {
  runSequence(
    // "imagemin",
    "clean-css",
    "clean-html",
    "clean-js",
    "renameSources",
    callback
  );
});
