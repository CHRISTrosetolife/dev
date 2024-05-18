import { XMLParser } from "fast-xml-parser";
export function xml_parse(input_string) {
  const parser = new XMLParser();
  return parser.parse(input_string);
}
