'use strict';

module.exports = function() {
  $.gulp.task('copy:phpLibs', function() {
    return $.gulp.src('./source/vendors/**/*.*')
      .pipe($.gulp.dest($.config.root + '/assets/vendors'));
  });
};
