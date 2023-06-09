import styled from "styled-components";
import { colors, screenSizes } from "../../Style/global";

export const BodyCard = styled.div`
	height: 150px;
	width: 20rem;
	background-image: linear-gradient(
		to right top,
		#051937,
		#004d7a,
		#008793,
		#00bf72,
		#a8eb12
	);
	border-radius: 10px;
	box-shadow: 5px 10px #00bf72;
	margin: 15px;
	align-items: center;
`;

export const BodyCardTitle = styled.div`
	font-size: 40px;
	font-weight: bold;
	font-style: italic;
	padding: 15px;
`;

export const BodyCardBody = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BodyCardIcon = styled.div`
	font-size: 35px;
	padding: 5px;
`;
export const EditInput = styled.input`
	font-size: 20px;
	font-weight: bold;
	width: 250px;
	padding: 15px;
`;
