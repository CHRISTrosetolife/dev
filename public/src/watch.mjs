import { function_auto_after_path } from "./function_auto_after_path.mjs";
import { noop } from "./noop.mjs";
import { sermon_folder } from "./sermon_folder.mjs";
import { fn_name } from "./fn_name.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { log_error } from "./log_error.mjs";
import { folder_current_prefix_combine } from "./folder_current_prefix_combine.mjs";
import { git_push } from "./git_push.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { git_ac_message } from "./git_ac_message.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { log } from "./log.mjs";
import { string_replace } from "./string_replace.mjs";
import { file_read } from "./file_read.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { import_node } from "./import_node.mjs";
import { folder_path_src } from "./folder_path_src.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
export async function watch() {
  let chokidar = await import_node("chokidar");
  let cache = {};
  let base = Promise.resolve();
  let sf = sermon_folder();
  start(folder_path_src(), function_auto_after_path);
  start(sf, noop);
  async function start(folder_path, fn) {
    let result = chokidar
      .watch(folder_path)
      .on(
        "all",
        (event, path) => (base = base.then(on_watch(event, path, fn))),
      );
    log(
      string_combine_multiple([
        fn_name("watch"),
        " ",
        await path_resolve(folder_path),
      ]),
    );
    return result;
  }
  async function on_watch(event, path, fn) {
    if (event !== "change") {
      return;
    }
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
    let processed = false;
    let after;
    try {
      after = await fn(path);
      processed = true;
    } catch (e) {
      log_error(
        string_combine_multiple([
          fn_name("watch"),
          ": error while processing: ",
          function_name,
        ]),
      );
      log_error(e);
    } finally {
      object_property_set(c, "processing", false);
    }
    if (!processed) {
      return;
    }
    object_property_set(c, "contents", after);
    await git_ac_message(
      list_join_space([fn_name("watch"), " ", function_path_to_name(path)]),
    );
    await git_push();
  }
}
