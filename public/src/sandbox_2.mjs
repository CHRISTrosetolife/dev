import { object_property_get } from "./object_property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { app_gs_bible_chapter_name } from "./app_gs_bible_chapter_name.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { bible_book_name } from "./bible_book_name.mjs";
import { bible_reference } from "./bible_reference.mjs";
import { log } from "./log.mjs";
import { file_open } from "./file_open.mjs";
import { file_read_binary } from "./file_read_binary.mjs";
import { file_overwrite_binary } from "./file_overwrite_binary.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { createCanvas, loadImage } from "canvas";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { number_max } from "./number_max.mjs";
export async function sandbox_2() {
  assert_arguments_length(arguments, 0);
  let book_id = "MAT";
  let chapter = "1";
  let verse_number = "1";
  let verses = await bible_chapter(
    "engbsb",
    app_gs_bible_chapter_name(book_id, chapter),
  );
  let match = list_find_property(verses, "verse_number", verse_number);
  let text_verse = list_join_space(object_property_get(match, "tokens"));
  let book_name = bible_book_name(book_id, chapter);
  let reference = bible_reference(book_name, chapter, verse_number);
  let canvas_width = 1080;
  let canvas_height = 1920;
  let bigger = number_max(canvas_width, canvas_height);
  let canvas = createCanvas(canvas_width, canvas_height);
  let ctx = canvas.getContext("2d");
  let data = await file_read_binary("./img/bible_green.jpg");
  let image = await loadImage(data);
  ctx.drawImage(
    image,
    -(bigger - canvas_width) / 2,
    -(bigger - canvas_height) / 2,
    bigger,
    bigger,
  );
  ctx.fillStyle = "rgba(0,0,0,0.5)";
  ctx.fillRect(0, 0, canvas_width, canvas_height);
  ctx.font = "300px Arial";
  ctx.fillStyle = "white";
  let text = ctx.measureText(reference);
  canvas_width = text;
  log({
    text,
  });
  ctx.fillText(reference, 0, 215);
  let buffer = canvas.toBuffer("image/png");
  let output_path = folder_gitignore_path("test.png");
  await file_overwrite_binary(output_path, buffer);
  await file_open(output_path);
}
