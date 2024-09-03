export async function html_audio(src) {
  return;
  let a = new Audio(src);
  let result = new Promise((resolve) => {
    a.addEventListener("ended", function () {
      a.currentTime = 0;
      resolve();
    });
  });
  await a.play();
  return await result;
}
