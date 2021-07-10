import styles from '/components/contacts.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons'
library.add([faEnvelope, faSoundcloud]) // Make icons in array activated.

import { Col } from 'react-bootstrap'

export default function Contacts() {
    return (
        <Col md={7} className={styles.contacts}>
            <p className={styles.upperContact}>
                Contact() -&gt; [ E-Mail: <a href="mailto:#">"test@example.com"</a>, Soundcloud: "<a href="#">account information</a>" ]
            </p>
            <p className={styles.lowerContact}>
                Contact() -&gt; [ <a href="mailto:#"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a>, <a href="#"><FontAwesomeIcon icon={faSoundcloud}></FontAwesomeIcon></a> ]
            </p>
        </Col>
    )
    
}