export async function folder_is(fs, path_full) {
  let stat = await fs.promises.lstat(path_full);
  let path_folder_is = stat.isDirectory();
  return path_folder_is;
}
