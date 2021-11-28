import React from "react";
import styled from "styled-components";

import map from "../assets/map.png";

export default function EmpathyMap() {
	return (
		<Body>
			<Button1>
                PENSA SENTE
			</Button1>
			<Button2>
                VÊ
			</Button2>
			<Button3>
                FALA FAZ
			</Button3>
			<Button4>
                ESCUTA
			</Button4>
			<img src={map} alt="Mapa de empatia" />
			<Box>
				<div>
                    DORES
				</div>
				<div>
                    AÇÕES
				</div>
			</Box>
		</Body>
	);
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
`;

const Button1 = styled.div`
    position: absolute;
    width: 90px;
    bottom: 380px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    cursor: pointer;

    :hover{
        opacity: 0.6;
    }
`;

const Button2 = styled.div`
    position: absolute;
    width: 90px;
    bottom: 250px;
    right: calc(100vh - 25%);
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    cursor: pointer;

    :hover{
        opacity: 0.6;
    }
`;

const Button3 = styled.div`
    position: absolute;
    width: 90px;
    text-align: center;
    bottom: 100px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    cursor: pointer;

    :hover{
        opacity: 0.6;
    }
`;

const Button4 = styled.div`
    position: absolute;
    width: 90px;
    bottom: 250px;
    left: calc(100vh - 23%);
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    cursor: pointer;

    :hover{
        opacity: 0.6;
    }
`;

const Box = styled.div`
    width: 490px;
    height: 191px;
    border: 6px solid #DADADA;
    margin-top: 50px;
    display: flex;

    div{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 6px solid #DADADA;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
    }
`;