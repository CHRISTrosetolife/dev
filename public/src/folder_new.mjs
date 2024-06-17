let fs = await import_node("fs");
export async function folder_new(folder_new_name) {
  await fs.promises.mkdir(folder_new_name);
}
