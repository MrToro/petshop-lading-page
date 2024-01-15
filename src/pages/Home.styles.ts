import styled from "styled-components";

import { Heading1, Button, Link as GlobalLink } from "../styles/Global.styles";
import Colors from "../styles/Colors";

import BG from "../assets/images/hero-background.svg";

export const Wrapper = styled.header`
	padding: 50px 170px;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		width: 30%;
		height: 100%;
		background-color: ${Colors.dark};
		z-index: -1;
	}

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 60%;
		width: 20%;
		height: 100%;
		background-image: url(${BG});
		background-repeat: no-repeat;
		background-size: cover;
		z-index: -1;
	}
`;

export const Navigation = styled.nav`
	display: grid;
	grid-template-columns: 270px 1fr 150px;
	max-width: 1200px;
	margin: 0 auto;
`;

export const Link = styled(GlobalLink)`
	&:hover {
		cursor: pointer;
	}
`;

export const Menu = styled.div`
	display: flex;
	gap: 50px;
`;

export const Container = styled.div`
	margin: 0 auto;
	margin-top: 90px;
	display: grid;
	grid-template-columns: 2fr 1fr;
	max-width: 1200px;
`;

export const LeftColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
	justify-content: center;
`;

export const RightColumn = styled.div`
	& > img {
		height: 700px;
		transform: translateY(-5%);
		overflow: visible;
	}
`;

export const Heading = styled(Heading1)``;

export const SingIn = styled(Button)`
	color: ${Colors.white};
	border-color: ${Colors.white};
`;

export const CTA = styled(Button)`
	width: max-content;
`;

export const Slider = styled.div`
	padding: 5px;
	display: flex;
	align-items: center;
	gap: 32px;
	background-color: ${Colors.blue};
	border-radius: 200px;
	position: absolute;
	transform: translateY(-75px);

	button {
		margin: 0;
	}
`;
