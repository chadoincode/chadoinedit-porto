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
    <div className="flex flex-col gap-4 lg:flex-row lg:gap-3 m-3">
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