type ShortsPlayerProps = {
  videoId: string
  type?: string
  title?: string
}

const ShortsPlayer = ({ videoId }: ShortsPlayerProps) => {
  return(
    <div className="rouned-lg ">
      <iframe 
        className="rounded-lg shadow-lg"
        // className="w-1920 h-1080"
        width={"216 "}
        height={"384"}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`} 
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default ShortsPlayer

{/* <iframe width="412" height="732" src="https://www.youtube.com/embed/diGHEyqg4U8" title="jokes buat pagi hari🤔" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}