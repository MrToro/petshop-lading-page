import styled from "styled-components";
import {
	Section as GlobalSection,
	Heading2 as GlobalHeading2,
} from "../styles/Global.styles";

import Images from "./Services.images";
import Colors from "../styles/Colors";

export const Wrapper = styled(GlobalSection)`
	position: relative;
	display: flex;
	gap: 50px;
	padding: 80px 200px;

	&::before {
		content: url(${Images.design});
		position: absolute;
		top: 100px;
		left: -125px;
		width: 60px;
		height: 300px;
	}

	&::after {
		content: url(${Images.scratch});
		position: absolute;
		top: 16px;
		right: -100px;
		width: 200px;
		height: 200px;
	}
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 32px;
`;

export const Heading2 = styled(GlobalHeading2)`
	margin-left: 20px;
`;

export const ServicesContainer = styled.div<{
	cardsCount: number;
	currentCard: number;
}>`
	display: grid;
	grid-template-columns: repeat(${(props) => props.cardsCount}, 540px);
	gap: 32px;
	position: relative;
	translate: calc((-540px - 32px) * ${(props) => props.currentCard}) 0px;
	transition: translate 0.5s ease-in-out;
`;

export const SliderButtons = styled.div`
	display: flex;
	justify-content: flex-end;
`;
