// import gulpif from "gulp-if";
// import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";
// import newer from "gulp-newer";

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
import gulpif from "gulp-if";
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";
import newer from "gulp-newer";

// Копирование и оптимизация изображений (jpg, jpeg, png, svg)
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
