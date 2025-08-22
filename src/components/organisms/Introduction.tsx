import Profile from "../atoms/Profile"
import PhotoProfile from "../../assets/echa.png"
import Button from "../atoms/Button"
import FadeIn from "../animations/FadeIn"

const Introduction = () => {
  return(
    <FadeIn delay={0.2}>
      <div className="flex flex-col items-center p-3 mt-10 pt-5 ">
        <Profile profileSrc={PhotoProfile.src} />
        <div className="p-5 justify-center"> 
          <h1 className="text-light text-lg md:text-2xl text-center font-medium">Known as <u>cha</u> — A Video Editor & Motion Graphics Enthusiast</h1>
          <div className="p-4 md:p-3 text-center">
            <p className="text-light text-md md:text-lg">I enjoy editing various types of videos, I especially like to working on longform, shorts, and motion graphics.</p>
            <p className="text-light text-md md:text-lg">If you'd like to work with me, feel free to reach out!</p>
          </div>
          <div className="text-center">
            <p className="text-light text-md md:text-lg underline">My Socials:</p>
            <div className="flex gap-2 justify-center p-4">
              <Button href='https://www.instagram.com/sgxwraa' text="Instagram" />
              <Button href='https://www.tiktok.com/@sgxwraa' text="TikTok" />
              <Button href='https://www.discordapp.com/users/371371904889651201' text="Discord" />
              <Button href='https://www.youtube.com/@sgxwraa' text="YouTube" />
              <Button href='https://www.instagram.com/xkaguma' text="Email" />
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default Introduction