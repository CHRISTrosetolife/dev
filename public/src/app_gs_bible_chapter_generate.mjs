import { function_transform } from "./function_transform.mjs";
import { function_exists } from "./function_exists.mjs";
import { object_property_delete } from "./object_property_delete.mjs";
import { each } from "./each.mjs";
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
import { list_join_space } from "./list_join_space.mjs";
export async function app_gs_bible_chapter_generate(chapter_name) {
  chapter_name = string_case_lower(chapter_name);
  let prefix = string_suffix_without(
    app_gs_bible_chapter_generate.name,
    "generate",
  );
  let function_name = string_combine_multiple([prefix, chapter_name]);
  if (!(await function_exists(chapter_name))) {
    let verses = await bible_chapter("engbsb", chapter_name);
    each(verses, (item) => {
      item.verse = list_join_space(item.tokens);
      object_property_delete(item, "tokens");
    });
    let jsons = list_map(verses, json_to);
    await function_new_generic(
      function_name,
      "",
      js_code_statement_return(js_code_array(jsons)),
      false,
      [],
      false,
      file_overwrite,
    );
    await function_open(function_name);
  }
  await function_transform([$a], function_name, []);
}
