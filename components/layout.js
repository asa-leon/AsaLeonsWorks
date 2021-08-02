import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import LeftMenuEmbed from './subLayouts/left-menu'
import TopMenuEmbed from './subLayouts/top-menu'
import MainContentEmbed from './subLayouts/main-content'
import FooterEmbed from './subLayouts/footer'
import { Row, Breadcrumb, BreadcrumbItem, Tab, TabContent } from 'react-bootstrap'
import { useGlobalContext } from '../context/global'

export default function Layout({ children, home }) {

	if (process.browser) {
		const navItems = document.getElementsByClassName('nav-link')
		console.log(navItems)

		navItems.onclick = () => {
			console.log('Clicked!')
		}
	}

	const [{ titleNum, setTitleNum }] = useGlobalContext()

	return (
		<div className={styles.mainWrapper}>
			<div className={"container-fluid"}>
				<Row>

					<section className={`${styles.toLeft} col-md-3 col-sm-4`}>
						<LeftMenuEmbed></LeftMenuEmbed>
					</section>

					<section className={`${styles.toRight} col-md-9 col-sm-8`}>
						<div className={styles.topMenuPosition}>
							<TopMenuEmbed></TopMenuEmbed>

							<Breadcrumb className={styles.breadcrumNav}>
								<Breadcrumb.Item className={styles.breadcrumItem} href="/">Top</Breadcrumb.Item>
							</Breadcrumb>
						</div>

						<div className={`${styles.mainWrapper} container`}>
							

							<article className={styles.mainContentsWrapper}>
								<MainContentEmbed></MainContentEmbed>
							</article>
						</div>
					</section>
				</Row>


			</div>

			<FooterEmbed></FooterEmbed>
		</div>
	)
}