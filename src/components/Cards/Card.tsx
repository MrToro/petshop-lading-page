import styled from "styled-components";
import { Button as GlobalButton, Paragraph } from "../../styles/Global.styles";
import Colors from "../../styles/Colors";

import parMask from "../../assets/images/service-par-mask.svg";
import oddMask from "../../assets/images/service-odd-mask.svg";

const Wrapper = styled.article<{ isPar?: boolean; isActive: boolean }>`
	width: 100%;
	padding: 64px 32px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 16px;
	transition: all 0.3s ease-in-out;
	background-color: ${Colors.yellow};
`;

const Title = styled.h3`
	color: ${Colors.dark};
	font-family: Josefin Sans;
	font-size: 2.6rem;
	font-style: normal;
	font-weight: 500;
	line-height: 3rem;
`;

const Button = styled(GlobalButton)`
	margin-top: 32px;
	width: min-content;
`;

interface ICard {
	data: {
		id: number;
		icon: string;
		title: string;
		description: string;
	};
	isActive: boolean;
}

const Card: React.FC<ICard> = ({ data, isActive }) => {
	return (
		<Wrapper isPar={data.id % 2 === 0} isActive={isActive}>
			<Title>{data.title}</Title>
			<Paragraph>{data.description}</Paragraph>
			<Button>Explore</Button>
		</Wrapper>
	);
};

export default Card;
