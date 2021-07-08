import Link from 'next/link'
import styles from '/components/top-menu.module.css'
import { Nav, Tabs, Tab, Sonnet } from 'react-bootstrap'
import MainContent from './main-content'

// トップメニューのレイアウトを含むコンポーネント

export default function TopMenu() {

	// main-content制御用の配列
	const titleList = ['frontend', 'php', 'beatmaking']
	
	return (

		<Tabs defaultActiveKey="frontend" id="uncontrolled-tab-example">
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

/*
		<nav className={styles.TopMenu}>
			<ul className="nav nav-tabs" id="topMenuTab" role="tablist">
				
				<li className="col nav-item">
					<Link href="#frontend">
						<a className="nav-link active" id="frontend-tab" data-toggle="tab" role="tab" aria-controls="frontend" aria-selected="true">Frontend Coding</a>
					</Link>
				</li>

				<li className="col nav-item">
					<Link href="#php">
					<a className="nav-link" id="php-tab" data-toggle="tab" role="tab" aria-controls="php" aria-selected="false">PHP</a>
					</Link>
				</li>

				<li className="col nav-item">
					<Link href="#beatmaking">
					<a className="nav-link" id="beatmaking-tab" data-toggle="tab" role="tab" aria-controls="beatmaking" aria-selected="false">Beat Making</a>
					</Link>
				</li>
			</ul>
		</nav>
*/
	)
}
