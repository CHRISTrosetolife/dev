import { object_property_get } from "./object_property_get.mjs";
import { import_node } from "./import_node.mjs";
export async function html_parse_parsed(input) {
  'import * as cheerio from "cheerio";';
  let cheerio = await import_node("cheerio");
  let parsed = cheerio.load(input);
  let root = object_property_get(parsed.root(), "0");
  let result = {
    parsed,
    root,
  };
  return result;
}
