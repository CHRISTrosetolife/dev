import fs from 'fs';
export async function folder_new(folder_new_name) {
  await fs.promises.mkdir(folder_new_name);
}
