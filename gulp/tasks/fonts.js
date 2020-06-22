const gulp = require('gulp')

module.exports = function fonts() {
  return gulp.src('src/fonts/**/*.{ttf,woff}')
    .pipe(gulp.dest('build/fonts/'))
}
