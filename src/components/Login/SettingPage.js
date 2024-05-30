import Modal from "../UI/Modal"; 
const SettingPage = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <button onClick={props.closing}>關閉設定</button>
        </Modal>
    )
}

export default SettingPage;