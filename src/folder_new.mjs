import fs from 'fs';
export async function folder_new(file_new_name, contents) {
  await fs.promises.writeFile(file_new_name, contents);
}
