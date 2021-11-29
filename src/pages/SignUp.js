import React, { useState } from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [company, setCompany] = useState("");
	const [position, setPosition] = useState("");
	const [birthDate, setBirthDate] = useState("");

	function signUp(e) {
		e.preventDefault();
		setLoading(true);
	}

	return (
		<>
			<Title>CRIE SUA CONTA</Title>
			<Body>
				<Box>
					<form onSubmit={signUp}>
						<div>
							<InputName 
								type="text" 
								placeholder="Nome" 
								value={name} 
								onChange={e => setName(e.target.value)}
								onInvalid={e => e.target.setCustomValidity("Você deve inserir um nome aqui")} 
								onInput={e => e.target.setCustomValidity("")}
								required
							/>
							<InputSurname 
								type="text" 
								placeholder="Sobrenome" 
								value={surname} 
								onChange={e => setSurname(e.target.value)}
								onInvalid={e => e.target.setCustomValidity("Você deve inserir um sobrenome aqui")} 
								onInput={e => e.target.setCustomValidity("")}
								required
							/>
						</div>
						<Input 
							type="email" 
							placeholder="E-mail" 
							value={email} 
							onChange={e => setEmail(e.target.value)}
							onInvalid={e => e.target.setCustomValidity("Você deve inserir um email válido aqui")} 
							onInput={e => e.target.setCustomValidity("")}
							required 
						/>
						<Input 
							type="password" 
							placeholder="Senha" 
							value={password} 
							onChange={e => setPassword(e.target.value)}
							onInvalid={e => e.target.setCustomValidity("Insira uma senha com no mínimo 6 caracteres")} 
							onInput={e => e.target.setCustomValidity("")}
							required
						/>
						<Input 
							type="password" 
							placeholder="Repita sua senha" 
							value={confirmPassword} 
							onChange={e => setConfirmPassword(e.target.value)}
							onInvalid={e => e.target.setCustomValidity("Repita a senha aqui")} 
							onInput={e => e.target.setCustomValidity("")}
							required
						/>
						<Input 
							type="text" 
							placeholder="Empresa" 
							value={company} 
							onChange={e => setCompany(e.target.value)}
							onInvalid={e => e.target.setCustomValidity("Você deve inserir o nome da empresa aqui")} 
							onInput={e => e.target.setCustomValidity("")}
						/>
						<Input 
							type="text" 
							placeholder="Cargo" 
							value={position} 
							onChange={e => setPosition(e.target.value)}
							onInvalid={e => e.target.setCustomValidity("Você deve inserir seu cargo aqui")} 
							onInput={e => e.target.setCustomValidity("")}
						/>
						<InputBirthDate
							type="date" 
							placeholder="Data de nascimento" 
							value={birthDate} 
							onChange={e => setBirthDate(e.target.value)}
							onInvalid={e => e.target.setCustomValidity("Selecione sua data de nascimento")} 
							onInput={e => e.target.setCustomValidity("")}
							required
						/>
						<Button type="submit" disabled={loading} >
                            Criar conta
						</Button>
					</form>
				</Box>
				<BoxRight>
					<p>ou</p>
					<FBButton>
						<FaFacebook color="#FFF" size="20px" />
                        Continue com o Facebook
					</FBButton>
					<GooButton>
						<FcGoogle />
                        Continue com o Google
					</GooButton>
				</BoxRight>
			</Body>
		</>
	);
}

const Body = styled.div`
    width: 80%;
    display: flex;
    margin: 130px auto 0 auto;
`;

const Title = styled.div`
    font-weight: 800;
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 90px;
`;

const Box = styled.div`
    width: 50%;
`;

const BoxRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto 0;

    p{
        font-weight: 800;
        font-size: 25px;
        line-height: 30px;
    }
`;

const Input = styled.input`
    padding: 16px;
    border: 1px solid ${props => props.invalid ? "#DC3545" : "#CCC"};
    background-color: ${props => props.invalid ? "#DC3545" : "#FFF"};
    border-radius: 20px;
    margin-bottom: 8px;
    width: 400px;
    height: 51px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;

    ::placeholder{
        font-size: 20px;
        color: #60484866;
    }
`;

const InputName = styled.input`
    padding: 16px;
    border: 1px solid ${props => props.invalid ? "#DC3545" : "#CCC"};
    background-color: ${props => props.invalid ? "#DC3545" : "#FFF"};
    border-radius: 20px;
    margin-bottom: 8px;
    width: 164px;
    height: 51px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;

    ::placeholder{
        font-size: 20px;
        color: #60484866;
    }
`;

const InputSurname = styled.input`
    padding: 16px;
    border: 1px solid ${props => props.invalid ? "#DC3545" : "#CCC"};
    background-color: ${props => props.invalid ? "#DC3545" : "#FFF"};
    border-radius: 20px;
    margin-bottom: 8px;
    width: 228px;
    height: 51px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    margin-left: 8px;

    ::placeholder{
        font-size: 20px;
        color: #60484866;
    }
`;

const InputBirthDate = styled.input`
    padding: 16px;
    border: 1px solid ${props => props.invalid ? "#DC3545" : "#CCC"};
    background-color: ${props => props.invalid ? "#DC3545" : "#FFF"};
    border-radius: 20px;
    margin-bottom: 8px;
    width: 259px;
    height: 51px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;

    ::placeholder{
        font-size: 20px;
        color: #60484866;
    }
`;

const Button = styled.button`
    color: #000;
    opacity: ${props => props.disabled ? "0.7" : "1"};
    cursor: ${props => props.disabled ? "inherit": "pointer"};
    font-weight: 900;
    font-size: 18px;
    line-height: 22px;
    width: 317px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    background: linear-gradient(90.62deg, #F8ADFF -27.55%, #FEA6A6 118.51%);
    border-radius: 20px;
`;

const FBButton = styled.button`
    width: 345px;
    height: 54px;
    padding: 0 50px;
    background: #1877F2;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFF;
    font-size: 18px;
    font-weight: 900;
    margin: 50px 0 20px;
    cursor: pointer;
`;

const GooButton = styled.button`
    width: 345px;
    height: 54px;
    padding: 0 50px;
    background: #FFF;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;
    font-size: 18px;
    font-weight: 900;
    cursor: pointer;
`;