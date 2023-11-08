export const videoPlaceholder = () => {
  const section = document.querySelector('.wish');
  if (!section) return;
  const playButton = section.querySelector('.wish__play-button');
  const overlay = section.querySelector('.wish__video-overlay');
  const video = section.querySelector('.wish__video');

  playButton.addEventListener('click', function () {
    video.play();
    overlay.classList.add('hidden');

    video.addEventListener('ended', function () {
      overlay.classList.remove('hidden');
    });
  });
}