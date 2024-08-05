import { getSite } from '@/lib/sanity/queries'
import CTA from '@/ui/CTA'
import LinkList from './LinkList'
import { PortableText } from 'next-sanity'

export default async function Menu() {
	const { headerMenu } = await getSite()
	console.log(headerMenu)
	return (
		<nav className="max-md:anim-fade-to-r flex gap-y-2 [grid-area:nav] max-md:my-4 max-md:flex-col max-md:header-closed:hidden">
			{headerMenu?.items?.map((item, key) => {
				switch (item._type) {
					case 'link':
						return (
							<div className="link-list" key={key}>
								<CTA className="hover:link md:px-3" link={item} />
								<PortableText value={item.content} />
							</div>
						)
					case 'link.list':
						return <LinkList {...item} key={key} />

					default:
						return null
				}
			})}
		</nav>
	)
}
