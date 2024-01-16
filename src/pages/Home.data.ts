import pet1 from "../assets/images/header-hero-1.png";
import pet2 from "../assets/images/header-hero-2.png";
import pet3 from "../assets/images/header-hero-3.png";
import pet4 from "../assets/images/header-hero-4.png";
import pet5 from "../assets/images/header-hero-5.png";

interface Data {
	id: number;
	image: string;
}

const data: Array<Data> = [
	{
		id: 0,
		image: pet1,
	},
	{
		id: 1,
		image: pet2,
	},
	{
		id: 2,
		image: pet5,
	},
	{
		id: 3,
		image: pet4,
	},
	{
		id: 4,
		image: pet3,
	},
];

export default data;
