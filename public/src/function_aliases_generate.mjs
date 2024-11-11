import { function_rename_alias } from "./function_rename_alias.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { exit_aliases } from "./exit_aliases.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { assert } from "./assert.mjs";
import { each } from "./each.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { json_to } from "./json_to.mjs";
import { fn_name } from "./fn_name.mjs";
export async function function_aliases_generate() {
  let all = {};
  function alias_add(fn, aliases) {
    let { name } = fn;
    each(aliases, (a) => {
      assert(object_property_exists_not, [all, a]);
      object_property_set(all, a, name);
    });
  }
  alias_add(fn_name("function_auto"), ["a"]);
  alias_add(fn_name("function_alias_expand"), ["ae"]);
  alias_add(fn_name("function_aliases_generate"), ["al"]);
  alias_add(fn_name("app_new"), ["an"]);
  alias_add(fn_name("bible_search"), ["b"]);
  alias_add(fn_name("bible_search_book"), ["bb"]);
  alias_add(fn_name("bible_audio_player_book"), ["bp"]);
  alias_add(fn_name("bible_chapter_text"), ["bt"]);
  alias_add(fn_name("function_copy"), ["c"]);
  alias_add(fn_name("command_line"), ["cl"]);
  alias_add(fn_name("data_update"), ["d"]);
  alias_add(fn_name("function_delete"), ["de"]);
  alias_add(fn_name("app_dev_screenshots"), ["ds"]);
  alias_add(fn_name("exit"), exit_aliases());
  alias_add(fn_name("firebase_deploy"), ["f"]);
  alias_add(fn_name("function_cache_new_run"), ["fc"]);
  alias_add(fn_name("function_cache_delete"), ["fcd"]);
  alias_add(fn_name("function_cache_new"), ["fcn"]);
  alias_add(fn_name("function_cache_path_open"), ["fco"]);
  alias_add(fn_name("function_cache_refresh_args"), ["fca"]);
  alias_add(fn_name("function_cache_refresh"), ["fcr"]);
  alias_add(fn_name("function_transform"), ["ft"]);
  alias_add(fn_name("function_transform_all"), ["fta"]);
  alias_add(fn_name("function_transform_all_args"), ["ftaa"]);
  alias_add(fn_name("git_acp"), ["g"]);
  alias_add(fn_name("google_search"), ["go"]);
  alias_add(fn_name("google_search_lucky"), ["gl"]);
  alias_add(fn_name("git_index_lock_delete"), ["gx"]);
  alias_add(fn_name("hub"), ["h"]);
  alias_add(fn_name("http_server"), ["hs"]);
  alias_add(fn_name("npm_install"), ["i"]);
  alias_add(fn_name("npm_install_global"), ["ig"]);
  alias_add(fn_name("on_keypress_log"), ["k"]);
  alias_add(fn_name("function_new"), ["n"]);
  alias_add(fn_name("function_new_args"), ["na"]);
  alias_add(fn_name("function_open"), ["o"]);
  alias_add(fn_name("function_open_app"), ["oa"]);
  alias_add(fn_name("function_open_app_html"), ["oh"]);
  alias_add(fn_name("function_output_file"), ["of"]);
  alias_add(fn_name("function_output_file_args"), ["ofa"]);
  alias_add(fn_name("function_output_file_args_expression"), ["ofe"]);
  alias_add(fn_name("function_param_new"), ["p"]);
  alias_add(fn_name("function_param_new_at"), ["pn"]);
  alias_add(fn_name("function_param_move_beginning"), ["pb"]);
  alias_add(fn_name("function_param_delete"), ["pd"]);
  alias_add(fn_name("function_param_move_first"), ["pf"]);
  alias_add(fn_name("function_param_move"), ["pm"]);
  alias_add(fn_name("function_rename_open"), [function_rename_alias()]);
  alias_add(fn_name("functions_rename_identifier"), ["ri"]);
  alias_add(fn_name("computer_restart"), ["re"]);
  alias_add(fn_name("function_search"), ["s"]);
  alias_add(fn_name("sandbox"), ["sb"]);
  alias_add(fn_name("functions_identifier"), ["si"]);
  alias_add(fn_name("sermon_references_combine"), ["sr"]);
  alias_add(fn_name("functions_string"), ["ss"]);
  alias_add(fn_name("sermon_new"), ["sn"]);
  alias_add(fn_name("sermon_open"), ["sp"]);
  alias_add(fn_name("function_search_open"), ["so"]);
  alias_add(fn_name("terminal"), ["t"]);
  alias_add(fn_name("terminal_data_history"), ["th"]);
  alias_add(fn_name("terminal_data_history_clear"), ["thc"]);
  alias_add(fn_name("watch"), ["w"]);
  alias_add(fn_name("server"), ["v"]);
  let name = fn_name("function_aliases");
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
