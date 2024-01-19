// Importamos los estilos y las imágenes necesarias
import {
	Wrapper,
	Container,
	LeftColumn,
	RightColumn,
	Navigation,
	Lines,
	Socials,
	Paragraph,
	Link,
} from "./Footer.styles";

import Images from "./Footer.images";

// Definimos el componente Footer
export const Footer: React.FC = () => {
	return (
		// Renderizamos el contenedor principal del pie de página
		<Wrapper>
			<Container>
				{/* // Renderizamos la columna izquierda del pie de página */}
				<LeftColumn>
					{/* // Renderizamos el logotipo */}
					<Link href="#">
						<img src={Images.logo} draggable="false" alt="logotype" />
					</Link>
					{/* // Renderizamos las líneas de decoración */}
					<Lines src={Images.lines} draggable="false" alt="decoration lines" />
				</LeftColumn>

				{/* // Renderizamos la columna derecha del pie de página */}
				<RightColumn>
					{/* // Renderizamos la navegación */}
					<Navigation>
						{/* // Renderizamos los enlaces de la navegación */}
						<Link href="#" $white="true">
							About
						</Link>
						<Link href="#" $white="true">
							Project
						</Link>
						<Link href="#" $white="true">
							Service
						</Link>
						<Link href="#" $white="true">
							Client
						</Link>
						<Link href="#" $white="true">
							Team
						</Link>
						<Link href="#" $white="true">
							Blog
						</Link>
						<Link href="#" $white="true">
							Contact
						</Link>
					</Navigation>

					{/* // Renderizamos las redes sociales */}
					<Socials>
						<Paragraph $white="true">Flow</Paragraph>

						{/* // Renderizamos los enlaces a las redes sociales */}
						<Link href="#">
							<img src={Images.socials.facebook} alt="logo" />
						</Link>
						<Link href="#">
							<img src={Images.socials.instagram} alt="logo" />
						</Link>
						<Link href="#">
							<img src={Images.socials.twitter} alt="logo" />
						</Link>
					</Socials>
				</RightColumn>
			</Container>
		</Wrapper>
	);
};
