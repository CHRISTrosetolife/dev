import { file_open } from "./file_open.mjs";
import { file_read_binary } from "./file_read_binary.mjs";
import { file_overwrite_binary } from "./file_overwrite_binary.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { createCanvas, loadImage } from "canvas";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { number_max } from "./number_max.mjs";
export async function sandbox_2() {
  assert_arguments_length(arguments, 0);
  let width = 1080;
  let height = 1920;
  let bigger = number_max(width, height);
  let canvas = createCanvas(width, height);
  let ctx = canvas.getContext("2d");
  let data = await file_read_binary("./img/bible_green.jpg");
  let image = await loadImage(data);
  ctx.drawImage(
    image,
    -(bigger - width) / 2,
    -(bigger - height) / 2,
    bigger,
    bigger,
  );
  ctx.fillStyle = "rgba(0,0,0,0.5)";
  ctx.fillRect(0, 0, width, height);
  ctx.font = "300px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("Awesome!", 10, 10);
  let text = ctx.measureText("Awesome!");
  let buffer = canvas.toBuffer("image/png");
  let output_path = folder_gitignore_path("test.png");
  await file_overwrite_binary(output_path, buffer);
  await file_open(output_path);
}
