import styles from './top-menu.module.css'
import { Nav, Tabs, Tab } from 'react-bootstrap'
import MainContent from './main-content'

// トップメニューのレイアウトを含むコンポーネント

export default function TopMenu() {

	// main-content制御用の配列
	const titleList = ['frontend', 'php', 'beatmaking']

	return (

		<Tabs className={styles.topMenu} defaultActiveKey="frontend">
			<Tab eventKey="frontend" title="Frontend Coding">
				<article>
					<MainContent title={titleList[0]} />
				</article>
			</Tab>

			<Tab eventKey="php" title="PHP">
				<article>
					<MainContent title={titleList[1]} />
				</article>
			</Tab>

			<Tab eventKey="beatmaking" title="Beat Making">
				<article>
					<MainContent title={titleList[2]} />
				</article>
			</Tab>
		</Tabs>
	)
}
