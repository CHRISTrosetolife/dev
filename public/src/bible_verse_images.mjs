import { bible_image_resolutions } from "./bible_image_resolutions.mjs";
import { each_async } from "./each_async.mjs";
import { file_open } from "./file_open.mjs";
import { file_overwrite_binary } from "./file_overwrite_binary.mjs";
import { list_take } from "./list_take.mjs";
import { each_index } from "./each_index.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_size } from "./list_size.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { each_range_reverse } from "./each_range_reverse.mjs";
import { each } from "./each.mjs";
import { bible_image_path } from "./bible_image_path.mjs";
import { file_read_binary } from "./file_read_binary.mjs";
import { number_max } from "./number_max.mjs";
import { bible_reference } from "./bible_reference.mjs";
import { bible_book_name } from "./bible_book_name.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { log } from "./log.mjs";
import { file_exists } from "./file_exists.mjs";
import { path_join } from "./path_join.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
import { bible_chapter_folder_parent_gitignore } from "./bible_chapter_folder_parent_gitignore.mjs";
import { createCanvas, loadImage } from "canvas";
import { object_merge } from "./object_merge.mjs";
import { list_concat } from "./list_concat.mjs";
export async function bible_verse_images(
  bible_folder,
  chapter_name,
  verse_number,
) {
  let output_path_folder = bible_chapter_folder_parent_gitignore(
    "img",
    bible_folder,
    chapter_name,
  );
  let { book_code, chapter_code } = bible_chapter_name_parse(chapter_name);
  let verses = await bible_chapter(bible_folder, chapter_name);
  let match = list_find_property(verses, "verse_number", verse_number);
  let hvs = bible_image_resolutions();
  let result_path = {};
  let result = {
    path: result_path,
  };
  await each_async(hvs, async (hv) => {
    let hv_name = object_property_get(hv, "name");
    let path_image = path_join([
      output_path_folder,
      verse_number,
      string_combine_multiple([hv_name, ".png"]),
    ]);
    object_merge(result_path, {
      [hv_name]: path_image,
    });
    if (0) {
      if (await file_exists(path_image)) {
        return;
      }
    }
    log({
      hv,
      match,
    });
    let tokens = object_property_get(match, "tokens");
    let book_name = bible_book_name(book_code);
    let reference = bible_reference(book_name, chapter_code, verse_number);
    tokens = list_concat(tokens, reference);
    log({
      tokens,
    });
    let canvas_width = object_property_get(hv, "width");
    let canvas_height = object_property_get(hv, "height");
    let bigger = number_max(canvas_width, canvas_height);
    let canvas = createCanvas(canvas_width, canvas_height);
    let ctx = canvas.getContext("2d");
    let data = await file_read_binary(bible_image_path());
    let image = await loadImage(data);
    ctx.drawImage(
      image,
      -(bigger - canvas_width) / 2,
      -(bigger - canvas_height) / 2,
      bigger,
      bigger,
    );
    ctx.fillStyle = "rgba(0,0,0,0.65)";
    ctx.fillRect(0, 0, canvas_width, canvas_height);
    ctx.fillStyle = "white";
    let font_size_px_max = 300;
    let font_size_px = font_size_px_max;
    each(tokens, (token) => {
      each_range_reverse(font_size_px + 1, (i) => {
        font_size_px = i;
        ctx.font = string_combine_multiple([font_size_px, "px Arial"]);
        let measured = ctx.measureText(token);
        let { width, actualBoundingBoxAscent: height } = measured;
        let padding = line_height_to_padding_double(height);
        if (width <= canvas_width - padding) {
          return true;
        }
      });
    });
    let lines = null;
    let offset_height = 0;
    each_range_reverse(font_size_px + 1, (i) => {
      lines = [];
      font_size_px = i;
      ctx.font = string_combine_multiple([font_size_px, "px Arial"]);
      let index_current = 0;
      while (index_current < list_size(tokens)) {
        each_range_reverse(list_size(tokens) - index_current, (count) => {
          let sliced = list_slice(
            tokens,
            index_current,
            index_current + count + 1,
          );
          let sliced_text = list_join_space(sliced);
          let measured = ctx.measureText(sliced_text);
          let { width, actualBoundingBoxAscent: height } = measured;
          let padding = line_height_to_padding_double(height);
          if (width <= canvas_width - padding) {
            list_add(lines, {
              height,
              text: sliced_text,
            });
            index_current += count + 1;
            return true;
          }
        });
      }
      let height_total = list_map_sum(lines, line_to_height_padded);
      if (less_than_equal(height_total, canvas_height)) {
        offset_height = (canvas_height - height_total) / 2;
        return true;
      }
    });
    each_index(lines, (line, index) => {
      let padding = line_height_to_padding(line.height);
      let offset_line = list_map_sum(
        list_take(lines, index + 1),
        line_to_height_padded,
      );
      ctx.fillText(line.text, padding, offset_line - padding + offset_height);
    });
    let buffer = canvas.toBuffer("image/png");
    await file_overwrite_binary(path_image, buffer);
    if (0) {
      await file_open(path_image);
    }
  });
  return result;
  function line_to_height_padded(line) {
    return line.height + line_height_to_padding_double(line.height);
  }
  function line_height_to_padding_double(height) {
    return 2 * line_height_to_padding(height);
  }
  function line_height_to_padding(height) {
    return height / 3;
  }
}
