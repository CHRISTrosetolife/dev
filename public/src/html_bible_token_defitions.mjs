import { html_style_green } from "./html_style_green.mjs";
import { bible_storage_interlinear_chapter_definitions_property } from "./bible_storage_interlinear_chapter_definitions_property.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function html_bible_token_defitions(row, chapter_definitions, strong) {
  let definition_entry = object_property_get(chapter_definitions, strong);
  let definition = html_span_text(
    row,
    object_property_get(
      definition_entry,
      bible_storage_interlinear_chapter_definitions_property(),
    ),
  );
  html_style_green(definition);
}
