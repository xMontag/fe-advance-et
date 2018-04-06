var gulp = require('gulp');

gulp.task('TS', function(){
   return gulp.src('./A/**/*.ts')
    .pipe(gulp.dest('./B'));
});

gulp.task('watch:ts', function(){
    gulp.watch('./A/**/*.ts',['TS']);
});
