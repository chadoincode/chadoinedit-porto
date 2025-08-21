import Recent from "../sections/Recent"
import Mograph from "../sections/Mograph"
import Longform from "../sections/Longform"
import ScrollAnimation from "../animations/ScrollAnimation"

const Projects = () => {
  return(
    <div id="projects" className="border-2 mt-5 flex flex-col items-center p-3 text-light">
      <ScrollAnimation>
        <div>
          <h1>Projects</h1>
        </div>
      </ScrollAnimation>
      <section id="recent">
        <h1 className="text-4xl text-center">My Recent Works</h1>
        <Recent />
      </section>
        <ScrollAnimation>
          <h1 className="text-4xl text-center">Motion Graphics</h1>
          <Mograph />
        </ScrollAnimation>
      <section>
        <h1 className="text-4xl text-center">Longform Videos</h1>
        <Longform />
      </section>
    </div>
  )
}

export default Projects