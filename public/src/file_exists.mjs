import import_await from './import_await.mjs';let fs = await import_await('fs','fs');
export function file_exists(file_name) {
    return new Promise((resolve, reject) => {
        fs.stat(file_name, function (err, stat) {
            if (err == null) {
                resolve(true);
            } else if (err.code === 'ENOENT') {
                resolve(false);
            } else {
                reject(err);
            }
        });
    });
}
