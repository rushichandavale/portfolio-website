import { useEffect, useMemo, useState } from 'react'

const Cloud = ({ children, radius = 250, autoRotate = true, speed = 1.5, className = '' }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 })
  const count = children.length

  useEffect(() => {
    if (!autoRotate) return
    let animationFrameId
    const startTime = Date.now()

    const animate = () => {
      const now = Date.now()
      const delta = (now - startTime) * 0.001 * speed
      setRotation({
        x: delta * 0.5,
        y: delta,
        z: 0
      })
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(animationFrameId)
  }, [autoRotate, speed])

  const tags = useMemo(() => {
    const phi = Math.PI * (3 - Math.sqrt(5))
    return children.map((child, i) => {
      const y = 1 - (i / (count - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = phi * i

      return {
        child,
        x: Math.cos(theta) * r,
        y: y,
        z: Math.sin(theta) * r
      }
    })
  }, [children, count])

  return (
    <div
      className={`relative flex items-center justify-center preserve-3d ${className}`}
      style={{
        width: radius * 2,
        height: radius * 2,
        transformStyle: 'preserve-3d'
      }}
    >
      <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
        {tags.map((tag, i) => {
          const { x, y, z } = tag
          
          // Apply rotation
          const cosX = Math.cos(rotation.x)
          const sinX = Math.sin(rotation.x)
          const cosY = Math.cos(rotation.y)
          const sinY = Math.sin(rotation.y)

          const rotatedX = x * cosY - z * sinY
          const rotatedZ = z * cosY + x * sinY
          const rotatedY = y * cosX - rotatedZ * sinX
          const finalZ = rotatedZ * cosX + y * sinX

          // Perspective scaling
          const scale = (radius + finalZ * radius) / (radius * 2) 
          const alpha = Math.max(0.1, (scale + 0.5) / 1.5) // Fades out elements in back
          
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 transition-transform ease-out will-change-transform flex items-center justify-center"
              style={{
                transform: `translate3d(${rotatedX * radius}px, ${rotatedY * radius}px, ${finalZ}px) scale(${1 + scale * 0.5})`, // Reduced Z translation effect for stability? No, standard 3D.
                opacity: alpha,
                zIndex: Math.floor(scale * 100),
                transformOrigin: '50% 50%'
              }}
            >
              <div className="transform -translate-x-1/2 -translate-y-1/2"> 
                {tag.child} 
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cloud
