import video1 from "../../video/wish-video.mp4"
import video2 from "../../video/wish-video.webm"

export const videoPlaceholder = () => {
  const section = document.querySelector('.wish');
  if (!section) return;
  const playButton = section.querySelector('.wish__play-button');
  const overlay = section.querySelector('.wish__video-overlay');
  const video = section.querySelector('.wish__video');
  const userAgent = navigator.userAgent;

  function addListenerToPlayButton() {
    playButton.addEventListener('click', function () {
      video.play();
      overlay.classList.add('hidden');

      video.addEventListener('ended', function () {
        overlay.classList.remove('hidden');
      });
    });
  }

  function generateSourceForVideo(version) {
    const source = document.createElement('source');
    source.src = version;
    source.type = version === video1 ? 'video/mp4' : 'video/webm';
    video.appendChild(source);
  }

  if (video.canPlayType('video/mp4')) {
    generateSourceForVideo(video1);
    addListenerToPlayButton();
  } else if (video.canPlayType('video/webm') && (userAgent.indexOf('Safari') === -1 && userAgent.indexOf('Edge') === -1)) {
    generateSourceForVideo(video2);
    addListenerToPlayButton();
  } else {
    playButton.classList.add('show-message');
  }
}