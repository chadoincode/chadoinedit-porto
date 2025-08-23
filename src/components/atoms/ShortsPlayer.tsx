type ShortsPlayerProps = {
  videoId: string
  type?: string
  title?: string
}

const ShortsPlayer = ({ videoId }: ShortsPlayerProps) => {
  return(
    <div className="rounded-lg">
      <iframe 
        className="hover:cursor-pointer rounded-lg max-w-[180px] md:max-w-[216px] w-full aspect-[9/16] mx-auto hover:shadow-2xl transition-transform duration-200 hover:scale-105"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`} 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default ShortsPlayer
