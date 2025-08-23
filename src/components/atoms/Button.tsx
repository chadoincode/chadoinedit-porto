type ButtonProps = {
  text: string
  href: string
  children?: string
}

const Button = ({ text, href, children }: ButtonProps) => {
  return(
     <a href={href} target="_blank" title={text} className="p-2 bg-dark-purple w-fit rounded-lg cursor-pointer text-sm md:text-lg text-white">
      {children}
      <p>{text}</p>
    </a>
  )
}

export default Button