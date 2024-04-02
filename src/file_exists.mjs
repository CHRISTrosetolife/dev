export function file_exists(file_name) {
    return new Promise((resolve, reject)=> {
        fs.stat(file_name, function(err, stat) {
            if (err == null) {
                resolve(true);
            } else if (err.code === 'ENOENT') {
                resolve(false);
            } else {
                reject(err);
            }
        });
    })
}