import { js_string } from "./js_string.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { list_to_lookup_value } from "./list_to_lookup_value.mjs";
import { bible_books_html_element_to_prefix } from "./bible_books_html_element_to_prefix.mjs";
import { bible_books_html_elements } from "./bible_books_html_elements.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { each_object } from "./each_object.mjs";
import { list_add } from "./list_add.mjs";
import { js_unparse } from "./js_unparse.mjs";
export async function bible_books_prefix_to_name_generate() {
  let book_elements = await bible_books_html_elements("engbsb");
  let lookup = list_to_lookup_value(
    book_elements,
    bible_books_html_element_to_prefix,
    html_parse_text,
  );
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
    string_suffix_without(
      bible_books_prefix_to_name_generate.name,
      "_generate",
    ),
    "",
    js_code_statement_return(js_unparse(r)),
    false,
    [],
    false,
    file_overwrite,
  );
}
