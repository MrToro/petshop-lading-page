import Breackpoints from "./Breakpoints";
import Colors from "./Colors";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${Colors.light};
  }
`;

export const Heading1 = styled.h1`
	color: ${Colors.dark};
	font-family: Josefin Sans;
	font-size: 9.6rem;
	font-style: normal;
	font-weight: 700;
	letter-spacing: -4.8px;
	line-height: 9.2rem;
	text-transform: uppercase;

	span {
		color: ${Colors.primary};
		font-family: Josefin Sans;
		font-size: 9.6rem;
		font-style: normal;
		font-weight: 400;
		letter-spacing: -4.8px;
		line-height: 9.2rem;
		text-transform: uppercase;
	}
`;

export const Heading2 = styled.h2<{ light?: boolean; openSans?: boolean }>`
	color: ${(props) => (props.light ? Colors.light : Colors.dark)};
	font-family: ${(props) => (props.openSans ? "Open Sans" : "Josefin Sans")};
	font-size: 4.6rem;
	font-style: normal;
	font-weight: 600;
	line-height: 6rem;
`;

export const Paragraph = styled.p<{ light?: boolean }>`
	color: ${(props) => (props.light ? Colors.light : Colors.dark)};
	font-family: Josefin Sans;
	font-size: 2.2rem;
	font-style: normal;
	font-weight: 500;
	line-height: 3.4rem;
`;

export const Link = styled.a<{ white?: boolean }>`
	color: ${(props) => (props.white ? Colors.white : Colors.dark)};
	font-family: Josefin Sans;
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 600;
	letter-spacing: 0.16px;
	line-height: 4.2rem;
	transition: color 0.16s ease-in-out;

	&:hover {
		color: ${Colors.primary};
	}
`;

export const Section = styled.section`
	padding: 80px 170px;
`;

export const Button = styled.button<{ primary?: boolean; tertiary?: boolean }>`
	align-items: flex-start;
	gap: 10px;
	padding: 12px 32px;

	background: ${(props) =>
		props.primary
			? Colors.primary
			: props.tertiary
			? "transparent"
			: Colors.dark};
	border: 2px solid ${(props) => (props.tertiary ? Colors.dark : "transparent")};
	border-radius: 190px;
	color: ${(props) => (props.tertiary ? Colors.dark : Colors.light)};
	display: inline-flex;
	font-family: Open Sans;
	font-size: 2rem;
	font-style: normal;
	font-weight: 500;
	letter-spacing: 1.8px;
	line-height: 3.8rem;

	transition: all 0.16s ease-in-out;

	&:hover {
		cursor: pointer;
		border-color: ${(props) =>
			props.tertiary ? Colors.primary : Colors.white};
		color: ${(props) => (props.tertiary ? Colors.primary : Colors.white)};
	}
`;
