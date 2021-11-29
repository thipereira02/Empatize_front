import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

import persona from "../assets/unsplash_J1OScm_uHUQ.png";

export default function WhatDoYou() {
	const location = useLocation();
	const page = location.state.text;

	return (
		<Body>
			<Title>
				O que você <span>{page}</span>:
			</Title>
			<Question>
				Quando você vai deixar essa fase e voltar a ser meu filho?
			</Question>
			<Box>
				<Text>
					<p>Xingamentos e piadas de estranhos enquanto anda na rua.</p>
					<p>“Vamos deixar o seu colega apresentar o projeto para o cliente? Tem mais a ver com a imagem deles.”
seu chefe, sobre o projeto que você desenvolveu</p>
				</Text>
				<Image>
					<img src={persona} alt="Persona" />
				</Image>
				<Text>
					<p>É chamada pelo nome morto.</p>
					<p>“Você é ótima, trabalha super bem, mas para essa função precisamos de alguém que represente a empresa.”
seu chefe, impedindo sua promoção</p>
				</Text>
			</Box>
			<Question>
				Quando você vai deixar essa fase e voltar a ser meu filho?
			</Question>
			<Back>
				<Link to="/empathymap/1">
					<ToPreviousPage />
				</Link>
				<p>Voltar para o Mapa</p>
			</Back> 
		</Body>
	);
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
	width: 90%;
	margin: 50px auto 0 auto;
`;

const Title = styled.div`
	padding-left: 80px;
	font-weight: 800;
	font-size: 30px;
	line-height: 36px;

	span{
		color: #FEA6A6;
	}
`;

const Question = styled.div`
	display: flex;
	justify-content: center;;
	margin-top: 60px;
	font-weight: 800;
	font-size: 25px;
	line-height: 30px;
`;

const Box = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 60px;
	font-weight: 800;
	font-size: 25px;
	line-height: 30px;
	text-align: end;
	min-height: 360px;

	img{
		width: 256px;
		height: 256px;
		border-radius: 50%;
		margin: 0 30px;
	}
`;

const Text = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Image = styled.div`
	display: flex;
	align-items: center;
`;

const Back = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
	padding-left: 80%;
	margin-top: 50px;
	padding-right: 40px;

p{
	font-weight: 800;
	font-size: 25px;
	line-height: 30px;
	margin-left: 5px;
}
`;

const ToPreviousPage = styled(FaPlay)`
	font-size: 60px;
	cursor: pointer;
	transform: rotateY(180deg)
`;