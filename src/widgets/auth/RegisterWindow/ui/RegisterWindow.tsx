import { useState } from "react";
import { InputsContainer, AuthError, RegAsOrg } from "@features";
import { LongButton, TextInput, Waiting } from "@shared";


export const RegisterWindow = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [fathername, setFathername] = useState('');
    const [asOrg, setAsOrg] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    const registerHandle = () => {
        // Добавить логику отправки запроса
        setLoading(true);
    };

    const renderButtonOrLoading = loading ? <Waiting /> : <LongButton func={registerHandle} text='Зарегистрироваться' />

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
                <TextInput
                    type='password'
                    name='repeated-password'
                    label='Пароль повторно'
                    value={repeatedPassword}
                    setValue={setRepeatedPassword}
                />
                <TextInput
                    type='text'
                    name='name'
                    label='Имя'
                    value={name}
                    setValue={setName}
                />
                <TextInput
                    type='text'
                    name='lastname'
                    label='Фамилия'
                    value={lastname}
                    setValue={setLastname}
                />
                <TextInput
                    type='text'
                    name='fathername'
                    label='Отчество'
                    value={fathername}
                    setValue={setFathername}
                />
            </InputsContainer>
            <RegAsOrg asOrg={asOrg} setAsOrg={setAsOrg} />
            <AuthError error={error} />
            {renderButtonOrLoading}
        </>
    );
}