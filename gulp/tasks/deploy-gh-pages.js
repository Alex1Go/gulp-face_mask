import gulp from "gulp";
import ghPages from "gulp-gh-pages";
import plumber from "gulp-plumber";
import notify from "gulp-notify";

// Задача для деплоя на GitHub Pages
export const deployGhPages = () => {
  return gulp
    .src(`${app.paths.base.build}/**/*`)
    .pipe(
      plumber(
        notify.onError({
          title: "DEPLOY",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(ghPages());
};
