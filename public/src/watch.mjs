import { folder_path_src } from "./folder_path_src.mjs";
import { log } from "./log.mjs";
import chokidar from "chokidar";
export function watch() {
  chokidar.watch(folder_path_src()).on("all", (event, path) => {
    console.log(event, path);
  });
}
