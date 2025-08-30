import webp from "gulp-webp";

export const webpImages = () => {
  return app.gulp
    .src([`${app.paths.srcImgFolder}/**/*.{jpg,jpeg,png}`], {
      encoding: false,
    })
    .pipe(
      newer({
        dest: app.paths.buildImgFolder,
        ext: ".webp",
      })
    )
    .pipe(
      webp({
        quality: 90,
      })
    )
    .pipe(app.gulp.dest(app.paths.buildImgFolder));
};
// export const webpImages = () => {
//   return app.gulp
//     .src([`${app.paths.srcImgFolder}/**/*.{jpg,jpeg,png}`], { encoding: false })
//     .pipe(webp())
//     .pipe(app.gulp.dest(app.paths.buildImgFolder));
// };
