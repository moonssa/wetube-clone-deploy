/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/videoRecorder.js":
/*!****************************************!*\
  !*** ./src/client/js/videoRecorder.js ***!
  \****************************************/
/***/ (() => {

eval("const startBtn = document.getElementById(\"startBtn\");\nconst video = document.getElementById(\"preview\");\nlet stream, recorder, videoFile;\n\nconst handleStart = () => {\n  startBtn.innerText = \"Stop Recording\";\n  startBtn.removeEventListener(\"click\", handleStart);\n  startBtn.addEventListener(\"click\", handleStop);\n  recorder = new MediaRecorder(stream, {\n    mimeType: \"video/webm\"\n  });\n  console.log(\"**** before start\", recorder); // recording이 끝났을때\n\n  recorder.ondataavailable = e => {\n    console.log(\"recorder done\");\n    console.log(e);\n    console.log(e.data); // createObjectURL  은 실제 URL이 아니라 녹화된 동영상이 위치한 메모리의 위치를 포인트 한다.\n\n    videoFile = URL.createObjectURL(e.data);\n    console.log(videoFile);\n    video.srcObject = null;\n    video.src = videoFile;\n    video.loop = true;\n    video.play();\n  };\n\n  recorder.start();\n  console.log(\"====== after start\", recorder); // setTimeout(() => {\n  //   recorder.stop();\n  // }, 10000);\n};\n\nconst handleDownload = () => {\n  const a = document.createElement(\"a\");\n  a.href = videoFile;\n  a.download = \"myRecording.webm\";\n  document.body.appendChild(a);\n  a.click();\n};\n\nconst handleStop = () => {\n  startBtn.innerText = \"Download Recording\";\n  startBtn.removeEventListener(\"click\", handleStop);\n  recorder.stop();\n  startBtn.addEventListener(\"click\", handleDownload);\n};\n\nconst init = async () => {\n  stream = await navigator.mediaDevices.getUserMedia({\n    audio: false,\n    video: true\n  });\n  console.log(stream);\n  video.srcObject = stream;\n  video.play();\n};\n\ninit();\nstartBtn.addEventListener(\"click\", handleStart);\n\n//# sourceURL=webpack://wetube/./src/client/js/videoRecorder.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/videoRecorder.js"]();
/******/ 	
/******/ })()
;