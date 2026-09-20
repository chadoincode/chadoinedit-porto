import YoutubePlayer from "../atoms/YoutubePlayer";
import { longformData } from "../../datas/LongformData";

const Recent = () => {
  const recentVideos = longformData.filter((video) => video.type == "recent")

  return(
    <div className="m-3">
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {
          recentVideos.map((video, index) => (
            <YoutubePlayer 
              videoId={video.videoId}
              key={index}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Recent