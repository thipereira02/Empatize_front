import React from "react";
import { useState, useEffect } from "react";

const Container = styled.div`
    display: block;
    justify-content: center;
    aliens-itens:center;
`

export default function getUserInformation (props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    useEffect(() => {
       
    }, [])


    const login = () => {

    }

    return<>
    <Container>
        <div>
            <h1>EMPATIZE</h1>
            <h2>ACESSE SUA PÁGINA</h2>
            <p>Ainda não tem conta? Criei aqui</p>
        </div>

        <div>
            <p>E-mail</p>
        <input
        placeholder={}
        type={'email'}
        value={}
        onChange={}
        />
            <p>Senha</p>
        <input
        placeholder={}
        value={}
        onChange={}
        />
        <p>Esqueceu sua senha?</p>
        </div>
        <button onClick={login}>LOGIN</button>
        <p>ou</p>
        <button onClick={}>Continue com o Facebook</button>
        <button onClick={}>Continue com o Google</button>
    </Container>
</>

};