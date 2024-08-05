// Image3D.tsx
'use client'

import React, { useState, useEffect, useRef } from 'react'
import Img from '@/ui/Img'

const Image3D = ({ image }) => {
	const figureRef = useRef(null)
	const [rotation, setRotation] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const handleMouseMove = (e) => {
			if (!figureRef.current) return
			const { left, top, width, height } =
				figureRef.current.getBoundingClientRect()
			const x = (e.clientX - left) / width
			const y = (e.clientY - top) / height
			setRotation({
				x: (y - 0.5) * 20, // Adjust the multiplier to increase/decrease the effect
				y: (x - 0.5) * -20,
			})
		}

		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [])

	return (
		<figure
			ref={figureRef}
			className="perspective h-full w-full overflow-hidden bg-black md:max-h-full"
			style={{
				perspective: '1000px',
				transformStyle: 'preserve-3d',
			}}
		>
			<div
				className="h-full w-full transition-transform duration-200 ease-out"
				style={{
					transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
					transformStyle: 'preserve-3d',
				}}
			>
				<Img
					image={image}
					imageWidth={1000}
					className="h-full w-full object-cover"
					style={{ transform: 'translateZ(50px)' }} // Adjust this value to change the "pop out" effect
				/>
			</div>
		</figure>
	)
}

export default Image3D
