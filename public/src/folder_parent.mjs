export async function folder_parent(file_name) {
  let path = await import("path");
  let parent = path.dirname(file_name);
  return parent;
}
