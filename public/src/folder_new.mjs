import import_await from './import_await.mjs';let fs = await import_await('fs','fs');
export async function folder_new(folder_new_name) {
    await fs.promises.mkdir(folder_new_name);
}
