import Recent from "../sections/Recent"
import Mograph from "../sections/Mograph"
import Longform from "../sections/Longform"
import ScrollAnimation from "../animations/ScrollAnimation"
import Shorts from "../sections/Shorts"

const Projects = () => {
  return(
    <div id="projects" className="border-2 mt-5 flex flex-col items-center p-3 text-light">
      <ScrollAnimation>
        <div className="flex-col place-items-center text-light m-3">
          <h1 className="text-5xl text-center font-semibold">Projects</h1>
          <p className="text-2xl">Contains all of my works!</p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation>
        <h1 className="text-4xl text-center">My Recent Works</h1>
        <Recent />
      </ScrollAnimation>
      <section id="recent">
      </section>
        <ScrollAnimation>
          <h1 className="text-4xl text-center">Motion Graphics</h1>
          <Mograph />
        </ScrollAnimation>
      <section>
        <h1 className="text-4xl text-center">Longform Videos</h1>
        <Longform />
      </section>
      <section id="shorts">
        <h1 className="text-4xl text-center">Shorts</h1>
        <Shorts />
      </section>
    </div>
  )
}

export default Projects