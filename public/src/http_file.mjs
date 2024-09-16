import { http_response } from "./http_response.mjs";
export async function http_file(url, file_path_output) {
  let response = await http_response(url);
  await streamPipeline(response.body, createWriteStream(file_path_output));
}
