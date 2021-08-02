import styles from './frontend-coding.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, } from '@fortawesome/free-brands-svg-icons'

export default function FrontendCoding() {
	return (
		<>
			<h1>Frontend Coding</h1>
			<div class="fec-videos-wrapper">
				<div className={styles.fecVideoContent}>
					<h2>トップページのアニメーション</h2>
					<div class="row">
						<video
							src="/videos/top_page_animation.mov"
							controls loop autoplay muted playsInline
							className={`${styles.htmlPreview} col-md-6 col-sm-12`}
							id="columnSitePreview">
						</video>
						<ul className={`col-md-6 col-sm-12`}>
							<div className={`${styles.listWithIcon} align-items-center`}>
								<span className={styles.languageIcon}>CSS</span><li>コラムにマウスホバーした時の微動(CSS)コラムにマウスホバーした時の微動(CSS)</li>
							</div>

							<div className={`${styles.listWithIcon} align-items-center`}>
								<span className={styles.languageIcon}>jQuery</span><li>ページトップへ戻る動作</li>
							</div>
							
						</ul>
					</div>
				</div>

				<div className={styles.fecVideoContent}>
					<h2>トップページのレスポンシブ</h2>
					<div class="row">
						<video
							src="/videos/top_responsive.mov"
							controls loop autoplay muted playsInline
							className={`${styles.htmlPreview} col-md-6 col-sm-12`}
							id="columnSitePreview">
						</video>
						<ul className={`col-md-6 col-sm-12`}>
							<div className={`${styles.listWithIcon} align-items-center`}>
								<span className={styles.languageIcon}>Bootstrap/CSS</span><li>Bootstrapとメディアクエリを利用したレスポンシブ対応</li>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</>

	)
}