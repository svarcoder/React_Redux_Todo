import styled from "styled-components";
import { colors, screenSizes } from "../../Style/global";

export const Header = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px;
	position: relative;
	width: 95%;
	align-items: center;
`;

export const Input = styled.input`
	height: 40px;
	width: 80%;
	font-size: 25px;
	border: none;
	outline: none;
	border-radius: 10px;
	padding: 5px;
	transition: 0.2s;
	box-shadow: inset 0 0 5px ${colors.black};
`;

export const Button = styled.button`
	position: absolute;
	width: 35px;
	height: 35px;
	font-size: 15px;
	right: 15%;
	border-radius: 50px;
	border: none;
	background-color: ${colors.lightGray};
	color: ${colors.white};
	transition: 0.2s all;
	box-shadow: 0 0 10px ${colors.black};
	@media only screen and (min-width: ${screenSizes.mediaS}px) {
		right: 12%;
	}
`;
