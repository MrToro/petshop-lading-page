import styled from "styled-components";

import { Heading1, Button, Link as GlobalLink } from "../styles/Global.styles";
import Colors from "../styles/Colors";

import design from "../assets/images/home-design1.svg";
import titleDesign from "../assets/images/home-design2.svg";
import subTitleDesign from "../assets/images/home-design3.svg";
import linkBG from "../assets/images/home-design4.svg";
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

	& > a:first-child {
		position: relative;
		color: ${Colors.white};
	}

	& > a:first-child::before {
		content: url(${linkBG});
		position: absolute;
		transform: translate(-30%, 20%);
		z-index: -1;
	}
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
	position: relative;

	&::before {
		content: url(${titleDesign});
		position: absolute;
		transform: translate(0%, 75%);
		top: 0;
		right: 0;
	}
`;

export const RightColumn = styled.div`
	& > img {
		height: 700px;
		transform: translateY(-5%);
		overflow: visible;
	}

	&::before {
		content: url(${design});
		position: absolute;
		top: 30%;
		right: -100px;
	}
`;

export const Heading = styled(Heading1)`
	position: relative;

	&::before {
		content: url(${subTitleDesign});
		position: absolute;
		top: -100px;
		left: 30px;
	}
`;

export const SubHeading = styled.p`
	position: absolute;
	top: -100px;
	left: 100px;
	color: ${Colors.blue};
	font-family: "Open Sans";
	font-size: 2.4rem;
	font-style: normal;
	font-weight: 500;
	line-height: 3.8rem;
	letter-spacing: 0.24px;
	text-transform: none;
`;

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
