import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_code_statement_call } from "./js_code_statement_call.mjs";
import { string_replace } from "./string_replace.mjs";
import { file_transform } from "./file_transform.mjs";
import { marker } from "./marker.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_add } from "./list_add.mjs";
export function lesson_new(name) {
  let lesson_name = string_combine('lesson_', name)
  file_transform(
    (before) => {
      let name = marker.name;
      const search = js_code_statement_call(name);
      let after = string_replace(
        before,
        search,
        string_combine(js_code_statement_call_args(list_add.name, ['module_current', lesson_name]), search),
      );
      let parsed = js_parse(after);
    },
    file_path,
    [],
  );
}
