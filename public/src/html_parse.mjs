import * as cheerio from "cheerio";
import { log } from "./log.mjs";
export function html_parse(input) {
  let parsed = cheerio.load(input);
  log({
    parsed,
  });
  let [root] = parsed("html");
  return root;
}
