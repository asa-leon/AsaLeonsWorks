import styles from './left-menu.module.css'
import Image from 'next/image'
import { Row, Col, Nav, Tabs, Tab } from 'react-bootstrap'
import MainContent from './main-content'

// トップメニューのレイアウトを含むコンポーネント

export default function LeftMenu() {

	// main-content制御用の配列
	const titleList = ['frontend', 'php', 'beatmaking']

	return (
		<>
			<div className={styles.leftMenuTitle}>
				<img src="/images/folderIcon.png" alt="icon of folder" />
				<h1>Leon Mah's Work</h1>
			</div>
			<Nav defaultActiveKey="frontend" className="flex-column">
				<Nav.Item className={styles.leftMenuNavItems}>
					<img src="/images/htmlIcon.png" alt="icon of html" />
					<Nav.Link href="#frontend">Frontend Coding</Nav.Link>
				</Nav.Item>

				<Nav.Item className={styles.leftMenuNavItems}>
					<img src="/images/phpIcon.png" alt="icon of php" />
					<Nav.Link href="#php">PHP</Nav.Link>
				</Nav.Item>

				<Nav.Item className={styles.leftMenuNavItems}>
					<img src="/images/beatMakingIcon.png" alt="icon of html" />
					<Nav.Link href="#beatMaking">Beat Making</Nav.Link>
				</Nav.Item>
			</Nav>
		</>
	)
}
