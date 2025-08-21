import Profile from "../atoms/Profile"
import PhotoProfile from "../../assets/echa.png"
import Button from "../atoms/Button"

const Introduction = () => {
  return(
    <div className="border-2 flex flex-col items-center p-3 mt-10 pt-5 ">
      {/* <Profile profileSrc={PhotoProfile.src} /> */}
      <div className="p-5 justify-center"> 
        <h1 className="text-light text-4xl text-center">Known as <i>cha</i> — A Video Editor & Motion Graphics Enthusiast</h1>
        <div className="p-3 text-center">
          <p className="text-light text-2xl">I enjoy editing various types of videos, I especially like to working on longform, shorts, and motion graphics.</p>
          <p className="text-light text-2xl">If you'd like to work with me, feel free to reach out!</p>
          <p className="text-light text-2xl">My Socials:</p>
        </div>
        <div className="flex gap-2 justify-center">
          <Button href='https://www.instagram.com/sgxwraa' text="Instagram" />
          <Button href='https://www.discordapp.com/users/371371904889651201' text="Discord" />
          <Button href='https://www.youtube.com/@sgxwraa' text="YouTube" />
          <Button href='https://www.instagram.com/xkaguma' text="Email" />
        </div>
      </div>
    </div>
  )
}

export default Introduction