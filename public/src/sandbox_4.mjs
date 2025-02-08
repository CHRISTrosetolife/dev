import { js_parse } from "./js_parse.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function sandbox_4() {
  let v = string_combine_multiple([
    'import { log } from "./log.mjs";\nimport { string_combine_multiple } from "./string_combine_multiple.mjs";\nimport { app_code_screen_prefix_get } from "./app_code_screen_prefix_get.mjs";\nimport { fn_name } from "./fn_name.mjs";\nimport { app_code_screen_suffix_get } from "./app_code_screen_suffix_get.mjs";\nimport { storage_local_initialize } from "./storage_local_initialize.mjs";\nimport { function_run } from "./function_run.mjs";\nimport { html_div } from "./html_div.mjs";\nimport { html_scripts_load } from "./html_scripts_load.mjs";\nimport { html_style_default_initialize } from "./html_style_default_initialize.mjs";\nexport async function app_code() {\n  let body = html_style_default_initialize();\n  let root = html_div(body);\n  await html_scripts_load(body, ["axios", "acorn", "astring"]);\n  let app_fn = app_code;\n  let context = {\n    root,\n    app_fn,\n  };\n  let suffix = app_code_screen_suffix_get(\n    context,\n    fn_name("app_code_refresh_main"),\n  );\n  let prefix = app_code_screen_prefix_get(context);\n  let screen = storage_local_initialize(app_fn, "screen", suffix);\n  let f = string_combine_multiple([prefix, screen]);\n  log({\n    f,\n  });\n  await function_run(f, [context]);\n}\n',
  ]);
  return js_parse(v);
}
