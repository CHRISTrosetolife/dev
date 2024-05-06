import import_await from './import_await.mjs';let fs = await import_await('fs','fs');
export async function file_rename(file_name_from, file_name_to) {
    await fs.promises.rename(file_name_from, file_name_to);
}
