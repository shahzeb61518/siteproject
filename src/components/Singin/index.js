import React, { useState } from 'react'
import { Container, FormButton, FormLabel, FormWrap, FromContent, FormH1, FormInput, Icon, Form } from './UserElements';
import Axios from 'axios';






const Users = () =>{

    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    const login = () => { // eslint-disable-next-line
        Axios.post("http://localhost:3001/login",{
            username: username,
            password: password,
    
        }). then((response) => {
            console.log(response.data);
            if (setUsername === username && setPassword ===password) {
                <h1>Bem vindo</h1>
            }
        
        });
        
    };
    
    return(
        <>
            <Container>
                <FormWrap>
                    <Icon to ="/">Megapositivo</Icon>
                    <FromContent>
                        <Form action ="#">
                            <FormH1>Entrar</FormH1>
                            <FormLabel htmlFor = 'for'>Utilizador</FormLabel>
                            <FormInput type = 'user' required 
                                onChange={(e) =>{
                                    setUsername(e.target.value);
                                }}
                            />
                            <FormLabel htmlFor = 'for'>Password</FormLabel>
                            <FormInput type = 'password' required
                             onChange={(e) =>{
                                setPassword(e.target.value);
                            }} />
                            <FormButton onClick = {login}>Continuar</FormButton>
                        </Form>
                    </FromContent>
                </FormWrap>
            </Container>
        </>

    )
}

export default Users;