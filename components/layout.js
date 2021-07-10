import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import LeftMenuEmbed from './subLayouts/left-menu'
import TopMenuEmbed from './subLayouts/top-menu'
import MainContentEmbed from './subLayouts/main-content'
import FooterEmbed from './subLayouts/footer'
import { Row } from 'react-bootstrap'

export default function Layout({ children, home }) {
	return (

		<div className={"container-fluid"}>
			<Row>

				<section className={`${styles.toLeft} col-md-3 col-sm-5 vh-100`}>
					<LeftMenuEmbed></LeftMenuEmbed>
				</section>

				<section className={`${styles.toRight} col-md-9 col-sm-7 vh-100`}>

					<TopMenuEmbed></TopMenuEmbed>
					<MainContentEmbed></MainContentEmbed>
				</section>

			</Row>

			<FooterEmbed></FooterEmbed>
		</div>
	)
}