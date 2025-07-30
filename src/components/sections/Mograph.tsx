import YoutubePlayer from "../atoms/YoutubePlayer";
import { videos } from "../../datas/VideosData";

const Mograph = () => {
  const mographVideos = videos.filter((video) => video.type == "mograph")

  return(
    <div>
      <div className="flex gap-4 m-3">
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