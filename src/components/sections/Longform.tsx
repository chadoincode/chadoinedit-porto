import YoutubePlayer from "../atoms/YoutubePlayer";
import { videos } from "../../datas/VideosData";
import ScrollAnimation from "../animations/ScrollAnimation";

const Longform = () => {
  const longformVideos = videos.filter((video) => video.type == "longform")
  return(
    <div>
      <div className="flex gap-4 ">
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
    </div>
  )
}

export default Longform