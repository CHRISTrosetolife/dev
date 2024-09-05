import { string_suffix_without } from "./string_suffix_without.mjs";
import { log } from "./log.mjs";
import { path_parse_name } from "./path_parse_name.mjs";
import { folder_read_shallow } from "./folder_read_shallow.mjs";
import { each_async } from "./each_async.mjs";
import { folder_read_shallow_names } from "./folder_read_shallow_names.mjs";
import { folder_read_shallow_folders_bases } from "./folder_read_shallow_folders_bases.mjs";
import { bible_audio_player_english_path } from "./bible_audio_player_english_path.mjs";
import { list_includes } from "./list_includes.mjs";
import AdmZip from "adm-zip";
export async function bible_audio_player_unzip() {
  let p = bible_audio_player_english_path();
  let extension = ".zip";
  let zip_names = await folder_read_shallow_names(p, extension);
  let z_paths = await folder_read_shallow(p, extension);
  let folder_names = await folder_read_shallow_folders_bases(p);
  await each_async(z_paths, async (z_path) => {
    let zip_name = path_parse_name(z_path);
    if (list_includes(folder_names, zip_name)) {
      return;
    }
    let output_path = string_suffix_without(z_path, extension);
    let zip = new AdmZip(z_path);
    zip.extractAllTo("/home/me/zipcontent/", false);
    log({
      z: z_path,
    });
  });
}
