import { PortableText } from '@portabletext/react'

export default function StepList({
	intro,
	steps,
}: Partial<{
	intro: any
	steps: {
		content: any
	}[]
}>) {
	return (
		<section className="section space-y-8">
			{intro && (
				<header className="section richtext space-y-6 pb-5 pt-20 text-center">
					<PortableText value={intro} />
				</header>
			)}

			<ol className="section flex flex-col items-center gap-8">
				{steps?.map((step, index) => (
					<li
						className="flex max-w-screen-md flex-col items-start text-center"
						key={index}
					>
						<div className="richtext">
							<PortableText value={step.content} />
						</div>
					</li>
				))}
			</ol>
		</section>
	)
}
