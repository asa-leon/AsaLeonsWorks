import styles from './left-menu.module.scss'
import Image from 'next/image'
import { Row, Col, Nav, Tabs, Tab } from 'react-bootstrap'
import MainContent from './main-content'
import { useGlobalContext } from '../../context/global'

// トップメニューのレイアウトを含むコンポーネント

export default function LeftMenu() {

	const [ {titleNum, setTitleNum} ] = useGlobalContext()

	return (
		<div className="leftMenu">
			<div className={styles.leftMenuTitle}>
				<img src="/images/folderIcon.png" alt="icon of folder" />
				<h1>Asa Leon&apos; Works</h1>
			</div>
			<Nav
			variant="pills"
			activeKey={titleNum} 
			className="flex-column"
			onSelect={ (k) => setTitleNum(k) }
			>
				<Nav.Item className={styles.leftMenuNavItems}>
					<Nav.Link
					eventKey={0}><img src="/images/htmlIcon.png" alt="icon of html" />Frontend Coding</Nav.Link>
				</Nav.Item>

				<Nav.Item className={styles.leftMenuNavItems}>
					<Nav.Link eventKey={1}><img src="/images/phpIcon.png" alt="icon of php" />PHP</Nav.Link>
				</Nav.Item>

				<Nav.Item className={styles.leftMenuNavItems}>
					<Nav.Link eventKey={2}><img src="/images/beatMakingIcon.png" alt="icon of html" />Beat Making</Nav.Link>
				</Nav.Item>
			</Nav>
		</div>
	)
}
