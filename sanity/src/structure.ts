import { group, singleton } from './utils'
import type { StructureResolver } from 'sanity/structure'

import { VscServerProcess } from 'react-icons/vsc'
import { BsDatabaseAdd } from 'react-icons/bs'

const structure: StructureResolver = (S, context) =>
	S.list()
		.title('Content')
		.items([
			// S.documentTypeListItem('announcement').title('Announcements'),
			// S.documentTypeListItem('redirect').title('Redirects'),

			S.documentTypeListItem('blog.post').title('Projects'),
			S.documentTypeListItem('store.items').title('Store items'),

			// S.documentTypeListItem('blog.category').title('Blog categories'),
			S.divider(),
			S.documentTypeListItem('page').title('Pages'),
			S.divider(),

			S.documentTypeListItem('navigation'),
			singleton(S, 'site').icon(VscServerProcess),

			// group(S, 'Miscellaneous', [
			// 	S.documentTypeListItem('logo').title('Logos'),
			// 	S.documentTypeListItem('pricing').title('Pricing tiers'),
			// 	S.documentTypeListItem('testimonial').title('Testimonials'),
			// ]).icon(BsDatabaseAdd),
		])

export default structure
