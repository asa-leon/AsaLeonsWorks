import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import LeftMenuEmbed from './subLayouts/left-menu'
import TopMenuEmbed from './subLayouts/top-menu'
import MainContentEmbed from './subLayouts/main-content'
import FooterEmbed from './subLayouts/footer'
import { Row, Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import { useGlobalContext } from '../context/global'

export default function Layout({ children, home }) {

	const { titleNum, setTitleNum } = useGlobalContext()

	return (
		<>
			<div className={"container-fluid"}>
				<Row>

					<section className={`${styles.toLeft} col-md-3 col-sm-4 vh-100`}>
						<LeftMenuEmbed></LeftMenuEmbed>
					</section>

					<section className={`${styles.toRight} col-md-9 col-sm-8 vh-100`}>
						<TopMenuEmbed></TopMenuEmbed>

						<div className={`${styles.mainWrapper} container`}>
							<Breadcrumb className={styles.breadcrumNav}>
								<Breadcrumb.Item className={styles.breadcrumItem} href="/">Top</Breadcrumb.Item>
							</Breadcrumb>

							<article className={styles.mainContentsWrapper}>
								<MainContentEmbed></MainContentEmbed>
							</article>
						</div>
					</section>
				</Row>


			</div>

			<FooterEmbed></FooterEmbed>
		</>
	)
}