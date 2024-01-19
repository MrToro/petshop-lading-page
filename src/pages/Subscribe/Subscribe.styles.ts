import styled from "styled-components";
import Colors from "../../styles/Colors";
import {
	Section as GlobalSection,
	Heading2 as GlobalHeading2,
} from "../../styles/Global.styles";

import Images from "./Subscribe.images";

export const Wrapper = styled(GlobalSection)`
	padding: 50px 170px;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 50%;
		height: 100%;
		background: ${Colors.yellow};
		z-index: -1;
	}

	&::after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		width: 50%;
		height: 100%;
		background: ${Colors.primary};
		z-index: -1;
	}
`;

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	max-width: 1200px;
	margin: 0 auto;

	&::before {
		content: url(${Images.lines});
		position: absolute;
		top: 57px;
		right: -57px;
		width: 184.368px;
		height: 193.758px;
	}
`;

export const LeftColumn = styled.div`
	padding-right: 64px;
	position: relative;

	picture {
		&::before {
			content: url(${Images.arc});
			position: absolute;
			width: 550.443px;
			height: 163.675px;
			transform-origin: 50% 50%;
			transform: translate(-10%, 25%);
		}
	}

	img {
		position: absolute;
		overflow: visible;
		width: 400px;
		transform-origin: 50% 50%;
		transform: translate(20%, -20%);
	}
`;

export const RightColumn = styled.article`
	padding-left: 64px;
`;

export const Heading2 = styled(GlobalHeading2)``;

export const Form = styled.form`
	display: grid;
	grid-template-columns: 1fr 40px;
	padding-top: 50px;
	padding-bottom: 16px;
	width: 100%;
	border-bottom: 1px solid ${Colors.white};

	input {
		border: none;
		background: transparent;

		color: ${Colors.white};
		font-family: Open Sans;
		font-size: 2.6rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2.8rem;

		&::placeholder {
			color: ${Colors.white};
			opacity: 1;
		}

		&::-ms-input-placeholder {
			color: ${Colors.white};
		}
	}

	button {
		background: transparent;
		background-image: url(${Images.arrow});
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;

		&:hover {
			cursor: pointer;
		}
	}
`;
