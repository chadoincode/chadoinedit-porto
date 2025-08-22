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
          <h1 className="text-3xl text-center font-medium">Projects</h1>
          <p className="text-md">Contains all of my works!</p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation>
        <section className="border-2 m-2 p-3" id="recent">
          <h1 className="text-2xl text-center font-medium">My Recent Works</h1>
          <Recent />
        </section>
      </ScrollAnimation>
      <ScrollAnimation>
        <section className="border-2 m-2 p-3" id="mograph">
          <h1 className="text-2xl text-center font-medium">Motion Graphics</h1>
          <Mograph />
        </section>
      </ScrollAnimation>
      <ScrollAnimation>
        <section className="border-2 m-2 p-3" id="longform">
          <h1 className="text-2xl text-center font-medium">Longform Videos</h1>
          <Longform />
        </section>
      </ScrollAnimation>
      <ScrollAnimation>
        <section className="border-2 m-2 p-3" id="shorts">
          <h1 className="text-2xl text-center font-medium">Shorts</h1>
          <Shorts />
        </section>
      </ScrollAnimation>
    </div>
  )
}

export default Projects