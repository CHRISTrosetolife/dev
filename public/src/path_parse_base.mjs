import path from "path";
export function path_parse_base(file_path) {
  return path.parse(file_path).base;
}
