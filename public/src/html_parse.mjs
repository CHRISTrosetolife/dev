import { parse } from "node-html-parser";
import * as cheerio from "cheerio";
export function html_parse(input) {
  return cheerio.load(input);
  return parse(input);
}
