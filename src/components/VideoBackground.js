import Video from "./Video";

export default class VideoBackground extends Video {
  constructor(video1, video2, sectionSelector) {
    super(video1, video2, sectionSelector);
  }

  init() {
    if (!this.video) { return; }

    if (this.video.canPlayType('video/mp4')) {
      super._generateSourceForVideo(this.video1);
      this.video.play();

    } else if (this.video.canPlayType('video/webm') && (this.userAgent.indexOf('Safari') === -1 && this.userAgent.indexOf('Edge') === -1)) {
      super._generateSourceForVideo(this.video2);
      this.video.play();
    }
  }
}