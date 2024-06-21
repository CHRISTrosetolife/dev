import { function_transform_all } from "./function_transform_all.mjs";
import { function_transform_all_args } from "./function_transform_all_args.mjs";
import { function_cache_refresh } from "./function_cache_refresh.mjs";
import { function_cache_new_run } from "./function_cache_new_run.mjs";
import { function_cache_delete } from "./function_cache_delete.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { function_cache_new } from "./function_cache_new.mjs";
import { restart } from "./restart.mjs";
import { terminal_data_history_clear } from "./terminal_data_history_clear.mjs";
import { terminal_data_history } from "./terminal_data_history.mjs";
import { on_keypress_log } from "./on_keypress_log.mjs";
import { git_index_lock_delete } from "./git_index_lock_delete.mjs";
import { exit_aliases } from "./exit_aliases.mjs";
import { google_search } from "./google_search.mjs";
import { git_acp } from "./git_acp.mjs";
import { terminal } from "./terminal.mjs";
import { exit } from "./exit.mjs";
import { npm_install_global } from "./npm_install_global.mjs";
import { npm_install } from "./npm_install.mjs";
import { firebase_deploy } from "./firebase_deploy.mjs";
import { function_delete } from "./function_delete.mjs";
import { function_rename } from "./function_rename.mjs";
import { app_dev_screenshots } from "./app_dev_screenshots.mjs";
import { function_new_args } from "./function_new_args.mjs";
import { function_new } from "./function_new.mjs";
import { data_update } from "./data_update.mjs";
import { watch } from "./watch.mjs";
import { sandbox } from "./sandbox.mjs";
import { function_search } from "./function_search.mjs";
import { function_open } from "./function_open.mjs";
import { function_copy } from "./function_copy.mjs";
import { function_auto } from "./function_auto.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { assert } from "./assert.mjs";
import { each } from "./each.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { json_to } from "./json_to.mjs";
import { function_transform } from "./function_transform.mjs";
import { http_server } from "./http_server.mjs";
import { command_line } from "./command_line.mjs";
export async function function_aliases_generate() {
  let all = {};
  function alias_add(fn, aliases) {
    let { name } = fn;
    each(aliases, (a) => {
      assert(object_property_exists_not, [all, a]);
      object_property_set(all, a, name);
    });
  }
  alias_add(function_auto, ["a"]);
  alias_add(function_aliases_generate, ["al"]);
  alias_add(function_copy, ["c"]);
  alias_add(command_line, ["cl"]);
  alias_add(data_update, ["d"]);
  alias_add(function_delete, ["de"]);
  alias_add(exit, exit_aliases());
  alias_add(firebase_deploy, ["f"]);
  alias_add(function_cache_new_run, ["fc"]);
  alias_add(function_cache_delete, ["fcd"]);
  alias_add(function_cache_new, ["fcn"]);
  alias_add(function_cache_refresh, ["fcr"]);
  alias_add(function_transform, ["ft"]);
  alias_add(function_transform_all, ["fta"]);
  alias_add(function_transform_all_args, ["ftaa"]);
  alias_add(git_acp, ["gi"]);
  alias_add(google_search, ["g"]);
  alias_add(google_search, ["g"]);
  alias_add(git_index_lock_delete, ["gx"]);
  alias_add(http_server, ["h"]);
  alias_add(npm_install, ["i"]);
  alias_add(npm_install_global, ["ig"]);
  alias_add(on_keypress_log, ["k"]);
  alias_add(function_new, ["n"]);
  alias_add(function_new_args, ["na"]);
  alias_add(function_open, ["o"]);
  alias_add(function_rename, ["r"]);
  alias_add(restart, ["re"]);
  alias_add(function_search, ["s"]);
  alias_add(sandbox, ["sb"]);
  alias_add(app_dev_screenshots, ["ss"]);
  alias_add(terminal, ["t"]);
  alias_add(terminal_data_history, ["th"]);
  alias_add(terminal_data_history_clear, ["thc"]);
  alias_add(watch, ["w"]);
  let name = "function_aliases";
  await function_new_generic(
    name,
    "",
    js_code_statement_return(json_to(all)),
    false,
    [],
    false,
    file_overwrite,
  );
}
