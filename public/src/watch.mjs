import { add } from "./add.mjs";
import { git_push } from "./git_push.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { git_ac_message } from "./git_ac_message.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { log } from "./log.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { folder_path_src } from "./folder_path_src.mjs";
import chokidar from "chokidar";
import { string_replace } from "./string_replace.mjs";
import { string_combine } from "./string_combine.mjs";
import { file_read } from "./file_read.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { function_auto_return } from "./function_auto_return.mjs";
import { list_concat } from "./list_concat.mjs";
export async function watch() {
  let cache = {};
  let watcher = start();
  function start() {
    let result = chokidar.watch(folder_path_src()).on("all", on_watch);
    return result;
  }
  async function on_watch(event, path) {
    if (event === "change") {
      let original = path;
      path = string_replace(path, "\\", "/");
      path = string_combine("./", path);
      object_property_initialize(cache, path, {});
      watcher.unwatch(path);
      let c = object_property_get(cache, path);
      let { contents, processing } = c;
      if (processing) {
        log({
          path,
          processing,
        });
        return;
      }
      object_property_set(c, "processing", true);
      let before = await file_read(path);
      if (before === contents) {
        return;
      }
      let function_name = function_path_to_name(path);
      let fn = function_auto_return;
      let args = [function_name];
      let after = await fn(...args);
      watcher.add(path);
      await git_ac_message(list_join_space(list_concat([fn.name], args)));
      object_property_set(c, "contents", after);
      object_property_set(c, "processing", false);
      log({
        path,
      });
      await git_push();
    }
  }
}
