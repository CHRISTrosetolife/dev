import { file_overwrite } from "./file_overwrite.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { list_map } from "./list_map.mjs";
import { function_open } from "./function_open.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { generate_list_generic } from "./generate_list_generic.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
export async function app_gs_bible_chapter_generate(chapter_name) {
  let verses = await bible_chapter("engbsb", chapter_name);
  chapter_name = string_case_lower(chapter_name);
  let prefix = string_suffix_without(
    app_gs_bible_chapter_generate.name,
    "_generate",
  );
  let name = string_combine_multiple([prefix, chapter_name]);
  await generate_list_generic(verses, name);
  let delimited = list_map(list, string_delimit);
  await function_new_generic(
    name,
    "",
    js_code_statement_return(js_code_array(delimited)),
    false,
    [],
    false,
    file_overwrite,
  );
  await function_open(name);
}
