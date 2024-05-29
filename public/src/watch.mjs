import { function_path_to_name } from "./function_path_to_name.mjs";
import { folder_path_src } from "./folder_path_src.mjs";
import chokidar from "chokidar";
export function watch() {
  chokidar.watch(folder_path_src()).on("all", (event, path) => {
    if (event === "change") {
      let funcion_name = function_path_to_name(path);
    }
  });
}
