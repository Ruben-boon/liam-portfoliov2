import { fetchSanity, groq } from '@/lib/sanity/fetch'
import { PortableText } from '@portabletext/react'
import Filtering from '@/ui/modules/blog/BlogList/Filtering'
import List from './List'
import { stegaClean } from '@sanity/client/stega'
import { cn } from '@/lib/utils'

export default async function StoreFrontList({
	intro,
	layout,
	limit = 100,
	displayFilters,
	predefinedFilters,
}: Partial<{
	intro: any
	layout: 'grid' | 'carousel'
	limit: number
	displayFilters: boolean
	predefinedFilters: Sanity.BlogCategory[]
}>) {
	const posts = await fetchSanity<Sanity.BlogPost[]>(
		groq`*[_type == 'store.items'][0...$limit]|order(publishDate desc){
			...,
			categories[]->
		}`,
		{
			params: { limit },
			tags: ['posts'],
		},
	)

	return (
		<section className="section w-full space-y-8">
			<List
				posts={posts}
				predefinedFilters={predefinedFilters}
				className={cn('gap-x-6 gap-y-12')}
			/>
		</section>
	)
}
