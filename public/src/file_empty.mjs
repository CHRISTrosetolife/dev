import import_await from './import_await.mjs';let fs = await import_await('fs','fs');
export async function file_empty(file_new_name) {
    await fs.promises.writeFile(file_new_name, '');
}
