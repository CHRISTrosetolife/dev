import { app_dev_p_transformer_generic } from "./app_dev_p_transformer_generic.mjs";
export function app_dev_p_transformer(root, transformer) {
  let prefix = "... and";
  app_dev_p_transformer_generic(root, transformer, prefix);
}
