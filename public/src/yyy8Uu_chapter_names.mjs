import { path_parse_base } from "./path_parse_base.mjs";
import { yyy8Uu_symlinks } from "./yyy8Uu_symlinks.mjs";
import { path_dirname } from "./path_dirname.mjs";
export async function yyy8Uu_chapter_names() {
  return await yyy8Uu_symlinks(each_symlink);
  async function each_symlink(s) {
    let dirname = path_dirname(s);
    return path_parse_base(s);
  }
}
