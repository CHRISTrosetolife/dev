import { npm_install_generic } from "./npm_install_generic.mjs";
export async function npm_install(package_name) {
  return await npm_install_generic(package_name, "");
}
