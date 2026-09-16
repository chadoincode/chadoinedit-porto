import YoutubePlayer from "../atoms/YoutubePlayer";
import { videos } from "../../datas/VideosData";

const Mograph = () => {
  const mographVideos = videos.filter((video) => video.type == "mograph")

  return(
    <div className="m-3">
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {
          mographVideos.map((video, index) => (
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

export default Mograph