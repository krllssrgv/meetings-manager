import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { store } from './store';

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/auth" element={<></>}>
                        <Route
                            index
                            element={<Navigate to="login" replace />}
                        />
                        <Route path="login" element={<></>} />
                        <Route path="register" element={<></>} />
                    </Route>
                    <Route path="/user" element={<></>}>
                        <Route index element={<Navigate to="main" replace />} />
                        <Route path="main" element={<></>} />
                        <Route path="organizations" element={<></>} />
                        <Route path="events" element={<></>} />
                        <Route path="events/:id" element={<></>} />
                        <Route path="profile" element={<></>} />
                    </Route>
                    <Route path="/own" element={<></>}>
                        <Route index element={<Navigate to="main" replace />} />
                        <Route path="main" element={<></>} />
                        <Route path="infrastructure" element={<></>} />
                        <Route path="members" element={<></>} />
                    </Route>
                    <Route
                        path="*"
                        element={<Navigate to="/auth/login" replace />}
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};
