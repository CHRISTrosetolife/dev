import path from "path";
export function path_resolve(file_path) {
  return path.parse(file_path).name;
}
