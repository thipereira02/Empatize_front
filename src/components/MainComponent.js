import React, { useState } from "react";
import styled from "styled-components";
import { MdLogout } from "react-icons/md";

import image from "../assets/acessibilidade.png";

export default function MainComponent() {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<>
			<Header>
				<h1>EMPATIZE</h1>
				<div onClick={() => setShowMenu(!showMenu)}>

				</div>
			</Header>
			<Background display={showMenu} onClick={() => setShowMenu(!showMenu)} />
			<DropDown top={showMenu}>
				<div>Minha conta</div>
				<div>
					Sair
					<MdLogout size="20px" />
				</div>
			</DropDown>
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
		cursor: pointer;
	}
`;

const Background = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	display: ${(props) => (props.display ? "" : "none")};
	z-index: 2;
`;

const DropDown = styled.div`
	top: ${(props) => (props.top ? "60px" : "-800px")};
	right: 90px;
	height: 68px;
	width: 218px;
	background-color: #DADADA;
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	cursor: pointer;
	z-index: 3;
	transition: top 150ms ease-in-out;

	div{
		width: 100%;
		height: 34px;
		border: 1px solid #000;
		color: #000;
		display: flex;
		justify-content: center;
		align-items: center;
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