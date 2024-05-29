import { log } from "./log.mjs";
import { function_auto } from "./function_auto.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { folder_path_src } from "./folder_path_src.mjs";
import chokidar from "chokidar";
import { string_replace } from "./string_replace.mjs";
import { string_combine } from "./string_combine.mjs";
export async function watch() {
  chokidar.watch(folder_path_src()).on("all", async (event, path) => {
    if (event === "change") {
      path = string_replace(path, "\\", "/");
      path = string_combine("./", path);
      log({
        path,
      });
      let funcion_name = function_path_to_name(path);
      await function_auto(funcion_name);
    }
  });
}
