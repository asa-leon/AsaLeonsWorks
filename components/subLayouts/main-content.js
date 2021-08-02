import { useGlobalContext } from '../../context/global'
import styles from './main-content.module.css'

export default function MainContent() {

	const [{ titleNum, setTitleNum }] = useGlobalContext()

	switch (titleNum) {
		case '0': // Frontend Coding
			return (
				<>
					<h1>Frontend Coding</h1>
					<div class="fec-videos-wrapper">

						<div class="fec-video-content">
							<p>トップページのアニメーション（jQuery使用）</p>
							<video 
								src="/videos/top_page_animation.mov" 
								width="1000px" height="576px" 
								controls loop autoplay muted playsInline 
								className={styles.htmlPreview} 
								id="columnSitePreview">
							</video>
						</div>

						<div class="fec-video-content">
							<p>トップページのアニメーション（jQuery使用）</p>
							<video 
								src="/videos/top_responsive.mov" 
								width="1000px" height="576px" 
								controls loop autoplay muted playsInline 
								className={styles.htmlPreview} 
								id="columnSitePreview">
							</video>
						</div>

					</div>
				</>
			)

		case '1':
			return (
				<>
					<h1>{titleNum}</h1>
					<p>Descriptions here.</p>
				</>
			)

		case '2':
			return (
				<>
					<h1>{titleNum}</h1>
					<p>Descriptions here.</p>
				</>
			)

		default:
			return (
				<></>
			)
	}
}