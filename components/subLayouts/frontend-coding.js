import styles from './main-content.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons'

export default function FrontendCoding() {
	return (
		<>
			<h1>Frontend Coding</h1>

			<div className={styles.caption}>
				<FontAwesomeIcon icon={faWindowRestore} />
				<p>このアイコンをクリックすると、実際のページが開きます。</p>
			</div>

			<div>
				<article className={styles.fecVideoContent}>

					<div className={styles.goToAnotherPageWrapper}>
						<h2>トップページのアニメーション</h2>
						
						<a href="./column-site/index.html" target="_blank">
							<FontAwesomeIcon icon={faWindowRestore} />
						</a>
					</div>

					<div className="row">
						<video
							src="/videos/top_page_animation.mov"
							controls loop autoPlay muted playsInline
							className={`${styles.htmlPreview} col-md-6 col-sm-12`}
							id="columnSitePreview">
						</video>
						<ul className={`col-md-6 col-sm-12`}>
							<div className={`${styles.listWithIcon} align-items-center`}>
								<span className={styles.languageIcon}>CSS</span><li>コラムにマウスホバーした時の動作</li>
							</div>

							<div className={`${styles.listWithIcon} align-items-center`}>
								<span className={styles.languageIcon}>jQuery</span><li>ページトップへ戻る動作</li>
							</div>
							
						</ul>
					</div>
				</article>

				<div className={styles.fecVideoContent}>
					<div className={styles.goToAnotherPageWrapper}>
						<h2>トップページのレスポンシブ</h2>
						<a href="./column-site/index.html" target="_blank">
							<FontAwesomeIcon icon={faWindowRestore} />
						</a>
					</div>
					<div className="row">
						<video
							src="/videos/top_responsive.mov"
							controls loop autoPlay muted playsInline
							className={`${styles.htmlPreview} col-md-6 col-sm-12`}
							id="columnSitePreview">
						</video>
						<ul className={`col-md-6 col-sm-12`}>
							<div className={`${styles.listWithIcon} align-items-center`}>
								<span className={styles.languageIcon}>Bootstrap/CSS</span>
								<li>画面横幅が狭まった時に、コラムや関連サイトのバナーの並び数を変更</li>
								<li>同じく、フッターの要素の配置の変更</li>
							</div>
						</ul>
					</div>
				</div>

				<div className={styles.fecVideoContent}>
					<div className={styles.goToAnotherPageWrapper}>
						<h2>個別ページのアニメーション</h2>
						<a href="./column-site/column1.html" target="_blank">
							<FontAwesomeIcon icon={faWindowRestore} />
						</a>
					</div>
					<div className="row">
						<video
							src="/videos/column_animation.mov"
							controls loop autoPlay muted playsInline
							className={`${styles.htmlPreview} col-md-6 col-sm-12`}
							id="columnSitePreview">
						</video>
						<ul className={`col-md-6 col-sm-12`}>
							<div className={`${styles.listWithIcon} align-items-center`}>
								<span className={styles.languageIcon}>CSS</span><li>画面左側のナビゲーションの位置固定</li>
							</div>
						</ul>
					</div>
				</div>

				<div className={styles.fecVideoContent}>
					<div className={styles.goToAnotherPageWrapper}>
						<h2>個別ページのレスポンシブ</h2>
						<a href="./column-site/index.html" target="_blank">
							<FontAwesomeIcon icon={faWindowRestore} />
						</a>
					</div>
					<div className="row">
						<video
							src="/videos/column_responsive.mov"
							controls loop autoPlay muted playsInline
							className={`${styles.htmlPreview} col-md-6 col-sm-12`}
							id="columnSitePreview">
						</video>
						<ul className={`col-md-6 col-sm-12`}>
							<div className={`${styles.listWithIcon} align-items-center`}>
								<span className={styles.languageIcon}>CSS</span><li>画面横幅が狭まった時に、ナビゲーションがコラム部分の下に移動</li>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</>

	)
}