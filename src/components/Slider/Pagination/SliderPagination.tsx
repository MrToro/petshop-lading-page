// Importamos los estilos necesarios
import { Wrapper, Page } from "./SliderPagination.styles";

// Definimos el componente SliderPagination
// Este componente recibe como propiedades la página actual y los datos de las páginas
export const SliderPagination: React.FC<{
	currentPage: number; // Página actual
	data: Array<any>; // Datos de las páginas
}> = ({ currentPage, data }) => {
	return (
		// Renderizamos el contenedor del paginador
		<Wrapper>
			{/* Mapeamos los datos de las páginas para renderizar cada una de ellas */}
			{data.map((page) => (
				// Renderizamos cada página
				// Le asignamos una clave única y le indicamos si está activa
				<Page key={page.id} $active={page.id === currentPage} />
			))}
		</Wrapper>
	);
};
