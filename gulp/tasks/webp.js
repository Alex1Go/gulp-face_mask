import webp from "gulp-webp";

// export const webpImages = () => {
//   return app.gulp
//     .src([`${app.paths.srcImgFolder}/**/*.{jpg,jpeg,png}`], { encoding: false })
//     .pipe(webp())
//     .pipe(app.gulp.dest(app.paths.buildImgFolder));
// };

// Генерация webp-изображений
export const webpImages = () => {
  return app.gulp
    .src([`${app.paths.srcImgFolder}/**/*.{jpg,jpeg,png}`], { encoding: false })
    .pipe(webp())
    .pipe(app.gulp.dest(app.paths.buildImgFolder));
};
