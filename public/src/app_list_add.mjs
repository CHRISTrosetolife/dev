import { js_unparse } from "./js_unparse.mjs";
import { js_imports_add } from "./js_imports_add.mjs";
import { js_parse } from "./js_parse.mjs";
import { string_combine } from "./string_combine.mjs";
import { string_replace } from "./string_replace.mjs";
import { js_code_statement_call } from "./js_code_statement_call.mjs";
import { marker } from "./marker.mjs";
import { file_transform } from "./file_transform.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
export async function app_list_add(list_function, inserted_code) {
  let file_path = function_name_to_path(list_function.name);
  await file_transform(
    async (before) => {
      let name = marker.name;
      const search = js_code_statement_call(name);
      let after = string_replace(
        before,
        search,
        string_combine(inserted_code(), search),
      );
      let parsed = js_parse(after);
      await js_imports_add(parsed);
      let result = js_unparse(parsed);
      return result;
    },
    file_path,
    [],
  );
}
