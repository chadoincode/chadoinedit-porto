import ShortsPlayer from "../atoms/ShortsPlayer";
import { shortsData } from "../../datas/ShortsData";
import ScrollAnimation from "../animations/ScrollAnimation";
import ReelsPlayer from "../atoms/ReelsPlayer";

const Shorts = () => {
  // const shortsVideo = videos.filter((video) => video.type == "shorts")
  const shortsVideo = shortsData
  const isFourColumnLayout = shortsVideo.length > 4
  return(
      <div className={isFourColumnLayout ? "m-3 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4" : "m-3 flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-3"}>
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