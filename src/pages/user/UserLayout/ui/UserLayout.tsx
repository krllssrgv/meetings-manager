import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { fetchUser, selectUser } from "@entities";
import { useAppDispatch, useAppSelector } from "@shared";


export const UserLayout = () => {
    const user = useAppSelector(selectUser);
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     if (!user.login && !user.wasLoaded) {
    //         dispatch(fetchUser());
    //     }
    // }, [dispatch, user.login, user.wasLoaded]);
    

    if (true) {
        return <></>
    } else {
        return (
            <>
                <Outlet />
            </>
        );
    }
}