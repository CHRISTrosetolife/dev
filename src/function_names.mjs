import {glob} from 'glob';
export async function function_names() {
    let files = await glob(`src/**/*.mjs`);
    return files;
}