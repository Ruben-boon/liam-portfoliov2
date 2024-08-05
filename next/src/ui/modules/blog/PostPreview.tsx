import Link from 'next/link'
import processUrl from '@/lib/processUrl'
import Img from '@/ui/Img'
import Date from '@/ui/Date'
import Categories from './Categories'

export default function PostPreview({ post }: { post: Sanity.BlogPost }) {
	return (
		<Link
			className="space-y- group block h-[400px] overflow-hidden"
			href={processUrl(post, { base: false })}
		>
			<figure className="aspect-video h-full overflow-hidden bg-ink/5 object-cover">
				<Img
					className="aspect-video w-full object-cover transition-[filter,transform] group-hover:scale-105 group-hover:brightness-110"
					image={post.metadata.image}
					imageWidth={800}
				/>
			</figure>

			{/* <div className="h3 group-hover:underline">{post.metadata.title}</div> */}

			{/* <div className="flex flex-wrap gap-x-4">
				<Date value={post.publishDate} />
				<Categories categories={post.categories} />
			</div> */}
		</Link>
	)
}
