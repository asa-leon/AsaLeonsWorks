import { useGlobalContext } from '../../context/global'
import FrontendCoding from './frontend-coding'

export default function MainContent() {

	const [{ titleNum, setTitleNum }] = useGlobalContext()

	switch (titleNum) {
		case '0': // Frontend Coding
			return (
				<FrontendCoding></FrontendCoding>
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