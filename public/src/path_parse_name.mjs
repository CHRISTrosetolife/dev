import path from "path";
export function path_parse_name(file_path) {
  return path.parse(file_path).name;
}
