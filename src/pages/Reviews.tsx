import {
	Wrapper,
	Container,
	LeftColumn,
	Slider,
	RightColumn,
	Heading2,
	Paragraph,
} from "./Reviews.styles";

import SliderPagination from "../components/Slider/SliderPagination";
import Images from "./Reviews.images";
import SliderButton from "../components/Slider/SliderButton";
import { useState } from "react";

const data = [
	{
		id: 1,
		image: Images.review,
		review:
			"Excellent pet store! I always find what I need for my dog. They have a great selection of high-quality food and toys. My dog is always excited when I bring something new from this store.",
	},
	{
		id: 2,
		image: Images.review,
		review:
			"I love the variety of cat food and toys. My cat is always happy with its new toys. Also, the employees are very helpful and give me excellent recommendations on which products to try.",
	},
	{
		id: 3,
		image: Images.review,
		review:
			"The staff is very friendly and always helps me find the best products for my pet. I love that they take the time to get to know my pet and understand its needs. It really feels like a personalized service.",
	},
	{
		id: 4,
		image: Images.review,
		review:
			"They always have the products I need in stock. And my dog loves coming to the store! We especially appreciate the special events and promotions they regularly hold.",
	},
	{
		id: 5,
		image: Images.review,
		review:
			"The best pet store in town. I always recommend my friends to come here for all their pet needs. They have a great selection and I can always find something new and exciting for my pet.",
	},
];

const Reviews: React.FC = () => {
	const [currentPage, setCurrentPage] = useState<number>(3);

	const handleNext = () => {
		if (currentPage === data.length) {
			setCurrentPage(1);
		} else {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePrevious = () => {
		if (currentPage === 0) {
			setCurrentPage(data.length);
		} else {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<Wrapper>
			<Container>
				<LeftColumn>
					<img src={Images.review} alt="" />
					<Slider>
						<SliderPagination currentPage={currentPage} data={data} />
					</Slider>
				</LeftColumn>
				<RightColumn>
					<Heading2>Customer Reviews</Heading2>
					<Paragraph>
						{data.find(({ id }) => id === currentPage).review}
					</Paragraph>
					<div>
						<SliderButton onClick={handlePrevious} direction="left" />
						<SliderButton
							onClick={handleNext}
							direction="right"
							border={true}
						/>
					</div>
				</RightColumn>
			</Container>
		</Wrapper>
	);
};

export default Reviews;
