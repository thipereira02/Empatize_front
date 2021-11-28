import React, { useState } from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";

export default function Persona() {
	const [disabled, setDisabled] = useState(true);

	return (
		<Body>
			<Question>
                QUEM É VOCÊ NA FILA DO PÃO?
			</Question>
			<Title>
                VOCÊ É:
			</Title>
			{disabled ?
				<div>
					<img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" alt="Persona" />
					<Action onClick={() => setDisabled(false)} />
				</div>
				:
				<Text>
					<img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" alt="Persona" />
					<div>
						<h1>Luana</h1>
						<p>Você tem 24 anos e é uma mulher trans.
Recentemente, após muitas tentativas, você conseguiu um emprego na sua área, de comunicação. Seus pais de expulsaram de casa após você assumir sua identidade. Você tem dormido na casa de amigos e tem medo de utilizar o transporte público, com receio de ser agredida. Às vezes pega carona, mas muitas vezes gasta muito com aplicativos de transporte para chegar ao trabalho. </p>
					</div>
				</Text>
			}
			{disabled ? 
				<h3>Luana</h3> 
				:
				<Next>
					<p>Veja o Mapa de Empatia</p>
					<ToNextPage />
				</Next> 
			}
		</Body>

	);
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    img{
        width: 350px;
        height: 350px;
        border-radius: 50%;
        position: relative;
    }

    h3{
        margin-top: 50px;
        font-weight: 800;
        font-size: 50px;
        line-height: 60px;
    }
`;

const Question = styled.h1`
    margin-top: 85px;
    font-weight: 800;
    font-size: 30px;
    line-height: 36px;
`;

const Title = styled.h2`
    margin-top: 47px;
    margin-bottom: 40px;
    font-weight: 800;
    font-size: 50px;
    line-height: 60px;

`;

const Action = styled(FaPlay)`
    position: absolute;
    top: 420px;
    right: 645px;
    font-size: 50px;
    cursor: pointer;
`;

const Text = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    div{
        margin-left: 100px;
    }

    h1{
        font-weight: 800;
        font-size: 50px;
        line-height: 60px;
        margin-bottom: 15px;
        color: #F8ADFF;
    }

    p{
        font-weight: 800;
        font-size: 25px;
        line-height: 30px;
    }
`;

const Next = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 80%;
    padding-left: 65%;
    margin-top: 30px;

    p{
        font-weight: 800;
        font-size: 25px;
        line-height: 30px;
    }
`;

const ToNextPage = styled(FaPlay)`
    font-size: 80px;
    cursor: pointer;
`;