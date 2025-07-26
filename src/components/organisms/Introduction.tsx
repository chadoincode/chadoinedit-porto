import Profile from "../atoms/Profile"
import PhotoProfile from "../../assets/echa.png"

const Introduction = () => {
  return(
    <div className="border-2 flex flex-col items-center p-3">
      <Profile profileSrc={PhotoProfile.src} />
      <h1 className="text-light text-4xl">Hi! I'm Ayesha — A Video Editor & Motion Enthusiast</h1>
      <div>
        <p className="text-light text-2xl">I'm Interested in video editing reels, short, gaming content, and motion graphic.</p>
      </div>
    </div>
  )
}

export default Introduction