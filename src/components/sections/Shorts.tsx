import ShortsPlayer from "../atoms/ShortsPlayer";
import { videos } from "../../datas/VideosData";
import ScrollAnimation from "../animations/ScrollAnimation";

const Shorts = () => {
  const shortsVideo = videos.filter((video) => video.type == "shorts")
  return(
      <div className="sm:flex sm:flex-row gap-4 grid grid-cols-2 sm:grid-cols-4 lg:gap-3 m-3">
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
  )
}

export default Shorts