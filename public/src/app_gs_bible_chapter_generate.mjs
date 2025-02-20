import { function_new_generic_code } from "./function_new_generic_code.mjs";
import { app_gs_bible_chapter_prefix } from "./app_gs_bible_chapter_prefix.mjs";
import { js_string } from "./js_string.mjs";
import { list_find } from "./list_find.mjs";
import { equal_by } from "./equal_by.mjs";
import { assert } from "./assert.mjs";
import { each_index } from "./each_index.mjs";
import { js_code_array_empty } from "./js_code_array_empty.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_all } from "./list_all.mjs";
import { function_transform_args_split_lambda } from "./function_transform_args_split_lambda.mjs";
import { list_last } from "./list_last.mjs";
import { js_declaration_single_body } from "./js_declaration_single_body.mjs";
import { function_exists } from "./function_exists.mjs";
import { object_property_delete } from "./object_property_delete.mjs";
import { each } from "./each.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { list_map } from "./list_map.mjs";
import { function_open } from "./function_open.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function app_gs_bible_chapter_generate(chapter_name) {
  chapter_name = string_case_lower(chapter_name);
  let property_text_name = "text";
  let verses = await bible_chapter("engbsb", chapter_name);
  let prefix = app_gs_bible_chapter_prefix();
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
          assert(equal_by, [elements, verses, list_size]);
          each_index(verses, (verse, index) => {
            let element = list_get(elements, index);
            let { properties } = element;
            let property_text = list_find(
              properties,
              (p) =>
                p.key.type === "Identifier" &&
                p.key.name === property_text_name,
            );
            let verse_text = list_join_space(verse.tokens);
            property_text.value = js_string(verse_text);
            each(["sermons", "questions"], (property_name) => {
              if (
                list_all(
                  properties,
                  (p) =>
                    p.key.type !== "Identifier" || p.key.name !== property_name,
                )
              ) {
                list_add(properties, {
                  type: "Property",
                  method: false,
                  shorthand: false,
                  computed: false,
                  key: js_parse_expression(property_name),
                  value: js_parse_expression(js_code_array_empty()),
                  kind: "init",
                });
              }
            });
          });
        },
      ],
      [],
    );
  } else {
    each(verses, (item) => {
      object_property_set(
        item,
        property_text_name,
        list_join_space(item.tokens),
      );
      item.objections = [];
      object_property_delete(item, "tokens");
      each_verse(item);
    });
    let jsons = list_map(verses, json_to);
    await function_new_generic_code(
      function_name,
      "",
      js_code_statement_return(js_code_array(jsons)),
      false,
      [],
      false,
      true,
    );
    await function_open(function_name);
  }
  function each_verse(verse) {}
}
