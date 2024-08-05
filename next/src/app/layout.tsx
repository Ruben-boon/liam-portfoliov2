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
			<head>
				<link rel="stylesheet" href="https://use.typekit.net/ipa5yny.css" />
			</head>
			{/* <GoogleTagManager gtmId='' /> */}

			<body className="flex bg-white text-ink">
				<CustomCursor />
				<div className="flex w-full">
					{/* <SkipToContent /> */}
					{/* <Announcement /> */}
					<main id="main-content" tabIndex={-1} className="md:w-[69%]">
						{children}
					</main>
					<Header />

					{/* <Footer /> */}
					<Analytics />
					{draftMode().isEnabled && <VisualEditing />}
				</div>
			</body>
		</html>
	)
}
