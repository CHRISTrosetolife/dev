import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { path_json_encoded } from "./path_json_encoded.mjs";
import { http_response } from "./http_response.mjs";
import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { promisify } from "node:util";
export async function http_file(url) {
  let file_path_output = path_json_encoded(http_file.name, {
    url,
  });
  await folder_parent_exists_ensure(file_path_output);
  let response = await http_response(url);
  let streamPipeline = promisify(pipeline);
  await streamPipeline(response.body, createWriteStream(file_path_output));
  return file_path_output;
}
