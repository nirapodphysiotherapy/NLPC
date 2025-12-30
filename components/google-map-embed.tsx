"use client"

interface GoogleMapEmbedProps {
  embedUrl: string
  height?: string
  className?: string
}

export function GoogleMapEmbed({ embedUrl, height = "500px", className = "" }: GoogleMapEmbedProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`} style={{ height }}>
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Nirapod Laser Physiotherapy Center Location"
      />
    </div>
  )
}
