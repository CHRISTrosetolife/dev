import { log } from "./log.mjs";
import { object_property_delete } from "./object_property_delete.mjs";
import { function_auto } from "./function_auto.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { folder_path_src } from "./folder_path_src.mjs";
import chokidar from "chokidar";
import { string_replace } from "./string_replace.mjs";
import { string_combine } from "./string_combine.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function watch() {
  let watcher = start();
  function start() {
    return chokidar.watch(folder_path_src()).on("all", on_watch);
  }
  async function on_watch(event, path) {
    if (event === "change") {
      await watcher.close();
      log("start");
      path = string_replace(path, "\\", "/");
      path = string_combine("./", path);
      object_property_set(processing, path, true);
      let funcion_name = function_path_to_name(path);
      await function_auto(funcion_name);
      object_property_delete(processing, path);
      log("stop");
    }
  }
}
