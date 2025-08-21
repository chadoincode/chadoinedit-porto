import ShortsPlayer from "../atoms/ShortsPlayer";
import { videos } from "../../datas/VideosData";
import ScrollAnimation from "../animations/ScrollAnimation";

const Shorts = () => {
  const shortsVideo = videos.filter((video) => video.type == "shorts")
  return(
    <div>
      <div className="flex gap-4">
        {
          shortsVideo.map((video, index) => (
            <ScrollAnimation key={index}>
              <ShortsPlayer 
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

export default Shorts