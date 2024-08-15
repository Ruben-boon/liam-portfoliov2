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
		<Wrapper className="fixed top-0 z-10 h-[100vh] w-full bg-canvas header-closed:hidden max-md:header-open:shadow-lg md:w-[30%] lg:sticky">
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
					{headerMenu?.items?.map(
						(item, key) =>
							item._type === 'link' && (
								<CTA
									link={item}
									className="link-list flex flex-col rounded-md p-4 pl-0 pr-8 transition-all duration-300 ease-in-out hover:bg-neutral-100 hover:pl-4 hover:pr-4"
									key={key}
								>
									<div className="pb-4 text-2xl font-bold">
										{item.label} {/* Assuming the title is in `item.title` */}
									</div>
									<PortableText value={item.content} />
								</CTA>
							),
					)}
				</div>

				<Toggle />
			</div>
		</Wrapper>
	)
}
