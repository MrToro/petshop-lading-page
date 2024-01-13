import styled from "styled-components";
import Colors from "../styles/Colors";
import {
	Paragraph as GlobalParagraph,
	Link as GlobalLink,
} from "../styles/Global.styles";

export const Wrapper = styled.footer`
	padding: 80px 170px;
	background-color: ${Colors.dark};
`;

export const Link = styled(GlobalLink)``;

export const Paragraph = styled(GlobalParagraph)`
	color: ${Colors.white};
`;
