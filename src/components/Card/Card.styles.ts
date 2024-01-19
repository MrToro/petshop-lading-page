import styled from "styled-components";
import {
	Button as GlobalButton,
	Paragraph as GlobalParagraph,
} from "../../styles/Global.styles";
import Colors from "../../styles/Colors";

import parMask from "../../assets/images/service-par-mask.svg";
import oddMask from "../../assets/images/service-odd-mask.svg";

export const Wrapper = styled.article<{ $isPar?: boolean; $isActive: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 8px;
	width: 100%;
	padding: 90px 30px;
	transition: all 0.3s ease-in-out;

	background-color: ${({ $isActive }) =>
		$isActive ? Colors.yellow : Colors.bright};
	mask-image: url(${({ $isPar }) => ($isPar ? parMask : oddMask)});
	mask-size: 100% 100%;
	mask-repeat: no-repeat;

	picture {
		background-color: ${({ $isActive }) =>
			$isActive ? Colors.bright : Colors.yellow};
		border-radius: 50%;
		width: 100px;
		height: 100px;
		margin-bottom: 16px;
		transition: all 0.3s ease-in-out;
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			padding: 16px;
		}
	}
`;

export const Title = styled.h3`
	color: ${Colors.dark};
	font-family: Josefin Sans;
	font-size: 2.6rem;
	font-style: normal;
	font-weight: 500;
	line-height: 3rem;
`;

export const Paragraph = styled(GlobalParagraph)`
	font-size: 2rem;
`;

export const Button = styled(GlobalButton)`
	margin-top: 30px;
	width: min-content;
`;
