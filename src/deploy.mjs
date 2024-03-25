import fs from 'fs';
export async function deploy() {
    await fs.promises.cp('./src', './deploy/src');
}