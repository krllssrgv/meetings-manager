import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputsContainer, AuthError, RegAsOrg } from "@features";
import { LongButton, TextInput, Waiting, API_URL, APP_ROUTES } from "@shared";


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
    const navigate = useNavigate();


    const registerHandle = () => {
        setError('');
        setLoading(true);

        const fetchRegister = async () => {
            try {
                const response = await fetch(`${API_URL}auth/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        repeated_password: repeatedPassword,
                        name: name,
                        lastname: lastname,
                        fathername: fathername,
                        as_org: asOrg
                    })
                });

                setLoading(false);
                if (response.ok) {
                    navigate(APP_ROUTES.login);
                } else {
                    const json = await response.json();
                    setError(json.error);
                }
            } catch {
                setError('Ошибка подключения');
                setLoading(false);
            }
        }

        fetchRegister();
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