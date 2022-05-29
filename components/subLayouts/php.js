import styles from './main-content.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons'

export default function PHPCoding() {
	return (
		<>
			<div className={styles.goToAnotherPageWrapper}>
				<h1>PHP</h1>
			</div>

			<div className={styles.caption}>
				<FontAwesomeIcon icon={faWindowRestore} />
				<p>このアイコンをクリックすると、実際のページが開きます。</p>
			</div>

			<div>
				<div className={styles.fecVideoContent}>
					<div className={styles.goToAnotherPageWrapper}>
						<h2>バックエンド：PHP、フロントエンド：Vue.jsのシステム</h2>
						<a href="https://booking.asa-leon.works:444/" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faWindowRestore} />
						</a>
					</div>
					<div className="row">
						<video
							src="/videos/check_vacancy.mov"
							controls loop autoPlay muted playsInline
							className={`${styles.htmlPreview} col-md-6 col-sm-12`}
							id="columnSitePreview">
						</video>
						<ul className={`col-md-6 col-sm-12`}>
							<div className={`${styles.listWithIcon} align-items-center`}>
								<span className={styles.languageIcon}>PHP</span>
								<li>入力された人数と席種に応じて、データベースに登録されている空席の数を比較し、0より下の数になる場合は『×』と表示させ、0以上の場合は『◯』と表示させる。<br />
								< br/>
									最後に『確定』をするとデータベースの値を実際に人数分の数を減算する。
								</li>
							</div>
						</ul>
					</div>
				</div>

				<div className={styles.fecVideoContent}>
					<div className={styles.goToAnotherPageWrapper}>
						<h2>入力された数の正誤確認</h2>
						<a href="https://booking.asa-leon.works:444" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faWindowRestore} />
						</a>
					</div>
					<div className="row">
						<video
							src="/videos/check_number.mov"
							controls loop autoPlay muted playsInline
							className={`${styles.htmlPreview} col-md-6 col-sm-12`}
							id="columnSitePreview">
						</video>
						<ul className={`col-md-6 col-sm-12`}>
							<div className={`${styles.listWithIcon} align-items-center`}>
								<span className={styles.languageIcon}>Vue.js</span>
								<li>誤った数値（この場合1から50までの数値）が入力された場合に、入力欄の下のメッセージが切り替わる。</li>
							</div>
						</ul>
					</div>
				</div>

				<div className={styles.fecVideoContent}>
					<div className={styles.goToAnotherPageWrapper}>
						<h2>必要な項目が入力または選択されいる事の判断</h2>
						<a href="https://booking.asa-leon.works:444" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faWindowRestore} />
						</a>
					</div>
					<div className="row">
						<video
							src="/videos/check_input_and_selected.mov"
							controls loop autoPlay muted playsInline
							className={`${styles.htmlPreview} col-md-6 col-sm-12`}
							id="columnSitePreview">
						</video>
						<ul className={`col-md-6 col-sm-12`}>
							<div className={`${styles.listWithIcon} align-items-center`}>
								<span className={styles.languageIcon}>Vue.js</span>
								<li>誤った数値ではなく、席種が一つ以上選択されている場合にのみ、『確認』ボタンが活性化状態になる。</li>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</>

	)
}