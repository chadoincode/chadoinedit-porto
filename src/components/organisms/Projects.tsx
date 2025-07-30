import YoutubePlayer from "../atoms/YoutubePlayer"
import { videos } from "../../datas/VideosData"
import Recent from "../sections/Recent"
import Mograph from "../sections/Mograph"

const Projects = () => {
  return(
    <div id="projects" className="border-2 mt-5 flex flex-col items-center p-3 text-light">
      <section id="recent">
        <h1 className="text-4xl text-center">My Recent Works</h1>
        <Recent />
      </section>
      <section id="mograph">
        <h1 className="text-4xl text-center">Motion Graphics</h1>
        <Mograph />
      </section>
    </div>
  )
}

export default Projects