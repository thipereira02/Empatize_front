import React from "react";
import styled from "styled-components";


export default function Persona() {
	return (
		<Body>
			<Question>
                QUEM É VOCÊ NA FILA DO PÃO?
			</Question>
			<Title>
                VOCÊ É:
			</Title>
			<img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg" alt="Persona" />
			<h3>Luana</h3>
		</Body>

	);
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        margin-top: 80px;
        width: 350px;
        height: 350px;
        border-radius: 50%;
        cursor: pointer;
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
    font-weight: 800;
    font-size: 50px;
    line-height: 60px;
`;
