import { function_name_to_url_github } from "./function_name_to_url_github.mjs";
import { command_line } from "./command_line.mjs";
export async function github_open(function_name) {
  let url = function_name_to_url_github(function_name);
  await command_line(`start msedge ${url}`);
}
