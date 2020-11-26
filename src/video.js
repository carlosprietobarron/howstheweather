const videoLooper = (function vd() {
  function looper(elem) {
    if (elem.currentTarget.currentTime >= 4) {
      elem.currentTarget.currentTime = 1;
    }
  }

  function videoEndListener() {
    const elem = document.getElementById('bgvid');
    elem.addEventListener('timeupdate', looper);
  }

  return { videoEndListener, looper };
}());

const videoLoader = (() => {
  function putBackgr() {
    const videoWrap = document.getElementById('vidWraper');

    const videoEle = document.createElement('div');
    videoEle.setAttribute('class', 'video');
    videoWrap.appendChild(videoEle);

    const videoFile = document.createElement('video');
    videoFile.setAttribute('id', 'bgvid');
    videoFile.setAttribute('width', '320');
    videoFile.setAttribute('heigth', '240');
    videoFile.autoplay = true;
    videoFile.loop = true;
    videoFile.muted = true;
    videoFile.src = '../imag/grill.mp4';
    landDiv.appendChild(videoFile);
  }
  return { putBackgr };
})();

export { videoLooper, videoLoader };