import { function_name_generated } from "./function_name_generated.mjs";
import { bible_books_names_lookup } from "./bible_books_names_lookup.mjs";
import { js_string } from "./js_string.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { each_object } from "./each_object.mjs";
import { list_add } from "./list_add.mjs";
import { js_unparse } from "./js_unparse.mjs";
export async function bible_books_prefix_to_name_generate() {
  let bible_folder = "engbsb";
  let lookup = await bible_books_names_lookup(bible_folder);
  let r = {
    type: "ObjectExpression",
    properties: [],
  };
  each_object(lookup, (key, value) => {
    list_add(r.properties, {
      type: "Property",
      method: false,
      shorthand: false,
      computed: true,
      key: js_string(key),
      value: js_string(value),
      kind: "init",
    });
  });
  await function_new_generic(
    function_name_generated(bible_books_prefix_to_name_generate),
    "",
    js_code_statement_return(js_unparse(r)),
    false,
    [],
    false,
    file_overwrite,
  );
}
