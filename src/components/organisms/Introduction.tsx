import Profile from "../atoms/Profile"
import PhotoProfile from "../../assets/echa.png"
import Button from "../atoms/Button"
import FadeIn from "../animations/FadeIn"

const Introduction = () => {
  return(
    <FadeIn delay={0.2}>
      <div className="flex flex-col items-center py-30 bg-hover-card">
        <Profile profileSrc={PhotoProfile.src} />
        <div className="p-5 justify-center"> 
          <h1 className="text-light text-lg md:text-2xl text-center font-medium py-3">Hi! I'm <u>sgxwraa/cha</u></h1>
          <h1 className="text-light text-lg md:text-2xl text-center font-medium">Known as <u>cha</u> — A Video Editor & Motion Graphics Enthusiast</h1>
          <div className="p-5 md:p-3 text-center">
            <p className="text-light text-md md:text-2xl">I enjoy editing various types of videos, I especially like to working on longform, shorts, and motion graphics.</p>
            <p className="text-light text-md md:text-2xl">If you'd like to work with me, feel free to reach out!</p>
          </div>
          <div className="text-center p-3">
            <p className="text-light text-md md:text-lg underline">My Socials:</p>
            <div className="flex gap-2 justify-center p-5">
              <Button href='https://www.instagram.com/sgxwraa' text="Instagram" />
              <Button href='https://www.tiktok.com/@sgxwraa' text="TikTok" />
              <Button href='https://www.discordapp.com/users/371371904889651201' text="Discord" />
              <Button href='https://www.youtube.com/@sgxwraa' text="YouTube" />
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default Introduction