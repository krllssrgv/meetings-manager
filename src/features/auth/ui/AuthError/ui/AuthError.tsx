import styles from './AuthError.module.scss';

type Props = {
    error: string;
}

export const AuthError = ({ error }: Props) => {
    return (
        <div className={styles.error}>
            {error}
        </div>
    );
}