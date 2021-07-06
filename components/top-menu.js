import Link from 'next/link'
import styles from '/components/top-menu.module.css'

// トップメニューのレイアウトを含むコンポーネント

export default function TopMenu() {
	return (

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

	)
}