const startBtn = document.getElementById("startBtn");
const video = document.getElementById("preview");
let stream;

const handleStart = () => {
  startBtn.innerText = "Stop Recording";
  startBtn.removeEventListener("click", handleStart);
  startBtn.addEventListener("click", handleStop);
  const recorder = new MediaRecorder(stream);
  console.log("**** before start", recorder);
  recorder.ondataavailable = (e) => console.log(e);
  recorder.start();
  console.log("====== after start", recorder);

  setTimeout(() => {
    recorder.stop();
  }, 10000);
};

const handleStop = () => {
  startBtn.innerText = "Start Recording";
  startBtn.removeEventListener("click", handleStop);
  startBtn.addEventListener("click", handleStart);
};

const init = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true,
  });
  console.log(stream);
  video.srcObject = stream;
  video.play();
};

init();
startBtn.addEventListener("click", handleStart);
