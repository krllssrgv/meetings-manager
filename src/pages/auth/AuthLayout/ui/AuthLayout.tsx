import { Outlet, useLocation, Link } from 'react-router-dom';
import classNames from 'classnames';
import { APP_ROUTES } from '@shared';
import styles from './AuthLayout.module.scss';


export const AuthLayout = () => {
    const location = useLocation();

    return (
        <section className={styles.auth_window}>
            <div className={styles.switcher}>
                <Link 
                    to={APP_ROUTES.login}
                    className={classNames(styles.link, (location.pathname === APP_ROUTES.login ? styles.link_active : null))}
                >
                    Вход
                </Link>
                <Link 
                    to={APP_ROUTES.register}
                    className={classNames(styles.link, (location.pathname === APP_ROUTES.register ? styles.link_active : null))}
                >
                    Регистрация
                </Link>
            </div>
            <Outlet />
        </section>
    );
}