import {command_line} from './command_line.mjs';
export async function npm_install(package_name) {
    return await command_line(`npm install ${package_name}@latest`);
}
