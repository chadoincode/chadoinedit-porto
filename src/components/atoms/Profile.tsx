type ProfileProps = {
  profileSrc?: string
}

const Profile = ({ profileSrc }: ProfileProps) => {
  return(
    <div className="w-30 h-30 md:w-40 md:h-40 bg-amber-50 rounded-full ">
      <img src={profileSrc} alt="" />
    </div>
  )
}

export default Profile