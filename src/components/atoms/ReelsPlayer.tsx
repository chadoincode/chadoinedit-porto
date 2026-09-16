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
    <div className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[360px] mx-auto rounded-lg overflow-hidden">
      <blockquote
        className="instagram-media !w-full !max-w-full"
        data-instgrm-permalink={`https://www.instagram.com/reel/${videoId}/`}
        data-instgrm-version="14"
        style={{ width: "100%", maxWidth: "100%" }}
      />
      {title && (
        <p className="text-center mt-2 text-sm text-gray-500">{title}</p>
      )}
    </div>
  )
}

export default ReelsPlayer
