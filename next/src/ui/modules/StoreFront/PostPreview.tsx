import Link from 'next/link'
import processUrl from '@/lib/processUrl'
import Img from '@/ui/Img'
import Date from '@/ui/Date'
import Categories from './Categories'

export default function PostPreview({ post }: { post: Sanity.BlogPost }) {
	console.log(post)

	return (
		<Link
			className="space-y- h:280 group block overflow-hidden md:h-[320px]"
			href={`store/${processUrl(post, { base: false })}`}
		>
			<figure className="h-full w-full overflow-hidden bg-ink/5 object-cover">
				<Img
					className="h-full w-full object-cover transition-[filter,transform] group-hover:scale-105 group-hover:brightness-110"
					image={post.projectImage}
					imageWidth={800}
				/>
			</figure>
			{/* 
			<div className="h3 group-hover:underline">{post.metadata.title}</div> */}

			{/* <div className="flex flex-wrap gap-x-4">
				<Date value={post.publishDate} />
				<Categories categories={post.categories} />
			</div> */}
		</Link>
	)
}
