type ButtonProps = {
  text: string
  href: string
  children?: string
}

const Button = ({ text, href, children }: ButtonProps) => {
  return(
     <a href={href} target="_blank" title={text} className="p-2 bg-hover-card w-fit rounded-lg cursor-pointer text-md text-white">
      {children}
      <p>{text}</p>
    </a>
  )
}

export default Button