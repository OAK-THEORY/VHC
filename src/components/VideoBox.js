import Video from "./Video"

export default class VideoBox extends Video {
  constructor(video1, video2, sectionSelector) {
    super(video1, video2, sectionSelector);
    this.playButton = this.section.querySelector(`.${sectionSelector}__play-button`);
    this.overlay = this.section.querySelector(`.${sectionSelector}__video-overlay`);
  }

  init() {
    if (!this.video) { return; }

    if (this.video.canPlayType('video/mp4')) {
      super._generateSourceForVideo(this.video1);
      this._addListenerToPlayButton();
    } else if (this.video.canPlayType('video/webm') && (this.userAgent.indexOf('Safari') === -1 && this.userAgent.indexOf('Edge') === -1)) {
      super._generateSourceForVideo(this.video2);
      this.addListenerToPlayButton();
    } else {
      this.playButton.classList.add('show-message');
    }
  }

  _addListenerToPlayButton() {
    if (this.playButton && this.overlay)
      this.playButton.addEventListener('click', () => {
        this.video.play();

        this.overlay.classList.add('hidden');

        this.video.addEventListener('ended', () => {
          this.overlay.classList.remove('hidden');
        });
      });
  }

}
