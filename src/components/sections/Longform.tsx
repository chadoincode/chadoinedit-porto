import YoutubePlayer from "../atoms/YoutubePlayer";
import { longformData } from "../../datas/LongformData";
import ScrollAnimation from "../animations/ScrollAnimation";

const Longform = () => {
  const longformVideos = longformData.filter((long) => long.type === "longform")
  const isThreeColumnLayout = longformVideos.length > 3

  return(
    <div className={isThreeColumnLayout ? "m-3 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3" : "m-3 flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-3"}>
      {
        longformVideos.map((video, index) => (
          <ScrollAnimation key={`${video.videoId}-${index}`}>
            <YoutubePlayer 
              videoId={video.videoId}
            />
          </ScrollAnimation>
        ))
      }
    </div>
  )
}

export default Longform