const gulp = require('gulp');

// Tasks
require('./gulp/dev.js');


// default (dev)
gulp.task('default', gulp.series(
  'clean:dev',
  gulp.parallel('pug:dev', 'sass:dev', 'images:dev', 'fonts:dev', 'files:dev', 'libs:dev', 'scripts:dev'),
  gulp.parallel('browser-sync:dev','watch:dev')
));
