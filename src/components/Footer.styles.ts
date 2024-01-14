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

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	max-width: 1200px;
	margin: 0 auto;
`;

export const LeftColumn = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const RightColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Lines = styled.img`
	position: absolute;
	right: 0;
	border-bottom: 0;
`;

export const Navigation = styled.div`
	display: flex;
	gap: 32px;
`;

export const Socials = styled.div`
	display: flex;
	gap: 16px;
`;

export const Link = styled(GlobalLink)``;

export const Paragraph = styled(GlobalParagraph)`
	color: ${Colors.white};
`;
