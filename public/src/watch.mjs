import { fn_name } from "./fn_name.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { log_error } from "./log_error.mjs";
import { function_auto_after } from "./function_auto_after.mjs";
import { folder_current_prefix_combine } from "./folder_current_prefix_combine.mjs";
import { git_push } from "./git_push.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { git_ac_message } from "./git_ac_message.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { log } from "./log.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { folder_path_src } from "./folder_path_src.mjs";
import { string_replace } from "./string_replace.mjs";
import { file_read } from "./file_read.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { list_concat } from "./list_concat.mjs";
import { import_node } from "./import_node.mjs";
export async function watch() {
  let chokidar = await import_node("chokidar");
  let cache = {};
  let base = Promise.resolve();
  let fps = folder_path_src();
  start();
  log(
    string_combine_multiple([fn_name("watch"), " ", await path_resolve(fps)]),
  );
  function start() {
    let result = chokidar
      .watch(fps)
      .on("all", (event, path) => (base = base.then(on_watch(event, path))));
    return result;
  }
  async function on_watch(event, path) {
    if (event === "change") {
      path = string_replace(path, "\\", "/");
      path = folder_current_prefix_combine(path);
      object_property_initialize(cache, path, {});
      let c = object_property_get(cache, path);
      let { contents, processing } = c;
      if (processing) {
        return;
      }
      object_property_set(c, "processing", true);
      let before = await file_read(path);
      if (before === contents) {
        object_property_set(c, "processing", false);
        return;
      }
      let function_name = function_path_to_name(path);
      let fn = function_auto_after;
      let args = [function_name];
      let processed = false;
      let after;
      try {
        after = await fn(...args);
        processed = true;
      } catch (e) {
        log_error(
          string_combine_multiple(["error while processing ", function_name]),
        );
        log_error(e);
      } finally {
        object_property_set(c, "processing", false);
      }
      if (processed) {
        object_property_set(c, "contents", after);
        await git_ac_message(list_join_space(list_concat([fn.name], args)));
        await git_push();
      }
    }
  }
}
