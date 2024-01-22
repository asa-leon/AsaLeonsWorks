import styles from './main-content.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons'

export default function FrontendCoding() {
	return (
		<>
			<h1>Frontend Coding</h1>

			<div className={styles.caption}>
				<FontAwesomeIcon icon={faWindowRestore} />
				<p>このアイコンをクリックすると、モックアップサイトを閲覧できます。</p>
			</div>

			<div>
				<article className={styles.fecVideoContent}>

					<div className={styles.goToAnotherPageWrapper}>
						<h2>トップページのCSSとjQueryを利用した挙動</h2>
						
						<a href="./mockup-site/index.html" target="_blank">
							<FontAwesomeIcon icon={faWindowRestore} />
						</a>
					</div>

					<div className="row">
						<video
							src="/movies/top_page.mov"
							controls loop autoPlay muted playsInline
							className={`${styles.htmlPreview} col-md-6 col-sm-12`}
							id="columnSitePreview">
						</video>
						<ul className={`col-md-6 col-sm-12`}>
							<div className={`${styles.listWithIcon} align-items-center`}>
								<span className={styles.languageIcon}>CSS</span><li>タイトルのエリアにカーソルが来た時の動作</li>
							</div>
							<div className={`${styles.listWithIcon} align-items-center`}>
								<span className={styles.languageIcon}>jQuery</span><li>ページのトップへ戻る動作</li>
							</div>
							<div className={`${styles.listWithIcon} align-items-center`}>
								<span className={styles.languageIcon}>Bootstrap/CSS</span>
								<li>画面横幅が狭まった時に、タイトルの幅や並び数を変化させる</li>
							</div>
						</ul>
					</div>
				</article>

				<div className={styles.fecVideoContent}>
					<div className={styles.goToAnotherPageWrapper}>
						<h2>子ページのCSSを利用した挙動</h2>
						<a href="./mockup-site/child-page.html" target="_blank">
							<FontAwesomeIcon icon={faWindowRestore} />
						</a>
					</div>
					<div className="row">
						<video
							src="/movies/child_page.mov"
							controls loop autoPlay muted playsInline
							className={`${styles.htmlPreview} col-md-6 col-sm-12`}
							id="columnSitePreview">
						</video>
						<ul className={`col-md-6 col-sm-12`}>
							<div className={`${styles.listWithIcon} align-items-center`}>
								<span className={styles.languageIcon}>CSS</span><li>タイトルや記事にカーソルが来た時の動作</li>
							</div>
							<div className={`${styles.listWithIcon} align-items-center`}>
								<span className={styles.languageIcon}>CSS</span><li>画面左側のナビゲーションの位置固定</li>
							</div>
							<div className={`${styles.listWithIcon} align-items-center`}>
								<span className={styles.languageIcon}>Bootstrap/CSS</span>
								<li>画面横幅が狭まった時に、左側のナビゲーションと記事リストの幅や並び方を変化させる</li>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</>

	)
}