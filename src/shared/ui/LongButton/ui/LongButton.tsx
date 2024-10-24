import styles from './LongButton.module.scss';


type Props = {
    text: string;
    func: () => void;
};


export const LongButton = ({ func, text }: Props) => {
    return(
        <button className={styles.button} onClick={func}>
            {text}
        </button>
    );
};