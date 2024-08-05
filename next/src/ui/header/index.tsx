import { getSite } from '@/lib/sanity/queries'
import Wrapper from './Wrapper'
import Link from 'next/link'
import Img from '../Img'
// import CTAList from '@/ui/CTAList'
import Toggle from './Toggle'
import { cn } from '@/lib/utils'
import css from './Header.module.css'
import { PortableText } from 'next-sanity'
import CTA from '../CTA'

export default async function Header() {
	const { title, logo, headerMenu } = await getSite()

	const logoImage = logo?.image?.dark || logo?.image?.default

	return (
		<Wrapper className="sticky top-0 z-10 h-[100vh] bg-canvas max-md:header-open:shadow-lg md:w-[30%]">
			<div
				className={cn(
					css.header,
					'flex h-full flex-col justify-center gap-10 p-10', // Adjust the number of columns as needed
				)}
			>
				<div className="[grid-area:logo]">
					<Link
						className={cn(
							'h3 md:h2 inline-block',
							logo?.image && 'max-w-[250px]',
						)}
						href="/"
					>
						{logoImage ? (
							<Img
								className="inline-block h-[3em] w-auto"
								image={logoImage}
								alt={logo?.name || title}
							/>
						) : (
							<span className="text-gradient">{title}</span>
						)}
					</Link>
				</div>

				<div className="navigation flex flex-col gap-6">
					{headerMenu?.items?.map((item, key) => (
						<div className="link-list flex flex-col" key={key}>
							{item._type === 'link' && (
								<>
									<CTA
										className="hover:link pb-4 text-xl font-bold"
										link={item}
									/>
									<PortableText value={item.content} />
								</>
							)}
						</div>
					))}
				</div>

				<Toggle />
			</div>
		</Wrapper>
	)
}
