'use strict';

module.exports = function() {
  $.gulp.task('copy:files', function() {
    return $.gulp.src('./source/dist/*.*', { since: $.gulp.lastRun('copy:files') })
      .pipe($.gulp.dest($.config.root + '/assets/dist'));
  });
};
