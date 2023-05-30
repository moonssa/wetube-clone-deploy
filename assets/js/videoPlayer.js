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

/***/ "./src/client/js/videoPlayer.js":
/*!**************************************!*\
  !*** ./src/client/js/videoPlayer.js ***!
  \**************************************/
/***/ (() => {

eval("const video = document.querySelector(\"video\");\nconst playBtn = document.getElementById(\"play\");\nconst playBtnIcon = playBtn.querySelector(\"i\");\nconst muteBtn = document.getElementById(\"mute\");\nconst muteBtnIcon = muteBtn.querySelector(\"i\");\nconst time = document.getElementById(\"time\");\nconst volumeRange = document.getElementById(\"volume\");\nconst currentTime = document.getElementById(\"currentTime\");\nconst totalTime = document.getElementById(\"totalTime\");\nconst timeline = document.getElementById(\"timeline\");\nconst fullScreenBtn = document.getElementById(\"fullScreen\");\nconst fullScreenIcon = fullScreenBtn.querySelector(\"i\");\nconst videoContainer = document.getElementById(\"videoContainer\");\nconst videoControls = document.getElementById(\"videoControls\");\nlet controlsTimeout = null;\nlet controlsMovementTimeout = null;\nlet volumeValue = 0.5;\nvideo.volume = volumeValue;\n\nconst handlePlayClick = e => {\n  if (video.paused) {\n    video.play();\n  } else {\n    video.pause();\n  } // playBtn.innerText = video.paused ? \"Play\" : \"Paused\";\n\n\n  playBtnIcon.classList = video.paused ? \"fas fa-play\" : \"fas fa-pause\";\n};\n\nconst handleMute = e => {\n  if (video.muted) {\n    video.muted = false;\n  } else {\n    video.muted = true;\n  } // muteBtn.innerText = video.muted ? \"Unmute\" : \"Mute\";\n\n\n  muteBtnIcon.classList = video.muted ? \"fas fa-volume-mute\" : \"fas fa-volume-up\";\n  volumeRange.value = video.muted ? 0 : volumeValue;\n};\n\nconst handleVolumeChange = event => {\n  const {\n    value\n  } = event.target;\n\n  if (video.muted) {\n    video.muted = false; // muteBtn.innerText = \"Mute\";\n\n    muteBtnIcon.classList = \"fas fa-volume-up\";\n  }\n\n  video.volume = value;\n  volumeValue = value;\n  console.log(value);\n};\n\nconst formatTime = seconds => new Date(seconds * 1000).toISOString().substr(14, 5);\n\nconst handleLoadedMetadata = () => {\n  totalTime.innerText = formatTime(Math.floor(video.duration));\n  timeline.max = Math.floor(video.duration);\n};\n\nconst handleTimeUpdate = () => {\n  currentTime.innerText = formatTime(Math.floor(video.currentTime));\n  timeline.value = Math.floor(video.currentTime);\n};\n\nconst handleTimelineChange = event => {\n  const {\n    value\n  } = event.target;\n  video.currentTime = value;\n}; // Full Screen\n\n\nconst handleFullScreen = () => {\n  const fullscreen = document.fullscreenElement;\n\n  if (fullscreen === null) {\n    videoContainer.requestFullscreen();\n    fullScreenIcon.classList = \"fas fa-compress\";\n  } else {\n    document.exitFullscreen();\n    fullScreenIcon.classList = \"fas fa-expand\";\n  }\n};\n\nconst hideControls = () => videoControls.classList.remove(\"showing\");\n\nconst handleMouseMove = () => {\n  if (controlsTimeout) {\n    clearTimeout(controlsTimeout);\n    controlsTimeout = null;\n  }\n\n  if (controlsMovementTimeout) {\n    clearTimeout(controlsMovementTimeout);\n    controlsMovementTimeout = null;\n  }\n\n  videoControls.classList.add(\"showing\"); // mouse가 움직이는거 시간 카운트 ( 콘트롤바 숨기기 위해)\n\n  controlsMovementTimeout = setTimeout(hideControls, 3000);\n};\n\nconst handleMouseLeave = () => {\n  // 3초 후에 컨트롤러를 숨겨주기 위해\n  controlsTimeout = setTimeout(hideControls, 3000);\n};\n\nconst handleEnded = () => {\n  console.log(\"Video Ended\");\n  const {\n    id\n  } = videoContainer.dataset;\n  fetch(`/api/videos/${id}/view`, {\n    method: \"POST\"\n  });\n};\n\nconsole.log(videoContainer.dataset);\nplayBtn.addEventListener(\"click\", handlePlayClick);\nmuteBtn.addEventListener(\"click\", handleMute);\nvolumeRange.addEventListener(\"input\", handleVolumeChange);\nvideo.addEventListener(\"loadedmetadata\", handleLoadedMetadata);\nvideo.addEventListener(\"timeupdate\", handleTimeUpdate);\nvideo.addEventListener(\"ended\", handleEnded);\ntimeline.addEventListener(\"input\", handleTimelineChange);\nfullScreenBtn.addEventListener(\"click\", handleFullScreen);\nvideo.addEventListener(\"mousemove\", handleMouseMove);\nvideo.addEventListener(\"mouseleave\", handleMouseLeave);\n\n//# sourceURL=webpack://wetube/./src/client/js/videoPlayer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/videoPlayer.js"]();
/******/ 	
/******/ })()
;