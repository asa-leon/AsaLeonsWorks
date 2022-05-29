import styles from './footer.module.scss'
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
					<Col lg={5} md={5}>
					<DropdownButton
						className={styles.dropdownMenuButton} 
						as={ButtonGroup}
						key={'up'}
						id={'dropdown-button-drop-up'}
						drop={'up'}
						variant="secondary"
						title='対応可能言語'
					>
						<Dropdown.Item disabled eventKey="1">HTML</Dropdown.Item>
						<Dropdown.Item disabled eventKey="2">CSS</Dropdown.Item>
						<Dropdown.Item disabled eventKey="3">Javascript</Dropdown.Item>
						<Dropdown.Item disabled eventKey="4">PHP</Dropdown.Item>
						<Dropdown.Item disabled eventKey="5">Python</Dropdown.Item>
					</DropdownButton>
					</Col>

					<Col lg={7} md={7} className={styles.copyright}>
						<small>&copy; Asa Leon, All Rights Reserved.</small>
					</Col>

				</Row>
        </footer>
        
        
    )
}