export async function html_audio(src) {
  const a = new Audio(src);
  let result = new Promise((resolve) => {
    a.addEventListener("ended", function () {
      a.currentTime = 0;
      resolve();
    });
  });
  a.play();
  return await result;
}
