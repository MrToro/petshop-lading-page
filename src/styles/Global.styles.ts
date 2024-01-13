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
	line-height: 9.2rem;
	letter-spacing: -4.8px;
	text-transform: uppercase;

	span {
		color: ${Colors.primary};
		font-family: Josefin Sans;
		font-size: 9.6rem;
		font-style: normal;
		font-weight: 400;
		line-height: 9.2rem;
		letter-spacing: -4.8px;
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
`;

export const Section = styled.section`
	padding: 50px 170px;
`;
