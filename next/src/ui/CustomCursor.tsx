'use client'
import React, { useEffect, useState } from 'react'

interface CursorPosition {
	x: number
	y: number
}

export default function CustomCursor() {
	const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 })

	useEffect(() => {
		const updatePosition = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY })
		}

		window.addEventListener('mousemove', updatePosition)

		return () => window.removeEventListener('mousemove', updatePosition)
	}, [])

	return (
		<div
			className="custom-cursor"
			style={{
				left: `${position.x}px`,
				top: `${position.y}px`,
			}}
		/>
	)
}
