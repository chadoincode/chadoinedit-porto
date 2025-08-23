type YoutubePlayerProps = {
  videoId: string
  type?: string
  title?: string
}

const YoutubePlayer = ({ videoId}: YoutubePlayerProps) => {
  return(
    <div className="">
      <iframe 
        className="rounded-lg w-[384px] md:w-[480px] aspect-[16/9] lg:pb-3"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`} 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        title="Youtube video player"
      ></iframe>
    </div>
  )
}

export default YoutubePlayer