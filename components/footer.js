import styles from '/components/footer.module.css'
import { Row, Dropdown, Col, Nav, Tabs, Tab, DropdownButton, ButtonGroup } from 'react-bootstrap'

// トップメニューのレイアウトを含むコンポーネント

export default function Footer() {
    return (
        <footer className={styles.footer}>
			<div className="container-fluid">
				<Row>
					<Col md={3}>
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

					<Col md={6} className={styles.contacts}>
							<p className={"d-none d-lg-block"}>
								Contact() -&gt; [ E-Mail: <a href="mailto:#">"test@example.com"</a>, Soundcloud: "<a href="#">account information</a>" ]
							</p>
							<p className={"d-lg-none"}>
							Contact() -&gt; [ <a href="mailto:#"><i class="fa fa-envelope"></i></a>, <a href="#"><i class="fa fa-soundcloud"></i></a> ]
							</p>
					</Col>

					<Col md={3} className={styles.copyright}>
						<small>Copyright &copy; Leon Mah, All Rights Reserved.</small>
					</Col>

				</Row>
			</div>
        </footer>
        
        
    )
}