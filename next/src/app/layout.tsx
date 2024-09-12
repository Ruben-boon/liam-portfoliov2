// import { GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from 'next'
// import SkipToContent from '@/ui/SkipToContent'
// import Announcement from '@/ui/Announcement'
import Header from '@/ui/header'
// import Footer from '@/ui/footer'
import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/app.css'
import CustomCursor from '@/ui/CustomCursor'
import Toggle from '@/ui/header/Toggle'

export const metadata: Metadata = {
	icons: {
		icon: `https://fav.farm/🖤`,
	},
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			{/* <GoogleTagManager gtmId='' /> */}

			<body className="flex bg-white text-ink">
				<CustomCursor />
				<div className="flex w-full flex-col lg:flex-row">
					{/* <SkipToContent /> */}
					{/* <Announcement /> */}
					<main
						id="main-content"
						tabIndex={-1}
						className="mb-32 min-h-[100dvh] md:mb-[2px] md:w-[69%]"
					>
						{/* <PageTransition>{children}</PageTransition>
						 */}
						{children}
					</main>
					{/* <Image
						src="/burger.svg"
						alt="Burger Menu Icon"
						width={50}
						height={50}
						className="fixed right-8 top-8 z-50 h-8 lg:hidden"
					/>
					<Image
						src="/cross.svg"
						alt="Burger Menu Icon"
						width={50}
						height={50}
						className="fixed right-8 top-8 z-50 h-8 lg:hidden"
					/> */}
					<Header />
					{/* <Footer /> */}
					<Analytics />
					{draftMode().isEnabled && <VisualEditing />}
				</div>
			</body>
		</html>
	)
}
