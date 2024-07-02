import { file_overwrite_binary } from "./file_overwrite_binary.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { createCanvas } from "canvas";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
export async function sandbox_2() {
  assert_arguments_length(arguments, 0);
  let canvas = createCanvas(1080, 1920);
  let ctx = canvas.getContext("2d");
  ctx.font = "30px Impact";
  ctx.rotate(0.1);
  ctx.fillText("Awesome!", 50, 100);
  let text = ctx.measureText("Awesome!");
  let buffer = canvas.toBuffer("image/png");
  await file_overwrite_binary(folder_gitignore_path("test.png"), buffer);
}
