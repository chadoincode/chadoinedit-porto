type YoutubePlayerProps = {
  videoId: string
  type?: string
  title?: string
}

const YoutubePlayer = ({ videoId}: YoutubePlayerProps) => {
  return(
    <div>
      <iframe 
        // className="w-1920 h-1080"
        width={"560"}
        height={"315"}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`} 
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        // referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        title="Youtube video player"
      ></iframe>
    </div>
  )
}

export default YoutubePlayer