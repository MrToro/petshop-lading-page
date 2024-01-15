import { useState } from "react";

import {
	Wrapper,
	Container,
	LeftColumn,
	Slider,
	RightColumn,
	Heading2,
	Paragraph,
} from "./Reviews.styles";
import Images from "./Reviews.images";

import data from "./Reviews.data";
import SliderButton from "../components/Slider/SliderButton";
import SliderPagination from "../components/Slider/SliderPagination";

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
		if (currentPage === 1) {
			setCurrentPage(data.length);
		} else {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<Wrapper>
			<Container>
				<LeftColumn>
					<img
						src={data.find(({ id }) => id === currentPage).image}
						alt="a our client photo"
					/>
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
