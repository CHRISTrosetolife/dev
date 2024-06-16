export async function html_load_wait() {
  await new Promise((resolve) => window.addEventListener("load", resolve));
}
