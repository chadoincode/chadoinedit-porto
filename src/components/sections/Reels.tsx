import { reelsData } from "../../datas/ReelsData";
import ScrollAnimation from "../animations/ScrollAnimation";
import ReelsPlayer from "../atoms/ReelsPlayer";

const Reels = () => {
  // const reelsVideo = videos.filter((video) => video.type == "reels")
  const reelsVideo = reelsData
  const isThreeColumnLayout = reelsVideo.length > 3
  return(
      <div className={isThreeColumnLayout ? "m-3 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3" : "m-3 flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-3"}>
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