import YoutubePlayer from "../atoms/YoutubePlayer";
import { videos } from "../../datas/VideosData";

const Recent = () => {
  const recentVideos = videos.filter((video) => video.type == "recent")

  return(
    <div>
      <div className="flex gap-4 m-3">
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