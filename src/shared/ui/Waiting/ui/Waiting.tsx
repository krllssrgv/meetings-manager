import styles from './Waiting.module.scss';
import waitingIcon from '../../../icons/waiting.svg';

export const Waiting = () => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={waitingIcon} alt="Ожидайте" />
        </div>
    )
}