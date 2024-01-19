import styled from "styled-components";
import Colors from "../../styles/Colors";

import { Section as GlobalSection } from "../../styles/Global.styles";

import Images from "./Pets.images";

export const Wrapper = styled(GlobalSection)`
	position: relative;
	padding: 50px 170px;
	background-color: ${Colors.primary};

	&::before {
		content: url(${Images.design});
		position: absolute;
		top: 16px;
		left: 0;
		width: 144px;
		height: 144px;
	}
`;

export const Container = styled.div`
	display: grid;
	grid-template-columns: 230px 2fr;
	max-width: 1200px;
	margin: 0 auto;
	align-items: center;
	justify-content: space-evenly;
`;

export const LeftColumn = styled.div``;

export const RightColumn = styled.article`
	display: grid;
	grid-template-columns: repeat(7, 100px);
	grid-template-rows: repeat(2, 100px);
	gap: 16px;
	justify-content: end;
`;

export const Pet = styled.picture<{ $active?: Boolean }>`
	grid-column: ${(props) => (props.$active ? "2 / span 2" : "auto")};
	grid-row: ${(props) => (props.$active ? "1 / span 2" : "auto")};
	width: ${(props) => (props.$active ? "216px" : "100px")};
	height: ${(props) => (props.$active ? "216px" : "100px")};
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;

	p {
		display: ${(props) => (props.$active ? "block" : "none")};
		color: ${Colors.white};
		font-family: Josefin Sans;
		font-size: 3.3rem;
		font-style: normal;
		font-weight: 500;
		line-height: 3.4rem;
	}

	span {
		font-size: 1.7rem;
	}

	img {
		width: ${(props) => (props.$active ? "80%" : "100%")};
		height: ${(props) => (props.$active ? "80%" : "100%")};
		filter: brightness(${(props) => (props.$active ? "1" : "0.6")});
		border-radius: 50%;

		border: 3px solid
			${(props) => (props.$active ? Colors.white : "transparent")};

		transition: all 0.16s ease-in-out;

		&:hover {
			cursor: pointer;
			filter: brightness(1);
			border-color: ${Colors.yellow};
		}
	}
`;
