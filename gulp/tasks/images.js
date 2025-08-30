import gulpif from "gulp-if";
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";
import newer from "gulp-newer";
import webp from "gulp-webp";

export const images = () => {
  return app.gulp
    .src([`${app.paths.srcImgFolder}/**/*.{jpg,jpeg,png,svg}`], {
      encoding: false,
    })
    .pipe(newer(app.paths.buildImgFolder))
    .pipe(
      gulpif(
        app.isProd,
        imagemin([
          gifsicle({ interlaced: true }),
          mozjpeg({ quality: 90, progressive: true }),
          optipng({ optimizationLevel: 1 }),
          svgo(),
        ])
      )
    )
    .pipe(app.gulp.dest(app.paths.buildImgFolder));
};

export const webpImages = () => {
  return app.gulp
    .src([`${app.paths.srcImgFolder}/**/*.{jpg,jpeg,png}`], { encoding: false })
    .pipe(webp())
    .pipe(app.gulp.dest(app.paths.buildImgFolder));
};
// export const images = () => {
//   return app.gulp
//     .src([`${app.paths.srcImgFolder}/**/*.{jpg,jpeg,png,svg}`], {
//       encoding: false,
//     })
//     .pipe(newer(app.paths.buildImgFolder))
//     .pipe(
//       gulpif(
//         app.isProd,
//         imagemin([
//           gifsicle({ interlaced: true }),
//           mozjpeg({ quality: 90, progressive: true }),
//           optipng({ optimizationLevel: 1 }),
//         ])
//       )
//     )
//     .pipe(app.gulp.dest(app.paths.buildImgFolder));
// };
