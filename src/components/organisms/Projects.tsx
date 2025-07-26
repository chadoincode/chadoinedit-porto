import YoutubePlayer from "../atoms/YoutubePlayer"

const Projects = () => {
  return(
    <div id="projects" className="border-2 mt-5 flex flex-col items-center p-3 text-light">
      <div id="recent-works justify-center">
        <h1 className="text-4xl text-center">My Recent Works</h1>
        <div className="flex gap-4 m-3">
          <YoutubePlayer videoId="LltGZl4L0jA?si=MKms3lZrRLWyx9yB" />
          <YoutubePlayer videoId="fye2mR4koeU?si=3G1gTRVbsc7IAaw6" />
          <YoutubePlayer videoId="LltGZl4L0jA?si=MKms3lZrRLWyx9yB" />
        </div>
      </div>
      <div id="shorts">
        <h1 className="text-4xl text-center">Shorts</h1>
        <div className="flex gap-4 m-3">
          <YoutubePlayer videoId="LltGZl4L0jA?si=MKms3lZrRLWyx9yB" />
          <YoutubePlayer videoId="fye2mR4koeU?si=3G1gTRVbsc7IAaw6" />
          <YoutubePlayer videoId="LltGZl4L0jA?si=MKms3lZrRLWyx9yB" />
        </div>
      </div>
      <div id="shorts">
        <h1 className="text-4xl text-center">Motion Graphics</h1>
        <div className="flex gap-4 m-3">
          <YoutubePlayer videoId="LltGZl4L0jA?si=MKms3lZrRLWyx9yB" />
          <YoutubePlayer videoId="fye2mR4koeU?si=3G1gTRVbsc7IAaw6" />
          <YoutubePlayer videoId="LltGZl4L0jA?si=MKms3lZrRLWyx9yB" />
        </div>
      </div>
    </div>
  )
}

export default Projects