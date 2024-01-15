import styled from "styled-components";
import Colors from "../styles/Colors";

import {
	Section as GlobalSection,
	Heading2 as GlobalHeading2,
	Paragraph as GlobalParagraph,
} from "../styles/Global.styles";

import Images from "./Reviews.images";

export const Wrapper = styled(GlobalSection)`
	padding-top: 100px;
	padding-bottom: 132px;

	position: relative;

	&::after {
		content: url(${Images.design});
		position: absolute;
		top: 0;
		right: -255px;
		width: 500px;
		height: 500px;
		z-index: 1;
	}
`;

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	max-width: 1200px;
	margin: 0 auto;
`;

export const LeftColumn = styled.div`
	position: relative;

	img {
		border-radius: 36px;
		border: 2px solid ${Colors.black};
	}

	&::after {
		content: url(${Images.seal});
		position: absolute;
		top: -50px;
		right: -50px;
		width: 136px;
		height: 136px;
		z-index: 1;
	}
`;

export const Slider = styled.div`
	position: absolute;
	left: calc(50% - 120px);
	bottom: -68px;
	padding: 64px;
	background-image: url(${Images.sliderMask});
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
`;

export const RightColumn = styled.article`
	padding-left: 64px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 16px;
`;

export const Heading2 = styled(GlobalHeading2)``;

export const Paragraph = styled(GlobalParagraph)`
	padding: 32px;
	width: 475px;
	height: 360px;
	background-color: ${Colors.bright};
	mask-image: url(${Images.mask});
	mask-size: contain;
	mask-repeat: no-repeat;
`;
