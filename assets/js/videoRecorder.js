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

eval("const startBtn = document.getElementById(\"startBtn\");\nconst video = document.getElementById(\"preview\");\nlet stream;\n\nconst handleStart = () => {\n  startBtn.innerText = \"Stop Recording\";\n  startBtn.removeEventListener(\"click\", handleStart);\n  startBtn.addEventListener(\"click\", handleStop);\n  const recorder = new MediaRecorder(stream);\n  console.log(\"**** before start\", recorder);\n\n  recorder.ondataavailable = e => console.log(e);\n\n  recorder.start();\n  console.log(\"====== after start\", recorder);\n  setTimeout(() => {\n    recorder.stop();\n  }, 10000);\n};\n\nconst handleStop = () => {\n  startBtn.innerText = \"Start Recording\";\n  startBtn.removeEventListener(\"click\", handleStop);\n  startBtn.addEventListener(\"click\", handleStart);\n};\n\nconst init = async () => {\n  stream = await navigator.mediaDevices.getUserMedia({\n    audio: false,\n    video: true\n  });\n  console.log(stream);\n  video.srcObject = stream;\n  video.play();\n};\n\ninit();\nstartBtn.addEventListener(\"click\", handleStart);\n\n//# sourceURL=webpack://wetube/./src/client/js/videoRecorder.js?");

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