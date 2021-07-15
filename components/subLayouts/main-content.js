import { useGlobalContext } from '../../context/global'

export default function MainContent() {

	const [ {titleNum, setTitleNum} ] = useGlobalContext()

	switch (titleNum) {
		case '0':
			return (
				<>
				<h1>{titleNum}</h1>
				<p>Descriptions here.</p>
				</>
			)

		case '1':
			return (
				<>
				<h1>{titleNum}</h1>
				<p>Descriptions here.</p>
				</>
			)

		case '2':
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