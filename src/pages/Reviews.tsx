import {
	Wrapper,
	Container,
	LeftColumn,
	RightColumn,
	Heading2,
	Paragraph,
} from "./Reviews.styles";

import Images from "./Reviews.images";

const Reviews = () => {
	return (
		<Wrapper>
			<Container>
				<LeftColumn>
					<img src={Images.review} alt="" />
				</LeftColumn>
				<RightColumn>
					<Heading2>Customer Reviews</Heading2>
					<Paragraph>
						As we continue to push for better regulation in the Australian pet
						food industry it can be hard to trust many pet food brands. Our 2021
						Best Cat Food in Australia list will offer you a great starting
						point in deciding what to feed your cat.
					</Paragraph>
				</RightColumn>
			</Container>
		</Wrapper>
	);
};

export default Reviews;
