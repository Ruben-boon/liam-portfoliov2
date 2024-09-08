import { defineArrayMember, defineField, defineType } from 'sanity'
import { VscTag } from 'react-icons/vsc'
import imageBlock from '../fragments/image-block'

export default defineType({
	name: 'store.items',
	title: 'Store items',
	icon: VscTag,
	type: 'document',
	fields: [
		defineField({
			name: 'body',
			type: 'array',
			of: [
				{ type: 'block' },
				imageBlock,
				defineArrayMember({
					type: 'code',
					options: {
						withFilename: true,
					},
				}),
			],
		}),
		defineField({
			name: 'projectImage',
			title: 'Product image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'publishDate',
			type: 'date',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'metadata',
			type: 'metadata',
		}),
	],
	preview: {
		select: {
			title: 'metadata.title',
			subtitle: 'publishDate',
			media: 'projectImage',
		},
	},
	orderings: [
		{
			title: 'Date',
			name: 'date',
			by: [{ field: 'publishDate', direction: 'desc' }],
		},
		{
			title: 'Title',
			name: 'metadata.title',
			by: [{ field: 'title', direction: 'asc' }],
		},
	],
})
