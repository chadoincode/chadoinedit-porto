type YoutubePlayerProps = {
  videoId: string
}

const YoutubePlayer = ({ videoId}: YoutubePlayerProps) => {
  return(
    <div>
      <iframe 
        // className="w-1920 h-1080"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`} 
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        // referrerPolicy="strict-origin-when-cross-origin" 
        // allowFullScreen
        title="Youtube video"
      ></iframe>
    </div>
  )
}

export default YoutubePlayer