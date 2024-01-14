import styled from "styled-components";
import Colors from "../styles/Colors";
import {
	Section as GlobalSection,
	Heading2 as GlobalHeading2,
	Paragraph as GlobalParagraph,
	Button as GlobalButton,
} from "../styles/Global.styles";

import Images from "./Adopt.images";

export const Wrapper = styled(GlobalSection)`
	background-color: ${Colors.blue};
	position: relative;

	&::before {
		content: url(${Images.lines});
		position: absolute;
		top: calc(50% - 16px);
		left: 0;
		width: 186px;
		height: 57px;
	}

	&::after {
		content: url(${Images.scratch});
		position: absolute;
		bottom: 25px;
		right: -106px;
		width: 212px;
		height: 229px;
	}
`;

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	max-width: 1200px;
	margin: 0 auto;
`;

export const LeftColumn = styled.div``;

export const RightColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
`;

export const AdoptImage = styled.div`
	background-image: url(${Images.adopt.desktop});
	background-position: 70%;
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;
	height: 100%;
	mask-image: url(${Images.adopt.mask});
	mask-repeat: no-repeat;
	mask-size: contain;
`;

export const Heading2 = styled(GlobalHeading2)``;

export const Paragraph = styled(GlobalParagraph)``;

export const List = styled.ul`
	display: flex;
	flex-direction: column;

	li {
		margin-left: 24px;
		padding: 8px;
		color: ${Colors.light};
		font-family: Josefin Sans;
		font-size: 2.2rem;
		font-style: normal;
		font-weight: 500;
		list-style-image: url(${Images.listStyle});
	}
`;

export const Button = styled(GlobalButton)`
	max-width: min-content;
`;
