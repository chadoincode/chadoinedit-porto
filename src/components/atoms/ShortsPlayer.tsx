type ShortsPlayerProps = {
  videoId: string
  type?: string
  title?: string
}

const ShortsPlayer = ({ videoId }: ShortsPlayerProps) => {
  return(
    <div className="rounded-lg">
      <iframe 
        className="rounded-lg shadow-lg max-w-[180px] md:max-w-[216px] w-full aspect-[9/16] mx-auto"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`} 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default ShortsPlayer

{/* <iframe width="412" height="732" src="https://www.youtube.com/embed/diGHEyqg4U8" title="jokes buat pagi hari🤔" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}