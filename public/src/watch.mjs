import { object_property_set } from "./object_property_set.mjs";
import { log } from "./log.mjs";
import { function_auto } from "./function_auto.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { folder_path_src } from "./folder_path_src.mjs";
import chokidar from "chokidar";
import { string_replace } from "./string_replace.mjs";
import { string_combine } from "./string_combine.mjs";
import { file_read } from "./file_read.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function watch() {
  let cache = {};
  let watcher = start();
  function start() {
    let result = chokidar.watch(folder_path_src()).on("all", on_watch);
    return result;
  }
  async function on_watch(event, path) {
    if (event === "change") {
      await watcher.close();
      path = string_replace(path, "\\", "/");
      path = string_combine("./", path);
      let before = await file_read(path);
      if (object_property_exists(cache, path)) {
        if (before === object_property_get(cache, path)) {
          return;
        }
      }
      log({
        path,
      });
      let funcion_name = function_path_to_name(path);
      await function_auto(funcion_name);
      let after = await file_read(path);
      object_property_set(cache, path, after);
      start();
    }
  }
}
