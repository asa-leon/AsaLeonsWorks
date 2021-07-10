import { useMainContentContext } from '../../context/main-content-context'

export default function MainContent() {

	const { titleNum, setTitleNum } = useMainContentContext()

	switch (titleNum) {
		case 0:
			return (
				<>
				<h1>{titleNum}</h1>
				<p>Descriptions here.</p>
				</>
			)

		case 1:
			return (
				<>
				<h1>{titleNum}</h1>
				<p>Descriptions here.</p>
				</>
			)

		case 2:
			return (
				<>
				<h1>{titleNum}</h1>
				<p>Descriptions here.</p>
				</>
			)

		default:
			return (
				<></>
			)
	}
}