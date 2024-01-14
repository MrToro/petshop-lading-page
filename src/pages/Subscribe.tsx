import {
	Wrapper,
	Container,
	LeftColumn,
	RightColumn,
	Heading2,
	Form,
} from "./Subscribe.styles";

import Images from "./Subscribe.images";

const Subscribe = () => {
	return (
		<Wrapper>
			<Container>
				<LeftColumn>
					<picture>
						<source
							sizes="1920w, 1280w, 640w"
							srcSet={`${Images.desktop.avif} 1920w, 
							${Images.tablet.avif} 1280w, 
							${Images.mobile.avif} 640w`}
							type="image/avif"
						/>
						<source
							sizes="1920w, 1280w, 640w"
							srcSet={`${Images.desktop.webp} 1920w, 
							${Images.tablet.webp} 1280w, 
							${Images.mobile.webp} 640w`}
							type="image/webp"
						/>
						<source
							sizes="1920w, 1280w, 640w"
							srcSet={`${Images.desktop.png} 1920w, 
							${Images.tablet.png} 1280w, 
							${Images.mobile.png} 640w`}
							type="image/jpeg"
						/>
						<img
							loading="lazy"
							decoding="async"
							src={Images.desktop.png}
							alt="A woman with a dog"
						/>
					</picture>
				</LeftColumn>
				<RightColumn>
					<Heading2>Subscribe & Get Pet Updatenews</Heading2>
					<Form>
						<input type="text" placeholder="Mail" />
						<button type="submit" />
					</Form>
				</RightColumn>
			</Container>
		</Wrapper>
	);
};

export default Subscribe;
