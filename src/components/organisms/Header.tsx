import Navbar from "../molecules/Navbar"
import { Instagram } from "lucide-react"
import { Youtube } from "lucide-react"

const Header = () => {
  return(
    <div className="text-light flex justify-between mx-14 my-3">
      <h1 className="text-4xl ">chadoinedit</h1>
      <Navbar />
      <div className="pt-1.5 flex gap-3 font-light">
        <Instagram />
        <Youtube />
      </div>
    </div>
  )
}

export default Header