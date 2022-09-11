import Icon from '../../src/assets/img/notification-icon.svg'

import './styles.css'

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn-container">
            <div className="dsmeta-red-btn">
                <img src={Icon} alt="Notificar" />
            </div>
        </div>
    )
}

export default NotificationButton
