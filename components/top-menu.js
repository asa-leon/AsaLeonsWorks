import styles from '/components/top-menu.module.css'
import { Nav, Tabs, Tab } from 'react-bootstrap'
import MainContent from './main-content'

// トップメニューのレイアウトを含むコンポーネント

export default function TopMenu() {

	// main-content制御用の配列
	const titleList = ['frontend', 'php', 'beatmaking']
	
	return (

		<Tabs className={styles.topMenu} defaultActiveKey="frontend" id="top-menu">
			<Tab eventKey="frontend" title="Frontend Coding">
				<MainContent title={titleList[0]} />
			</Tab>
			<Tab eventKey="php" title="PHP">
				<MainContent title={titleList[1]} />
			</Tab>
			<Tab eventKey="beatmaking" title="Beat Making">
				<MainContent title={titleList[2]} />
			</Tab>
		</Tabs>
	)
}
