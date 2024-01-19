import pet01 from "../../assets/images/pet-01.jpg";
import pet02 from "../../assets/images/pet-02.jpg";
import pet03 from "../../assets/images/pet-03.jpg";
import pet04 from "../../assets/images/pet-04.jpg";
import pet05 from "../../assets/images/pet-05.jpg";
import pet06 from "../../assets/images/pet-06.jpg";
import pet07 from "../../assets/images/pet-07.jpg";
import pet08 from "../../assets/images/pet-08.jpg";
import pet09 from "../../assets/images/pet-09.jpg";
import pet10 from "../../assets/images/pet-10.jpg";
import pet11 from "../../assets/images/pet-11.jpg";

export type IPet = {
	id: number;
	name: string;
	race: string;
	image: string;
};

export default [
	{ id: 1, name: "Robert", race: "Dog", image: pet01 },
	{ id: 2, name: "Molly", race: "Cat", image: pet02 },
	{ id: 3, name: "Charlie", race: "Parrot", image: pet03 },
	{ id: 4, name: "Buddy", race: "Leopard", image: pet04 },
	{ id: 5, name: "Oscar", race: "Dog", image: pet05 },
	{ id: 6, name: "Toby", race: "Canary", image: pet06 },
	{ id: 7, name: "Tucker", race: "Rabit", image: pet07 },
	{ id: 8, name: "Jack", race: "Cat", image: pet08 },
	{ id: 9, name: "Duke", race: "Canary", image: pet09 },
	{ id: 10, name: "Teddy", race: "Parrot", image: pet10 },
	{ id: 11, name: "Winston", race: "Cat", image: pet11 },
];
