import Link from 'next/link'
import styles from './top-menu.module.css'

// トップメニューのレイアウトを含むコンポーネント

export default function TopMenu() {
	return (

		<nav id="top-menu">
			<ul class="nav nav-tabs" id="topMenuTab" role="tablist">
				
				<li class="nav nav-tabs">
					<Link href="#frontend">
						<a class="nav-link active" id="frontend-tab" data-toggle="tab" role="tab" aria-controls="frontend" aria-selected="true">Frontend Coding</a>
					</Link>
				</li>

				<li class="nav nav-tabs">
					<Link href="#php">
					<a class="nav-link" id="php-tab" data-toggle="tab" role="tab" aria-controls="php" aria-selected="false">PHP</a>
					</Link>
				</li>

				<li class="nav nav-tabs">
					<Link href="#beatmaking">
					<a class="nav-link" id="beatmaking-tab" data-toggle="tab" role="tab" aria-controls="beatmaking" aria-selected="false">Beat Making</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}