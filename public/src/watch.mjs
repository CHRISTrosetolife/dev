import { string_includes } from "./string_includes.mjs";
import { list_any } from "./list_any.mjs";
import { add } from "./add.mjs";
import { log } from "./log.mjs";
import { function_auto } from "./function_auto.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { folder_path_src } from "./folder_path_src.mjs";
import chokidar from "chokidar";
import { string_replace } from "./string_replace.mjs";
import { string_combine } from "./string_combine.mjs";
export async function watch() {
  let watcher = chokidar
    .watch(folder_path_src())
    .on("all", async (event, path) => {
      if (event === "change") {
        path = string_replace(path, "\\", "/");
        path = string_combine("./", path);
        let w;
        w = await watcher.getWatched();
        log({
          w,
          c: list_any(w, (e) => string_includes(e, "watch")),
        });
        await watcher.unwatch(path);
        w = await watcher.getWatched();

        log({
          w,
          c: list_any(w, (e) => string_includes(e, "watch")),
        });
        log({
          path,
        });
        let funcion_name = function_path_to_name(path);
        await function_auto(funcion_name);
        watcher.add(path);
      }
    });
}
