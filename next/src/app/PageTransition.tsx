'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const variants = {
	initial: { opacity: 0, x: 0, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: 0 },
}

const PageTransition = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname()

	console.log('fired!')
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={pathname}
				initial="initial"
				animate="enter"
				exit="exit"
				variants={variants}
				transition={{ type: 'linear' }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	)
}

export default PageTransition
