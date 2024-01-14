import {
	Wrapper,
	Container,
	LeftColumn,
	RightColumn,
	Heading2,
	Paragraph,
	List,
	Button,
} from "./Adopt.styles";

import Images from "./Adopt.images";

const Adopt: React.FC = () => {
	return (
		<Wrapper>
			<Container>
				<LeftColumn>
					<picture>
						<source
							sizes="1920w, 1280w, 640w"
							srcSet={`${Images.dog.avif.desktop} 1920w, 
							${Images.dog.avif.tablet} 1280w, 
							${Images.dog.avif.mobile} 640w`}
							type="image/avif"
						/>
						<source
							sizes="1920w, 1280w, 640w"
							srcSet={`${Images.dog.webp.desktop} 1920w, 
							${Images.dog.webp.tablet} 1280w, 
							${Images.dog.webp.mobile} 640w`}
							type="image/webp"
						/>
						<source
							sizes="1920w, 1280w, 640w"
							srcSet={`${Images.dog.jpg.desktop} 1920w, 
							${Images.dog.jpg.tablet} 1280w, 
							${Images.dog.jpg.mobile} 640w`}
							type="image/jpeg"
						/>
						<img
							loading="lazy"
							decoding="async"
							src={Images.dog.jpg.desktop}
							alt="A woman with a dog"
						/>
					</picture>
				</LeftColumn>

				<RightColumn>
					<Heading2 light="true">
						Making pet parenting easy for everyone
					</Heading2>

					<Paragraph light="true">
						Could this be the dog with the longest tail? The Rampur Greyhound -
						shy, sensitive, alert, and faithful. This is a breed that has
						climbed its way to being top dog because of its intelligence
					</Paragraph>

					<List>
						<li>Adoption</li>
						<li>Frozen Raw</li>
						<li>Next Day Delivery</li>
					</List>

					<Button>Expore</Button>
				</RightColumn>
			</Container>
		</Wrapper>
	);
};

export default Adopt;
