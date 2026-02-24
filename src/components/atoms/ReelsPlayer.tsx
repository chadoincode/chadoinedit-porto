"use client"

import { useEffect } from "react"

type ReelsPlayerProps = {
  videoId: string
  title?: string
}

const ReelsPlayer = ({ videoId, title }: ReelsPlayerProps) => {

  useEffect(() => {
    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script")
      script.id = "instagram-embed-script"
      script.src = "https://www.instagram.com/embed.js"
      script.async = true
      document.body.appendChild(script)
    } else {
      // @ts-ignore
      window.instgrm?.Embeds.process()
    }
  }, [])

  return (
    <div className="rounded-lg max-w-[540px] mx-auto">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`https://www.instagram.com/reel/${videoId}/`}
        data-instgrm-version="14"
      />
      {title && (
        <p className="text-center mt-2 text-sm text-gray-500">{title}</p>
      )}
    </div>
  )
}

export default ReelsPlayer
