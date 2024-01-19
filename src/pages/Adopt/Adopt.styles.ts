import styled from "styled-components";
import Colors from "../../styles/Colors";
import {
	Section as GlobalSection,
	Heading2 as GlobalHeading2,
	Paragraph as GlobalParagraph,
	Button as GlobalButton,
} from "../../styles/Global.styles";

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
		right: -106px;
		bottom: 25px;
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

export const LeftColumn = styled.div`
	padding-right: 32px;

	img {
		width: 100%;
		height: 100%;
		mask-image: url(${Images.dog.mask});
		mask-repeat: no-repeat;
		mask-size: contain;
	}
`;

export const RightColumn = styled.article`
	display: flex;
	flex-direction: column;
	gap: 32px;
	padding-left: 32px;
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
