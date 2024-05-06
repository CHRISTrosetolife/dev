import import_await from './import_await.mjs';let fs = await import_await('fs','fs');
export async function file_read(file_name) {
    return await fs.promises.readFile(file_name, 'utf-8');
}
