import path from 'path';
import browserSync from 'browser-sync';
import gulp from 'gulp';

const config = {
  assetsPath: path.resolve('./assets')  
};

const bs = browserSync.create();
const { reload } = browserSync;

gulp.task('serve', () => (
  bs.init({
    server: {
      baseDir: config.assetsPath,
      https: true,
    },
  })
));

