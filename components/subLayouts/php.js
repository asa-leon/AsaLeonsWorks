import styles from './main-content.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons'

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

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
						<h2>入力値とデータベースの値の比較</h2>
						
						{(process.env.NODE_ENV !== 'production')
						?
							<a href="https://192.168.56.101" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faWindowRestore} />
							</a>

						:
							<a href="https://booking.asa-leon.works/" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faWindowRestore} />
							</a>
						}
					</div>

					<div className="row">
						<video
							src="/movies/check_vacancy.mov"
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
						<h2>入力される数値に応じたメッセージ変更</h2>
						
						<a href="https://booking.asa-leon.works/" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faWindowRestore} />
						</a>
					</div>

					<div className="row">
						<video
							src="/movies/check_number.mov"
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
						<h2>確認ボタンの活性化判断</h2>
						
						<a href="https://booking.asa-leon.works/" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faWindowRestore} />
						</a>
					</div>

					<div className="row">
						<video
							src="/movies/check_input_and_selected.mov"
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