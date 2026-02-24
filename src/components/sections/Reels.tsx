import { videos } from "../../datas/VideosData";
import ScrollAnimation from "../animations/ScrollAnimation";
import ReelsPlayer from "../atoms/ReelsPlayer";

const Reels = () => {
  const reelsVideo = videos.filter((video) => video.type == "reels")
  return(
      <div className="sm:flex sm:flex-row gap-4 grid grid-cols-2 sm:grid-cols-4 lg:gap-3 m-3">
        {
          reelsVideo.map((video, index) => (
            <ScrollAnimation key={index}>
              <ReelsPlayer
                videoId={video.videoId}
                key={index}
              />
            </ScrollAnimation>
          ))
        }
      </div>
  )
}

export default Reels