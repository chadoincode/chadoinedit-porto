import YoutubePlayer from "../atoms/YoutubePlayer";
import { videos } from "../../datas/VideosData";
import ScrollAnimation from "../animations/ScrollAnimation";

const Longform = () => {
  const longformVideos = videos.filter((video) => video.type == "longform")
  const transition = {
    duration: -2,
    ease: []
  }
  return(
    <div className="flex gap-4 m-3">
      {
        longformVideos.map((video, index) => (
          <ScrollAnimation key={index}>
            <YoutubePlayer 
              videoId={video.videoId}
              key={index}
            />
          </ScrollAnimation>
        ))
      }
    </div>
  )
}

export default Longform