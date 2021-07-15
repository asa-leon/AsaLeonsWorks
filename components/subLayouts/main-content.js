import { useGlobalContext } from '../../context/global'
import styles from './main-content.module.css'

export default function MainContent() {

	const [ {titleNum, setTitleNum} ] = useGlobalContext()

	switch (titleNum) {
		case '0':
			return (
				<>
				<h1>{titleNum}</h1>
				<p>Html based pag below.</p>
				<iframe className={styles.htmlPreview} src="/column-site/index.html" id="columnSitePreview" frameBorder="0"></iframe>
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