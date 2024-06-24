import { useGlobalContext } from '../../context/global'
import FrontendCoding from './frontend-coding'
import PHPCoding from './php'

export default function MainContent() {

	const { titleNum, setTitleNum } = useGlobalContext()

	switch (titleNum) {
		case '0': // Frontend Coding
			return (
				<FrontendCoding></FrontendCoding>
			)

		case '1': // PHP
			return (
				<PHPCoding></PHPCoding>
			)

		case '2':
			return (
				<>
					<h1>Beat Making</h1>
					<p>鋭意作成中</p>
				</>
			)

		default:
			return (
				<></>
			)
	}
}