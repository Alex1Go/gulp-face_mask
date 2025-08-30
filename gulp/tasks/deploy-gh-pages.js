import gulp from "gulp";
import ghPages from "gulp-gh-pages";
import plumber from "gulp-plumber";
import notify from "gulp-notify";

export const deployGhPages = () => {
  return gulp
    .src(
      [`${app.paths.base.build}/**/*`, `!${app.paths.base.build}/**/*.map`],
      {
        encoding: false,
        dot: true,
        base: app.paths.base.build,
      }
    )
    .pipe(
      plumber(
        notify.onError({
          title: "DEPLOY",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      ghPages({
        branch: "gh-pages",
        force: true,
        message: "Update [timestamp]",
      })
    );
  // .src(`${app.paths.base.build}/**/*`, {
  //   encoding: false,
  //   dot: true,
  // })
  // .pipe(
  //   plumber(
  //     notify.onError({
  //       title: "DEPLOY",
  //       message: "Error: <%= error.message %>",
  //     })
  //   )
  // )
  // .pipe(
  //   ghPages({
  //     branch: "gh-pages",
  //     force: true,
  //   })
  // );
  // .src(`${app.paths.base.build}/**/*`)
  // .pipe(
  //   plumber(
  //     notify.onError({
  //       title: "DEPLOY",
  //       message: "Error: <%= error.message %>",
  //     })
  //   )
  // )
  // .pipe(ghPages());
};
