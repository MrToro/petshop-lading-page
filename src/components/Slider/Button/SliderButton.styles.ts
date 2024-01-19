import styled from "styled-components";
import Colors from "../../../styles/Colors";

export const Button = styled.button<{
	$border?: Boolean;
	$isDiagonal?: Boolean;
}>`
	padding-inline: 50px;
	padding-block: 16px;
	border-radius: 50%;
	margin-right: ${({ $isDiagonal }) => ($isDiagonal ? "0" : "-32px")};
	background: ${Colors.dark};
	border: 2px solid ${({ $border }) => ($border ? Colors.white : "transparent")};

	transition: border-color 0.2s ease-in-out;

	&:hover {
		cursor: pointer;
		border-color: ${Colors.primary};
	}
`;
