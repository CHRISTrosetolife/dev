import { file_open } from "./file_open.mjs";
import { file_read_binary } from "./file_read_binary.mjs";
import { file_overwrite_binary } from "./file_overwrite_binary.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { createCanvas, loadImage } from "canvas";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
export async function sandbox_2() {
  assert_arguments_length(arguments, 0);
  let canvas = createCanvas(1080, 1920);
  let data = await file_read_binary("./img/bible_green.jpg");
  let image = await loadImage(data);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(image, 50, 0, 70, 70);
  ctx.font = "300px Arial";
  ctx.fillText("Awesome!", 0, 0);
  let text = ctx.measureText("Awesome!");
  let buffer = canvas.toBuffer("image/png");
  let output_path = folder_gitignore_path("test.png");
  await file_overwrite_binary(output_path, buffer);
  await file_open(output_path);
}
