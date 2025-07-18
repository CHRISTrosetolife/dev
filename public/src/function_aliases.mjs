import { function_aliases_register } from "./function_aliases_register.mjs";
import { marker } from "./marker.mjs";
import { function_rename_alias } from "./function_rename_alias.mjs";
import { exit_aliases } from "./exit_aliases.mjs";
import { fn_name } from "./fn_name.mjs";
export function function_aliases() {
  let all = {};
  function_aliases_register(all, fn_name("function_auto"), ["a"]);
  function_aliases_register(all, fn_name("function_alias_expand"), ["ae"]);
  function_aliases_register(all, fn_name("function_aliases"), ["al"]);
  function_aliases_register(all, fn_name("app_new"), ["an"]);
  function_aliases_register(all, fn_name("bible_search"), ["b"]);
  function_aliases_register(all, fn_name("bible_search_book"), ["bb"]);
  function_aliases_register(all, fn_name("bible_audio_player_book"), ["bp"]);
  function_aliases_register(all, fn_name("bible_chapter_text"), ["bt"]);
  function_aliases_register(all, fn_name("function_copy"), ["c"]);
  function_aliases_register(all, fn_name("command_line"), ["cl"]);
  function_aliases_register(all, fn_name("data_update"), ["d"]);
  function_aliases_register(all, fn_name("function_delete"), ["de"]);
  function_aliases_register(all, fn_name("app_dev_screenshots"), ["ds"]);
  function_aliases_register(all, fn_name("exit"), exit_aliases());
  function_aliases_register(all, fn_name("firebase_deploy"), ["f"]);
  function_aliases_register(all, fn_name("function_deploy"), ["fd"]);
  function_aliases_register(all, fn_name("function_cache_new_run"), ["fc"]);
  function_aliases_register(all, fn_name("function_cache_delete"), ["fcd"]);
  function_aliases_register(all, fn_name("function_cache_new"), ["fcn"]);
  function_aliases_register(all, fn_name("function_cache_path_open"), ["fco"]);
  function_aliases_register(
    all,
    fn_name("function_cache_refresh_args_command_line"),
    ["fca"],
  );
  function_aliases_register(all, fn_name("function_cache_refresh"), ["fcr"]);
  function_aliases_register(all, fn_name("function_transform_command_line"), [
    "ft",
  ]);
  function_aliases_register(all, fn_name("function_transform_all"), ["fta"]);
  function_aliases_register(all, fn_name("function_transform_all_args"), [
    "ftaa",
  ]);
  function_aliases_register(all, fn_name("git_acp"), ["g"]);
  function_aliases_register(all, fn_name("google_search"), ["go"]);
  function_aliases_register(all, fn_name("google_search_lucky"), ["gl"]);
  function_aliases_register(all, fn_name("git_index_lock_delete"), ["gx"]);
  function_aliases_register(all, fn_name("hub"), ["h"]);
  function_aliases_register(all, fn_name("http_server"), ["hs"]);
  function_aliases_register(all, fn_name("npm_install"), ["i"]);
  function_aliases_register(all, fn_name("npm_install_global"), ["ig"]);
  function_aliases_register(all, fn_name("on_keypress_log"), ["k"]);
  function_aliases_register(all, fn_name("function_new"), ["n"]);
  function_aliases_register(all, fn_name("function_new_args"), ["na"]);
  function_aliases_register(all, fn_name("function_open"), ["o"]);
  function_aliases_register(all, fn_name("function_open_app"), ["oa"]);
  function_aliases_register(all, fn_name("function_open_app_html"), ["oh"]);
  function_aliases_register(all, fn_name("function_output_file"), ["of"]);
  function_aliases_register(all, fn_name("function_output_file_args"), ["ofa"]);
  function_aliases_register(
    all,
    fn_name("function_output_file_args_expression"),
    ["ofe"],
  );
  function_aliases_register(all, fn_name("function_param_new"), ["p"]);
  function_aliases_register(all, fn_name("function_param_new_at"), ["pn"]);
  function_aliases_register(all, fn_name("function_param_move_beginning"), [
    "pb",
  ]);
  function_aliases_register(all, fn_name("function_param_delete_index"), [
    "pdi",
  ]);
  function_aliases_register(all, fn_name("function_param_delete_name"), ["pd"]);
  function_aliases_register(all, fn_name("function_param_move_first_index"), [
    "pfi",
  ]);
  function_aliases_register(all, fn_name("function_param_move_first_name"), [
    "pf",
  ]);
  function_aliases_register(all, fn_name("function_param_move_index"), ["pmi"]);
  function_aliases_register(all, fn_name("function_rename_open"), [
    function_rename_alias(),
  ]);
  function_aliases_register(all, fn_name("functions_rename_identifier"), [
    "ri",
  ]);
  function_aliases_register(all, fn_name("computer_restart"), ["re"]);
  function_aliases_register(all, fn_name("function_search"), ["s"]);
  function_aliases_register(all, fn_name("sandbox"), ["sb"]);
  function_aliases_register(all, fn_name("functions_identifier"), ["si"]);
  function_aliases_register(all, fn_name("sermon_references_combine"), ["sr"]);
  function_aliases_register(all, fn_name("functions_string"), ["ss"]);
  function_aliases_register(all, fn_name("sermon_new"), ["sn"]);
  function_aliases_register(all, fn_name("sermon_open"), ["sp"]);
  function_aliases_register(all, fn_name("function_search_open"), ["so"]);
  function_aliases_register(all, fn_name("terminal"), ["t"]);
  function_aliases_register(all, fn_name("terminal_data_history"), ["th"]);
  function_aliases_register(all, fn_name("terminal_data_history_clear"), [
    "thc",
  ]);
  function_aliases_register(all, fn_name("watch"), ["w"]);
  function_aliases_register(all, fn_name("server"), ["v"]);
  function_aliases_register(all, fn_name("function_aliases_add"), ["aa"]);
  function_aliases_register(all, fn_name("sandbox_3"), ["s3"]);
  function_aliases_register(all, fn_name("app_remove"), ["ar"]);
  function_aliases_register(all, fn_name("sandbox_4"), ["s4"]);
  function_aliases_register(all, fn_name("app_new_existing"), ["ane"]);
  function_aliases_register(all, fn_name("sandbox_5"), ["s5"]);
  function_aliases_register(all, fn_name("app_code_local_upload"), ["u"]);
  function_aliases_register(all, fn_name("app_code_local_download"), ["cdd"]);
  function_aliases_register(all, fn_name("function_params_move_name"), ["pm"]);
  function_aliases_register(all, fn_name("watch_git_pause"), ["wp"]);
  function_aliases_register(all, fn_name("watch_git_unpause"), ["wu"]);
  function_aliases_register(all, fn_name("function_param_new_doubled"), [
    "pdb",
  ]);
  function_aliases_register(all, fn_name("function_wrap"), ["fw"]);
  function_aliases_register(all, fn_name("lesson_new"), ["l"]);
  function_aliases_register(all, fn_name("app_new_from"), ["anf"]);
  function_aliases_register(all, fn_name("computer_shutdown"), ["sh"]);
  function_aliases_register(all, fn_name("app_contact_download_unhandled"), [
    "cd",
  ]);
  function_aliases_register(all, fn_name("app_contact_main_deploy"), ["cy"]);
  function_aliases_register(all, fn_name("app_contact_main_open"), ["ac"]);
  function_aliases_register(all, fn_name("bible_verses_upload"), ["bd"]);
  function_aliases_register(all, fn_name("line_read_split_space"), ["ls"]);
  function_aliases_register(all, fn_name("app_contact_download_single"), [
    "cds",
  ]);
  function_aliases_register(
    all,
    fn_name("app_contact_download_responses_generate"),
    ["cg"],
  );
  function_aliases_register(
    all,
    fn_name("app_contact_download_responses_test"),
    ["cdt"],
  );
  function_aliases_register(
    all,
    fn_name("app_contact_download_responses_overwrite"),
    ["cdo"],
  );
  marker();
  return all;
}
