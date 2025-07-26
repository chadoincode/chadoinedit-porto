type ButtonProps = {
  text: string
  link: string
}

const Button = ({ text, link }: ButtonProps) => {
  return(
    <div className="cursor-pointer bg-purple-500 p-2 rounded-2xl">
      <a href={link} target="_blank" title={text}>
        <p className="text-2xl">{text}</p>
      </a>
    </div>
  )
}

export default Button