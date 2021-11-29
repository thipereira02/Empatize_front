import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HomePage() {
	const [text, setText] = useState("DIVERSIFIQUE");
	const [link, setLink] = useState("/persona/1");
	const user = localStorage.getItem("user");

	useEffect(() => {
		if (!user){
			setText("LOGIN");
			setLink("/login");
		}
	},[]);

	return (
		<Body>
			<Title>
				<h1>QUEM É VOCÊ NA FILA DO PÃO?</h1>
				<h2>Viva a diversidade de experiências humanas através de jornadas de empatia</h2>
			</Title>			
			<Link to={link}>
				<button>
					{text}
				</button>
			</Link>
		</Body>
	);
}

const Body = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;

	button{
		width: 317px;
		height: 101px;
		background: linear-gradient(90.62deg, #F8ADFF -27.55%, #FEA6A6 118.51%);
		border-radius: 20px;
		font-weight: 900;
		font-size: 30px;
		line-height: 36px;
		margin-top: 70px;
		cursor: pointer;
	}
`;

const Title = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1{
		font-weight: 800;
		font-size: 50px;
		line-height: 60px;
		margin-bottom: 24px;
	}

	h2{
		font-weight: 800;
		font-size: 25px;
		line-height: 30px;
	}
`;