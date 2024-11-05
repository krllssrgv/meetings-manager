import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { Header } from '@widgets';
import { selectUser } from '@entities';
import { useAppSelector, APP_ROUTES } from '@shared';
import styles from './GeneralLayout.module.scss';


export const GeneralLayout = () => {
    const user = useAppSelector(selectUser);
    const location = useLocation();

    if (!user.wasLoaded) {
        return (
            <Navigate
                to={APP_ROUTES.login}
                state={{ from: location.pathname }}
                replace
            />
        );
    } else {
        return (
            <div className={styles.container}>
                <Header />
                <div className={styles.page}>
                    <aside className={styles.left_menu}>

                    </aside>

                    <main className={styles.content}>
                        <Outlet />
                    </main>
                </div>
            </div>
        );
    }
};
