import ghPages from "gulp-gh-pages";
import { paths } from "../config/paths";

export const ghPages = () => {
  return app.gulp.src(["*.html"]).pipe(gulp.dest(paths.scripts.dest));
};
