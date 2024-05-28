
import Modal from '../UI/Modal';

const LoginPage = (props) => {
    return(
        <Modal onClose={props.onClose}>
            <button onClick={props.closing}>關閉</button>
        </Modal>
    );
}

export default LoginPage;