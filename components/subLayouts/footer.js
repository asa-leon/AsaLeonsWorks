import styles from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons'
library.add([faEnvelope, faSoundcloud])

import { Row, Dropdown, Col, DropdownButton, ButtonGroup } from 'react-bootstrap'

// トップメニューのレイアウトを含むコンポーネント

export default function Footer() {
    return (
        <footer className={`${styles.footer} container-fluid`}>
			
				<Row className={styles.footerRow}>
					<Col lg={2} md={2}>
					<DropdownButton
						className={styles.dropdownMenuButton} 
						as={ButtonGroup}
						key={'up'}
						id={'dropdown-button-drop-up'}
						drop={'up'}
						variant="secondary"
						title='対応可能言語'
					>
						<Dropdown.Item eventKey="1">HTML</Dropdown.Item>
						<Dropdown.Item eventKey="2">CSS</Dropdown.Item>
						<Dropdown.Item eventKey="3">Javascript</Dropdown.Item>
						<Dropdown.Item eventKey="4">PHP</Dropdown.Item>
						<Dropdown.Item eventKey="5">Python</Dropdown.Item>
					</DropdownButton>
					</Col>

					<Col lg={7} md={7} className={styles.contacts}>
						<p className={styles.upperContact}>
							Contacts = [ E-Mail: <a href="mailto:#">"test@example.com"</a>, Soundcloud: "<a href="#">account information</a>" ]
						</p>
						<p className={styles.lowerContact}>
							Contact() -&gt; [ <a href="mailto:#"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a>, <a href="#"><FontAwesomeIcon icon={faSoundcloud}></FontAwesomeIcon></a> ]
						</p>
        			</Col>

					<Col lg={3} md={3} className={styles.copyright}>
						<small>&copy; Leon Mah, All Rights Reserved.</small>
					</Col>

				</Row>
        </footer>
        
        
    )
}