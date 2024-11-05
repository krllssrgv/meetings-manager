import { useLocation } from 'react-router-dom';
import { MenuLink } from '@features';
import { APP_ROUTES } from '@shared';
import styles from './LeftMenu.module.scss';


export const LeftMenu = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const currentFirstPath = location.pathname.split('/').slice(0, 2).join('/');

    const setLinks = () => {
        switch(currentFirstPath) {
            case APP_ROUTES.main:
                return (
                    <>
                        <MenuLink to='' text='Дашборд' active={true} />
                        <MenuLink to='' text='Выбрать организацию' active={true} />
                    </>
                );
            
            case APP_ROUTES.control:
                return (
                    <>
                        <MenuLink to='' text='Организация' active={true} />
                        <MenuLink to='' text='Участники' active={true} />
                        <MenuLink to='' text='Аудитории' active={true} />
                        <MenuLink to='' text='Встречи' active={true} />
                    </>
                );

            case APP_ROUTES.meetings:
                return (
                    <>
                        <MenuLink to='' text='Встречи' active={true} />
                        <MenuLink to='' text='Мои встречи' active={true} />
                    </>
                );

            case APP_ROUTES.profile:
                return (
                    <>
                        <MenuLink to='' text='Профиль' active={true} />
                        <MenuLink to='' text='Организации' active={true} />
                        <MenuLink to='' text='Приглашения' active={true} />
                    </>
                );
        }
    }

    return <aside className={styles.container}>
        {setLinks()}
    </aside>
}