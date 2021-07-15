import styles from './top-menu.module.css'
import { Nav, Tabs, Tab, Fade } from 'react-bootstrap'
import MainContent from './main-content'
import { useGlobalContext } from '../../context/global'

// トップメニューのレイアウトを含むコンポーネント
export default function TopMenu(props) {

	const [ {titleNum, setTitleNum} ] = useGlobalContext()

	return (

		<Tabs 
		className={styles.topMenu}
		activeKey={titleNum}
		onSelect={ (k) => setTitleNum(k)}
		>
			<Tab 
				eventKey={0} title="Frontend Coding">
			</Tab>

			<Tab eventKey={1} title="PHP">
			</Tab>

			<Tab eventKey={2} title="Beat Making">
			</Tab>
		</Tabs>
	)
}
