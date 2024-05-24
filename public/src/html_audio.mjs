export async function html_audio(src) {
    const a = new Audio(src);
    let result = new Promise(resolve=>{
        myAudio.addEventListener("ended", function(){
            myAudio.currentTime = 0;
            resolve()
       });
    })
  a.play();
  return await result;
}
