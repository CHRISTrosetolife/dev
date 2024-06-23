import { string_suffix_without } from "./string_suffix_without.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { list_to_lookup_value } from "./list_to_lookup_value.mjs";
import { bible_books_html_element_to_prefix } from "./bible_books_html_element_to_prefix.mjs";
import { bible_books_html_elements } from "./bible_books_html_elements.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
export async function bible_books_prefix_to_name_generate() {
  let book_elements = await bible_books_html_elements("engbsb");
  let lookup = list_to_lookup_value(
    book_elements,
    bible_books_html_element_to_prefix,
    html_parse_text,
  );
  return {
    ["a"]: b,
  };
  await function_new_generic(
    string_suffix_without(bible_books_prefix_to_name_generate, "_generate"),
    "",
    js_code_statement_return(js_code_array(delimited)),
    false,
    [],
    false,
    file_overwrite,
  );
}
