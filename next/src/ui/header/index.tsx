import { getSite } from '@/lib/sanity/queries'
import Wrapper from './Wrapper'
import Link from 'next/link'
import Img from '../Img'
// import CTAList from '@/ui/CTAList'
import { cn } from '@/lib/utils'
import css from './Header.module.css'
import { PortableText } from 'next-sanity'
import CTA from '../CTA'

export default async function Header() {
	const { title, logo, headerMenu } = await getSite()

	const logoImage = logo?.image?.dark || logo?.image?.default

	return (
		<Wrapper className="fixed bottom-0 z-10 h-fit w-full bg-canvas header-closed:hidden max-md:header-open:shadow-lg md:top-0 md:h-screen md:w-[30%] lg:sticky">
			<div
				className={cn(
					css.header,
					'mb-10 flex h-full flex-col justify-between p-8', // Adjust the number of columns as needed
				)}
			>
				<div className="z- fixed right-4 top-2 justify-end md:relative md:flex">
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

				<div className="navigation flex flex-col">
					{headerMenu?.items?.map(
						(item, key) =>
							item._type === 'link' && (
								<CTA
									link={item}
									className="link-list flex flex-col p-2 pl-0 pr-8 transition-all duration-700 ease-in-out hover:bg-black hover:pl-4 hover:pr-4 hover:text-white md:p-4"
									key={key}
								>
									<div className="text-xl font-light capitalize md:text-2xl">
										{item.label} {/* Assuming the title is in `item.title` */}
									</div>
									<PortableText value={item.content} />
								</CTA>
							),
					)}
				</div>
			</div>
		</Wrapper>
	)
}
