import YoutubePlayer from "../atoms/YoutubePlayer";
import { videos } from "../../datas/VideosData";

const Recent = () => {
  const recentVideos = videos.filter((video) => video.type == "recent")

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