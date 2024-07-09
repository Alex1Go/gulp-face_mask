import ghPages from "gulp-gh-pages";
import { paths } from "../config/paths";

export const ghPage = () => {
  return app.gulp.src(["*.html"]).pipe(gulp.dest(paths.scripts.dest));
};
