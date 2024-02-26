export default class Video {
  constructor(video1, video2, sectionSelector) {
    this.video1 = video1;
    this.video2 = video2;
    this.section = document.querySelector(`.${sectionSelector}`);
    this.video = this.section.querySelector(`.${sectionSelector}__video`);
    this.userAgent = navigator.userAgent;
  }

  _generateSourceForVideo(version) {
    const source = document.createElement('source');
    source.src = version;
    source.type = version === this.video1 ? 'video/mp4' : 'video/webm';
    this.video.appendChild(source);
  }
}