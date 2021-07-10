export default function MainContent(props) {

	switch (props.title) {
		case 'frontend':
			return (
				<>
				<h1>Frontend Coding</h1>
				<p>Descriptions here.</p>
				</>
			)

		case 'php':
			return (
				<>
				<h1>PHP</h1>
				<p>Descriptions here.</p>
				</>
			)

		case 'beatmaking':
			return (
				<>
				<h1>Beat Making</h1>
				<p>Descriptions here.</p>
				</>
			)

		default:
			return (
				<></>
			)
	}
}