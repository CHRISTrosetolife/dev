import { browser_open } from "./browser_open.mjs";
import { function_name_to_url_github } from "./function_name_to_url_github.mjs";
export async function github_open(function_name) {
  let url = function_name_to_url_github(function_name);
  await browser_open(url);
}
