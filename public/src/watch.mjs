import { error } from "./error.mjs";
import { log } from "./log.mjs";
import chokidar from "chokidar";
export function watch() {
  var watcher = chokidar.watch("file or dir", {
    ignored: /^\./,
    persistent: true,
  });
  watcher
    .on("add", function (path) {
      console.log("File", path, "has been added");
    })
    .on("change", function (path) {
      console.log("File", path, "has been changed");
    })
    .on("unlink", function (path) {
      console.log("File", path, "has been removed");
    })
    .on("error", function (error) {
      console.error("Error happened", error);
    });
}
