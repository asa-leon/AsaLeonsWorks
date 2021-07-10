export default function MainContent(props) {

	switch (props.title) {
		case 'frontend':
			return (
				<div>
				<h1>Frontend Coding</h1>
				<p>Descriptions here.</p>
				</div>
			)

		case 'php':
			return (
				<div>
				<h1>PHP</h1>
				<p>Descriptions here.</p>
				</div>
			)

		case 'beatmaking':
			return (
				<div>
				<h1>Beat Making</h1>
				<p>Descriptions here.</p>
				</div>
			)

		default:
			return (
				<div>
				<h1>Leon Mah's Work</h1>
				<p>Please select a tab.</p>
				</div>
			)
	}
}