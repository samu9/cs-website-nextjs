import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const ChatButton = props => (
    <div className="chat-button">
        <FontAwesomeIcon className="icon" icon={faWhatsapp} />
    </div>
)

export default ChatButton