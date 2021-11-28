import React from "react";
import styled from "styled-components";

import image from "../assets/acessibilidade.png";

export default function MainComponent() {
	return (
		<>
			<Header>
				<h1>EMPATIZE</h1>
				<div>

				</div>
			</Header>
			<Acessibilidade>
				<img src={image} alt="acessibilidade"/>
			</Acessibilidade>
		</>
	);
}

const Header = styled.div`
	height: 60px;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	padding: 10px 70px 0;
	background-color: #000;

	h1{
		font-weight: 800;
		font-size: 40px;
		line-height: 48px;
	}

	div{
		width: 40px;
		height: 40px;
		background: #CECECE;
		border-radius: 50%;
	}
`;

const Acessibilidade = styled.div`
	margin-top: 100px;
	display: flex;
	justify-content: end;
	margin-right: 25px;
	cursor: pointer;

	img{
		width: 36px;
	}
`;