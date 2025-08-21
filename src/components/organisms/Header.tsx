import Navbar from "../molecules/Navbar"
import { Instagram } from "lucide-react"
import { Youtube } from "lucide-react"

const Header = () => {
  return(
    <div className="text-light flex justify-between px-14 py-3 sticky top-0 right-0 left-0 bg-purple-400 z-50">
      <h1 className="text-4xl ">sgxwraa</h1>
      <Navbar />
      <div className="pt-1.5 flex gap-3 font-light">
        <Instagram />
        <Youtube />
      </div>
    </div>
  )
}

export default Header