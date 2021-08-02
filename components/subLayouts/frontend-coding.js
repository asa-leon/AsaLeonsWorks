import styles from './frontend-coding.module.css'

export default function FrontendCoding() {
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
}