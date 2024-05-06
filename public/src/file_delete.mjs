import import_await from './import_await.mjs';let fs = await import_await('fs','fs');
export async function file_delete(file_name) {
    return await fs.promises.rm(file_name);
}
