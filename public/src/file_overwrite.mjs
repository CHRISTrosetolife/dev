import import_await from './import_await.mjs';let fs = await import_await('fs','fs');
export async function file_overwrite(file_name, data) {
    return await fs.promises.writeFile(file_name, data, 'utf-8');
}
