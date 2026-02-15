//1
class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time; 
    }

    //2  
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
  }
  
  //3
  const video1 = new Video("JavaScript Basics", "Alice", 120);
  video1.watch();

  //4
  const video2 = new Video("CSS Flexbox Guide", "Bob", 300);
  video2.watch(); 
  
  //5
  const videosData = [
  { title: "JS Loops", uploader: "Charlie", time: 90 },
  { title: "HTML Forms", uploader: "Dana", time: 180 },
  { title: "React Intro", uploader: "Eve", time: 240 },
  { title: "Node.js Basics", uploader: "Frank", time: 200 },
  { title: "Async JS", uploader: "Grace", time: 150 }
];

  //6
const videoInstances = videosData.map(
    video => new Video(video.title, video.uploader, video.time)
  );
  
  videoInstances.forEach(video => video.watch());
  