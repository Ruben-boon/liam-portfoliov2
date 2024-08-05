// HeroSplit.tsx
import React from 'react'
import { PortableText } from '@portabletext/react'
import Pretitle from '@/ui/Pretitle'
import CTAList from '@/ui/CTAList'
import Img from '@/ui/Img'
import { cn } from '@/lib/utils'
import { getSite } from '@/lib/sanity/queries'
import Link from 'next/link'
import Image3D from './Image3D' // Importing the Image3D component

export default async function HeroSplit({
	pretitle,
	content,
	ctas,
	image,
}: Partial<{
	pretitle: string
	content: any
	ctas: Sanity.CTA[]
	image: Sanity.Image & { onRight?: boolean }
}>) {
	const { title, logo } = await getSite()
	const logoImage = logo?.image?.dark || logo?.image?.default

	return (
		<section className="section flex flex-col md:h-screen md:flex-row md:items-stretch md:gap-x-12">
			<Image3D image={image} />

			{/* <div
				className={cn(
					'richtext mx-auto max-w-sm md:w-[30%] md:overflow-y-auto md:px-6 md:py-12',
					'flex flex-col justify-center [&_:is(h1,h2)]:text-balance',
					image?.onRight ? 'md:order-1' : 'md:order-2',
				)}
			>
				<div className="mb-6 [grid-area:logo]">
					<Link
						className={cn(
							'h3 md:h2 inline-block',
							logo?.image && 'max-w-[250px]',
						)}
						href="/"
					>
						{logoImage ? (
							<Img
								className="mb-6 inline-block h-[3em] w-auto"
								image={logoImage}
								alt={logo?.name || title}
							/>
						) : (
							<span className="text-gradient">{title}</span>
						)}
					</Link>
				</div>
				<PortableText value={content} />
				<CTAList ctas={ctas} className="!mt-6" />
			</div> */}
		</section>
	)
}
