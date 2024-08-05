import { fetchSanity, groq } from '@/lib/sanity/fetch'
import Date from '@/ui/Date'
import Categories from './Categories'
import ReadTime from './ReadTime'
import TableOfContents from '@/ui/modules/RichtextModule/TableOfContents'
import Content from '../RichtextModule/Content'
import Breadcrumbs from '../Breadcrumbs'
import { cn } from '@/lib/utils'
import css from './Post.module.css'

export default async function Post({ post }: { post: Sanity.BlogPost }) {
	const crumbs = await fetchSanity<Sanity.Page[]>(
		groq`*[_type == 'page' && metadata.slug.current in ['index', 'blog']]{
			title,
			metadata
		}`,
	)

	return (
		<>
			<article>
				<header className="section space-y-6 text-center">
					<h1 className="h1 text-balance">{post.metadata.title}</h1>
				</header>

				<div className="section grid gap-8 lg:grid-cols-[1fr,auto]">
					<Content
						value={post.body}
						className={cn(css.body, 'grid max-w-screen-md')}
					>
						<hr />
					</Content>
				</div>
			</article>

			<Breadcrumbs
				crumbs={
					crumbs?.map((crumb) => ({
						type: 'internal',
						internal: crumb,
					})) as Omit<Sanity.Link[], '_type' | 'label'>
				}
				currentPage={post}
			/>
		</>
	)
}
