"use client"

import { useState } from "react"

interface YouTubeVideoProps {
  videoId: string
  className?: string
  config?: {
    lazyLoad?: boolean
    mute?: boolean
    showControls?: boolean
    modestBranding?: boolean
  }
}

export function YouTubeVideo({
  videoId,
  className = "w-full h-full",
  config = {
    lazyLoad: true,
    mute: true,
    showControls: true,
    modestBranding: true,
  },
}: YouTubeVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const params = new URLSearchParams({
    autoplay: "0",
    controls: config.showControls ? "1" : "0",
    mute: config.mute ? "1" : "0",
    modestbranding: config.modestBranding ? "1" : "0",
    rel: "0",
  }).toString()

  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?${params}`}
        title="Nirapod Laser Physiotherapy Center"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading={config.lazyLoad ? "lazy" : "eager"}
        className="absolute inset-0"
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && <div className="absolute inset-0 bg-gray-900 animate-pulse" />}
    </div>
  )
}
