import { parse } from "node-html-parser";
import * as cheerio from "cheerio";
export function html_parse(input) {
  let parsed = cheerio.load(input);
  let [root] = parsed("html");
  return parse(input);
}
