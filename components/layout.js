import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.scss'
import LeftMenuEmbed from './subLayouts/left-menu'
import TopMenuEmbed from './subLayouts/top-menu'
import MainContentEmbed from './subLayouts/main-content'
import FooterEmbed from './subLayouts/footer'
import { Row, Breadcrumb, BreadcrumbItem, Tab, TabContent } from 'react-bootstrap'
import { useGlobalContext } from '../context/global'

export default function Layout({ children, home }) {

	if (process.window) {
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
				<div className="row row-cols-sm-1">

					<section className={`${styles.leftMenuWrapper} col-md-3 col-sm-4`}>
						<LeftMenuEmbed></LeftMenuEmbed>
					</section>

					<section className={`${styles.topMenuWrapper} offset-md-3 col-md-9 offset-sm-4 col-sm-8`}>
						<TopMenuEmbed></TopMenuEmbed>

						<Breadcrumb className={styles.breadcrumNav}>
						<Breadcrumb.Item className={styles.breadcrumItem} href="/">Top</Breadcrumb.Item>
						</Breadcrumb>
					</section>

					<article className={`${styles.mainContentWrapper} offset-md-3 col-md-9 offset-sm-4 col-sm-8`}>
						<div className="container">
							<MainContentEmbed></MainContentEmbed>
						</div>
					</article>
				</div>


			</div>

			<div className={styles.footerWrapper}>
				<FooterEmbed></FooterEmbed>
			</div>
		</div>
	)
}