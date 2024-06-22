import { list_first } from "./list_first.mjs";
import { list_all } from "./list_all.mjs";
import { list_filter } from "./list_filter.mjs";
import { error } from "./error.mjs";
import { log } from "./log.mjs";
import { function_transform_args_split_lambda } from "./function_transform_args_split_lambda.mjs";
import { list_last } from "./list_last.mjs";
import { js_declaration_single_body } from "./js_declaration_single_body.mjs";
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
import { list_add } from "./list_add.mjs";
export async function app_gs_bible_chapter_generate(chapter_name) {
  chapter_name = string_case_lower(chapter_name);
  let prefix = string_suffix_without(
    app_gs_bible_chapter_generate.name,
    "generate",
  );
  let function_name = string_combine_multiple([prefix, chapter_name]);
  if (await function_exists(function_name)) {
    await function_transform_args_split_lambda(
      function_name,
      [
        (ast) => {
          let body_block = js_declaration_single_body(ast);
          let last = list_last(body_block);
          let { argument } = last;
          let { elements } = argument;
          each(elements, (element) => {
            let { properties } = element;
            let existing = list_filter(
              properties,
              (p) => p.key.type === "Identifier",
            );
            let property_name = "sermons";
            if (
              list_all(
                properties,
                (p) => p.key.type !== "Identifier" || p.name !== property_name,
              )
            ) {
              list_add({
                type: "Property",
                start: 4852,
                end: 4866,
                method: false,
                shorthand: false,
                computed: false,
                key: [Node],
                value: [Node],
                kind: "init",
              });
            }
            log(json_to(list_first(existing)));
            if (0) {
              each(properties, (p) => {
                log({
                  p,
                });
              });
            }
          });
          error();
        },
      ],
      [],
    );
  } else {
    let verses = await bible_chapter("engbsb", chapter_name);
    each(verses, (item) => {
      item.text = list_join_space(item.tokens);
      item.objections = [];
      object_property_delete(item, "tokens");
      each_verse(item);
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
  function each_verse(verse) {}
}
