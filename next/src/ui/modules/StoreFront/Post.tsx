import { fetchSanity, groq } from '@/lib/sanity/fetch'
import Date from '@/ui/Date'
import Categories from './Categories'
import ReadTime from './ReadTime'
import TableOfContents from '@/ui/modules/RichtextModule/TableOfContents'
import Content from '../RichtextModule/Content'
import Breadcrumbs from '../Breadcrumbs'
import { cn } from '@/lib/utils'
import css from './Post.module.css'
import Img from '@/ui/Img'

export default async function Post({ post }: { post: Sanity.BlogPost }) {
	console.log(post)

	return (
		<>
			<article>
				<header className="section space-y-6 p-5 pt-20 text-center">
					<h1 className="h1 text-balance">{post.metadata.title}</h1>
				</header>

				<div className="section grid gap-8 p-5 lg:grid-cols-[1fr,auto]">
					<Content
						value={post.body}
						className={cn(css.body, 'grid max-w-screen-md')}
					>
						<hr />
					</Content>
				</div>
				<div className="p-8">
					<Img className="w-full" image={post.projectImage} />
				</div>
			</article>
		</>
	)
}
