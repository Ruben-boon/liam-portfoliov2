import Header from '@/ui/header'

export default function Toggle() {
	return (
		<div>
			<label className="md:hidden">
				<input id="header-toggle" type="checkbox" className="peer hidden" />
				<span className="hidden peer-checked:inline">Close</span>
				<span className="peer-checked:hidden">Open</span>
			</label>
			<div className="header-content hidden peer-checked:block">
				<Header />
			</div>
		</div>
	)
}
