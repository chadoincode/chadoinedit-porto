type YoutubePlayerProps = {
  videoId: string
  type?: string
  title?: string
}

const YoutubePlayer = ({ videoId}: YoutubePlayerProps) => {
  return(
    <div className="">
      <iframe 
        className="rounded-lg max-w-[480px] md:w-[960px] w-full aspect-[16/9] lg:pb-3"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`} 
        // frameborder={"0"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        title="Youtube video player"
      ></iframe>
    </div>
  )
}

export default YoutubePlayer