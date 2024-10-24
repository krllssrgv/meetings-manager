import { useState } from "react";
import { InputsContainer, AuthError } from "@features";
import { LongButton, TextInput, Waiting } from "@shared";


export const LoginWindow = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    const loginHandle = () => {
        // Добавить логику отправки запроса
        setLoading(true);
    };

    const renderButtonOrLoading = loading ? <Waiting /> : <LongButton func={loginHandle} text='Войти' />

    return (
        <>  
            <InputsContainer>
                <TextInput
                    type='text'
                    name='email'
                    label='Email'
                    value={email}
                    setValue={setEmail}
                />
                <TextInput
                    type='password'
                    name='password'
                    label='Пароль'
                    value={password}
                    setValue={setPassword}
                />
            </InputsContainer>
            <AuthError error={error} />
            {renderButtonOrLoading}
        </>
    );
}