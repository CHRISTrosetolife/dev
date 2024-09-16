import { path_json_encoded } from "./path_json_encoded.mjs";
import { http_response } from "./http_response.mjs";
import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { promisify } from "node:util";
export async function http_file(url, file_path_output) {
  let file_path = path_json_encoded(http_file.name, {
    url,
  });
  let response = await http_response(url);
  let streamPipeline = promisify(pipeline);
  await streamPipeline(response.body, createWriteStream(file_path));
}
