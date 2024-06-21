import { file_overwrite } from "./file_overwrite.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { list_map } from "./list_map.mjs";
import { function_open } from "./function_open.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
import { json_to } from "./json_to.mjs";
export async function app_gs_bible_chapter_generate(chapter_name) {
  let verses = await bible_chapter("engbsb", chapter_name);
  chapter_name = string_case_lower(chapter_name);
  let prefix = string_suffix_without(
    app_gs_bible_chapter_generate.name,
    "generate",
  );
  let name = string_combine_multiple([prefix, chapter_name]);$e
  let jsons = list_map(verses, json_to);
  await function_new_generic(
    name,
    "",
    js_code_statement_return(js_code_array(jsons)),
    false,
    [],
    false,
    file_overwrite,
  );
  await function_open(name);
}
