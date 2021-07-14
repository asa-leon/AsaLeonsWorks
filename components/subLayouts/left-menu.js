import styles from './left-menu.module.css'
import Image from 'next/image'
import { Row, Col, Nav, Tabs, Tab } from 'react-bootstrap'
import MainContent from './main-content'
import { useMainContentContext } from '../../context/main-content-context'

// トップメニューのレイアウトを含むコンポーネント

export default function LeftMenu() {

	const { titleNum, setTitleNum } = useMainContentContext()

	return (
		<>
			<div className={styles.leftMenuTitle}>
				<img src="/images/folderIcon.png" alt="icon of folder" />
				<h1>Leon Mah's Work</h1>
			</div>
			<Nav 
			activeKey={titleNum} 
			className="flex-column"
			onSelect={ (k) => setTitleNum(k) }
			>
				<Nav.Item className={styles.leftMenuNavItems}>
					<img src="/images/htmlIcon.png" alt="icon of html" />
					<Nav.Link eventKey={0}>Frontend Coding</Nav.Link>
				</Nav.Item>

				<Nav.Item className={styles.leftMenuNavItems}>
					<img src="/images/phpIcon.png" alt="icon of php" />
					<Nav.Link eventKey={1}>PHP</Nav.Link>
				</Nav.Item>

				<Nav.Item className={styles.leftMenuNavItems}>
					<img src="/images/beatMakingIcon.png" alt="icon of html" />
					<Nav.Link eventKey={2}>Beat Making</Nav.Link>
				</Nav.Item>
			</Nav>
		</>
	)
}
