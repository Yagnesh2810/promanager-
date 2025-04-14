"use client"

import { useEffect, useRef } from "react"

export default function LogoGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Background
    ctx.fillStyle = "#3B82F6"
    roundRect(ctx, 0, 0, 50, 50, 10, true)

    // Circles
    ctx.fillStyle = "#FFFFFF"
    roundRect(ctx, 15, 15, 30, 20, 10, true)
    ctx.beginPath()
    ctx.arc(15, 25, 10, 0, 2 * Math.PI)
    ctx.fill()

    // Text
    ctx.fillStyle = "#333333"
    ctx.font = "bold 24px Arial"
    ctx.fillText("ProManage+", 60, 35)

    // Convert to PNG
    const dataUrl = canvas.toDataURL("image/png")
    console.log("Logo PNG data URL:", dataUrl)
  }, [])

  // Helper function for rounded rectangles
  function roundRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
    fill: boolean,
  ) {
    ctx.beginPath()
    ctx.moveTo(x + radius, y)
    ctx.lineTo(x + width - radius, y)
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
    ctx.lineTo(x + width, y + height - radius)
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
    ctx.lineTo(x + radius, y + height)
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
    ctx.lineTo(x, y + radius)
    ctx.quadraticCurveTo(x, y, x + radius, y)
    ctx.closePath()
    if (fill) {
      ctx.fill()
    } else {
      ctx.stroke()
    }
  }

  return (
    <div className="hidden">
      <canvas ref={canvasRef} width="200" height="50"></canvas>
    </div>
  )
}
